import Alert from 'react-bootstrap/Alert';

function Alert1 (){
    return <div class="container pt-3 pb-7 px-7 rounded border-dark bg-light mt-5" style={{textAlign:"center"}}>
    <Alert variant="success" style={{width:"500px"}}>
    <Alert.Heading>Done</Alert.Heading>
    <p>
     Your Order has been placed.
     Thank Your for using our App.
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to,we are here to Serve!
    </p>
  </Alert>
  </div>
}

export default Alert1;