import express, { Router } from "express";
import mysql from "mysql";
import cors from "cors";


/* const express = require('express'); */
const app = express();




const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pastry_db"
})

app.use(express.json());
app.use(cors());






/* app.post("/books", (req,res)=>{
    const q= "INSERT INTO books ('title, 'desc', 'cover') VALUES (?)"
    const values = ["title from bakend", "desc from backend", "cover form backend"]


}) */


app.get("/", (req, res)=>{
    res.json("Hello this is the backend")
})


/* REGISTER */
app.post("/customer", (req, res)=>{

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;


        db.query(
        "INSERT INTO customer_tbl(customer_name, customer_password, customer_email) VALUES(?,?,?)",
        [username, email, password],
    
         (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

/* LOGIN */
app.post('/login', (req, res)=>{

        const email = req.body.email;
        const password = req.body.password;

        db.query(
        "SELECT * FROM customer_tbl WHERE customer_email = ? AND customer_password = ?",
        [email, password],
        
        (err, result)=>{
            if(err){
                res.send({err: err});
            };
            if(result.length > 0){
                res.send(result);
            }else{
            res.send({message: "Wrong Username or Password"})
            }
        })
})


/* GET CUSTOMER */
app.get("/customer", (req,res)=>{
    const q= "SELECT * FROM customer_tbl";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

/* GET PRODUCT */
app.get("/products", (req,res)=>{
    const q= "SELECT * FROM products_tbl";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

/* GET CART */
app.get("/cart", (req,res)=>{
    const q= "SELECT * FROM cart_tbl";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})




/* ADD TO CART */
app.post("/carts", (req, res)=>{

    const name = req.body.pname;
    const price = req.body.pprice;
    const url = req.body.purl

    db.query(
    "INSERT INTO cart_tbl(product_name, product_price, product_img) VALUES(?,?,?)",
    [name, price, url],

     (err, data)=>{
    if(err) return res.json(err);
    return res.json(data);
})
})


/* DELETE CART */

app.delete("/cartdelete/:id", (req,res)=>{
    const cartIds = req.params.id;
    const q = "DELETE FROM cart_tbl WHERE cart_id = ?"

    db.query(q, [cartIds], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Item has been deleted");
    })
})



 app.listen(3577, ()=>{
    console.log("Connected to Backend!")
})

 

