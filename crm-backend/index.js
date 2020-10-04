const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json());
// routes

// get all users

app.get("/allusers", async(req, res) => {
  
  try {
    const listUsers = await pool.query("SELECT * from customer");

    res.json(listUsers.rows);

  } catch (err) {
    console.log(err.message);
  }
  
})

// get a user

app.get("/getuser/:id", async (req, res) => {
  
  const { id } = req.params;
  
  try {
    
    const getUser = await pool.query("SELECT * FROM customer WHERE cust_id=$1", [id]);

    res.json(getUser.rows[0]);

  } catch (err) {
    console.log(err.message);
  }
})


// create a new user

app.post("/adduser", async (req,res) => {
  try{
    // console.log(req.body);
    const { cust_name } = req.body;
    const { cust_email } = req.body;
    const { cust_phn } = req.body;
    const { cust_address } = req.body;
    const { cust_gst } = req.body;

    const newUser = await pool.query("INSERT INTO customer (cust_name, cust_email, cust_phn, cust_address, cust_gst, rem_freq) VALUES ($1, $2, $3, $4, $5, 0) RETURNING *", [cust_name, cust_email, cust_phn, cust_address, cust_gst]);

    res.json(newUser.rows[0]);
  }
  catch(err){
    console.log(err.message);
  }
});


// update a user

app.put("/allusers/:id", async (req, res) => {

  try {
    const { id } = req.params;
    const { cust_name } = req.body;
    const { cust_email } = req.body;
    const { cust_phn } = req.body;
    const { cust_address } = req.body;
    const { cust_gst } = req.body;
  
    const updateUser = await pool.query("UPDATE customer SET cust_name = $1, cust_email = $2, cust_phn = $3, cust_address = $4, cust_gst = $5 WHERE cust_id = $6", [cust_name, cust_email, cust_phn, cust_address, cust_gst, id]);

    res.json("User was updated in the DB");


  } catch (err) {
    console.log(err.message);
  }

});

// delete a user

app.delete("/allusers/:id", async (req, res) => {

  try {
    
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM customer WHERE cust_id = $1", [id]);

    res.json("The user was removed from DB");


  } catch (err) {
    console.log(err.message);
  }
});




app.listen(5000, () => {
  console.log("server is running on port 5000");
});
