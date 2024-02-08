CREATE database foodie;

CREATE table customers
(
    id bigint PRIMARY KEY auto_increment,
    name varchar(50) Not Null,
    email varchar(100) Not Null Unique,
    password varchar(255) Not Null,
    mobile_no varchar(10) Not Null Unique,
    address varchar(255) Not Null,
    pincode varchar(6) Not Null,
    image varchar(255) Not Null DEFAULT 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    status varchar(10) Not Null Default 'active'
);

CREATE table vendors
(
    id bigint PRIMARY KEY auto_increment,
    name varchar(50) Not Null,
    email varchar(100) Not Null Unique,
    password varchar(255) Not Null,
    mobile_no varchar(10) Not Null Unique,
    address varchar(255) Not Null,
    pincode varchar(6) Not Null,
    ratings int Not Null Default 4,
    status varchar(10) Not Null Default 'pending'
);

CREATE table admin
(
    id bigint PRIMARY KEY,
    email varchar(100) Not Null Unique,
    password varchar(255) Not Null
);

CREATE table cuisines
(
    id bigint PRIMARY KEY auto_increment,
    name varchar(50) Not Null,
    vendor_id bigint Not Null,
    description text Not Null,
    category boolean Not Null,
    type varchar(20) Not Null,
    ratings int Not Null Default 4,
    price float Not Null,
    discount float Not Null Default 0.00,
    image varchar(255) Not Null,
    CONSTRAINT fk_vendorid_cuisine FOREIGN KEY (vendor_id) REFERENCES vendors(id) ON UPDATE CASCADE ON DELETE CASCADE ,
    CONSTRAINT Uc_vendorid_cuisine UNIQUE(vendor_id, name)
);

CREATE table cart
(
  id bigint PRIMARY KEY auto_increment,
  customer_id bigint Not Null,
  cuisine_id bigint Not Null,
  unit_price float Not Null,
  quantity int default 1,
  discount float Not Null Default 0.00,
  total_amount float Not Null Default (unit_price * quantity * (1-discount)),
  CONSTRAINT fk_customerid_cart FOREIGN KEY (customer_id) REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE ,
  CONSTRAINT fk_cusineid_cart FOREIGN KEY (cuisine_id) REFERENCES cuisines(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE table orders
(
    id bigint PRIMARY KEY auto_increment,
    customer_id bigint Not Null,
    order_total float Not Null,
    otime datetime Not Null default (now()),
    dtime datetime,
    status varchar(10) Default 'ordered',
    CONSTRAINT fk_customerid_orders FOREIGN KEY (customer_id) REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE table orders_items
(
    id bigint PRIMARY KEY auto_increment,
    order_id bigint Not Null,
    cuisine_id bigint Not Null,
    unit_price float Not Null,
    quantity int default 1,
    discount float Not Null Default 0.00,
    total_amount float Not Null Default (unit_price * quantity * (1-discount)),
    CONSTRAINT fk_orderid_orderitems FOREIGN KEY (order_id) REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_cusineid_orderitems FOREIGN KEY (cuisine_id) REFERENCES cuisines(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE table favourites
(
    id bigint PRIMARY KEY auto_increment,
    customer_id bigint Not Null,
    cuisine_id bigint Not Null,
    CONSTRAINT fk_cusineid_favourites FOREIGN KEY (cuisine_id) REFERENCES cuisines(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_customerid_favourites FOREIGN KEY (customer_id) REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT Uc_customerid_cuisineid UNIQUE(customer_id,cuisine_id)
);


CREATE table payment
(
    id bigint PRIMARY KEY auto_increment,
    order_id bigint Not Null,
    payment_method varchar(10) Not Null,
    transaction_id varchar(50) Not Null Unique,
    CONSTRAINT fk_orderid_payment FOREIGN KEY (order_id) REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE table feedback
(
    id bigint PRIMARY KEY auto_increment,
    customer_id bigint Not Null,
    vendor_id bigint Not Null,
    suggestions text,
    CONSTRAINT fk_customerid_feedback FOREIGN KEY (customer_id) REFERENCES customers(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_vendorid_feedback FOREIGN KEY (vendor_id) REFERENCES vendors(id) ON UPDATE CASCADE ON DELETE CASCADE
);





