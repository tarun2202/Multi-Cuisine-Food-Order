const express = require('express');
const foodieRouter = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');
const { constants } = require('../env');
require('dotenv').config();

function executeQuery(statement){
    return new Promise((resolve, reject) => {
        db.query(statement, (error, data) => {
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        });
    });
};

foodieRouter.get('/getOrders/:id',async(request,response)=>{
    try{
         var statement = `SELECT o.id,o.order_total,o.order_status,oi.quantity,d.dish_name,c.customer_name from orders o,order_items oi,dish d,customers c
         where o.id=oi.order_id and o.customer_id=c.id and oi.dish_id=d.id and o.order_status="ORDERED" and d.vendor_id=${request.params.id}`;
         var data = await executeQuery(statement);
         response.status(200).send(data);
    }
    catch(error){
        response.status(400).send({"error": error});
    }
})

foodieRouter.post('/feedback',async(request,response)=>{
    try{
        var{feedback,customerId,dishId}=request.body;
        console.log(feedback,customerId,dishId);
        console.log(typeof customerId, typeof dishId);
        var custId = Number(customerId);
        var dId = Number(dishId);
        console.log(typeof custId, typeof dId);
         var statement = `INSERT into review (feedback,customer_id,dish_id) values("${feedback}",${custId},${dId});`;
         var data = await executeQuery(statement);
         console.log(data)
         response.status(200).send("Thank you for your valuable feedback!");
    }
    catch(error){
        response.status(400).send({"error": error});
        console.log(error);
    }
})

foodieRouter.put('/changeStatus/:id',async(request,response)=>{
    try{
         var statement = `UPDATE orders set order_status="OUTFORDELIVERY"
                           where id=${request.params.id}`;
         var data = await executeQuery(statement);
         response.status(200).send({message:"Order Prepared"});
    }
    catch(error){
        response.status(400).send({"error": error});
    }
})

foodieRouter.delete('/deleteCartItems/:id',async(request,response)=>{
    try{
         var statement = `DELETE from cart_item where id=${request.params.id}`;
         var data = await executeQuery(statement);
         response.status(200).send(data);
    }
    catch(error){
        response.status(400).send({"error": error});
    }
})

foodieRouter.get('/orderItems/:id',async(request,response)=>{
    try{
         var statement = `select d.dish_name,d.price,v.vendor_name,oi.quantity,d.id as dishId
         from dish d , vendors v, order_items oi, customers c, orders o where oi.dish_id=d.id and d.vendor_id=v.id and o.id=oi.order_id and o.customer_id=c.id and c.id=${request.params.id}; `;
         var data = await executeQuery(statement);
         response.status(200).send(data);
    }
    catch(error){
        response.status(400).send({"error": error});
    }
})

foodieRouter.delete('/clearCart/:id',async(request,response)=>{
    try{
         var statement = `DELETE from cart_item where customer_id=${request.params.id}`;
         var data = await executeQuery(statement);
         response.status(200).send({message:"DELETED"});
    }
    catch(error){
        response.status(400).send({"error": error});
    }
})


foodieRouter.post('/sendEmail',async(request,response)=>{
    try{
        var {orderId} = request.body;
        var statement = `select o.id,c.customer_name,c.customer_email,c.customer_mobile_no,concat(a.street,", ",a.city,", ",a.state,", ",a.country," - ",a.pincode) address,
        d.dish_name,oi.quantity,o.order_total,o.order_time,o.delivery_time
        from orders o,order_items oi,customers c,dish d,address a
        where o.id=oi.order_id and oi.dish_id=d.id and o.customer_id=c.id and a.customer_id=c.id and o.id=${orderId}`;
        var data = await executeQuery(statement);

        const orderTime = data[0].order_time.toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        const deliveryTime = data[0].delivery_time.toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });

        const orderNo = data[0].id;
        const orderTotal = data[0].order_total;
        var tableData = ``;
        for(var i=0; i<data.length; i++){
            tableData += `<tr><td>${data[i].dish_name}</td><td>${data[i].quantity}</td></tr>`;
        }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: constants.USER,
            pass: constants.PASS
        }
    });

    const message = `
Dear <strong>${data[0].customer_name}</strong>,<br/><br/>

Thank you for choosing <strong>foodie</strong> <br/>
We are pleased to confirm the receipt of your order <strong>#${data[0].id}</strong> placed on ${orderTime}.
<br/><br/>
<strong>Order details:</strong><br/>
<table border='1'><tr><td><h3>Cuisine</h3></td><td><h3>Quantity</h3></td></tr>
${tableData}
</table>
<br/><br/>
<strong>Delivery Address:</strong> ${data[0].address}<br/>
<strong>Delivery Date:</strong> ${deliveryTime}<br/>
<strong>Total Amount:</strong> ₹ ${data[0].order_total}<br/><br/>

We will notify you once your order has been dispatched for delivery.<br/><br/>

If you have any questions or concerns about your order, please don't hesitate to contact our customer support team at <u>foodiepro@gmail.com</u> or <u>+91 9518904262</u>.
<br/><br/>
Thank you again for choosing <strong>foodie</strong>. We appreciate your business!
<br/><br/>
Thank you,<br/>
foodie Team<br/><br/>
`;

    const mailOptions = {
        from: constants.USER,
        to: data[0].customer_email,
        subject: `Order Confirmation - #${data[0].id}`,
        html: message,
    };

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            response.status(200).send({"error": "Email not sent"});
            // return false;
        }else{
            // return true;
            response.status(200).send({message: "order placed"});
        }
    });
    }catch(error){
        response.status(400).send({"error": error});
    }
});

module.exports = foodieRouter;