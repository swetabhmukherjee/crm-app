CREATE DATABASE crm;

--\c into db

CREATE TABLE customer(
    cust_id SERIAL PRIMARY KEY,
    cust_name VARCHAR(100),
    cust_email VARCHAR(50),
    cust_phn VARCHAR(10),
    cust_address VARCHAR(300),
    cust_gst VARCHAR(20),
    rem_freq VARCHAR(5)

);