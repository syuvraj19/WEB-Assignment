/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yuvraj Singh Student ID: 155580210 Date: 15/9/2023
*  Cyclic Link: https://agile-yak-waistcoat.cyclic.app/
*
********************************************************************************/ 

 const express = require("express");
 const app = express();

 app.get("/", (req, res)=>{
    res.json({ msg: "API Listening" });
 });

 const cors = require("cors");
 app.use(cors());

 require("dotenv").config();

 app.use(express.json());


const CompaniesDB = require("./modules/CompaniesDB.js");
 const db = new CompaniesDB();
 MONGODB_CONN_STRING="mongodb+srv://Marguptl:Marguptl573@senecaweb.cpfjxif.mongodb.net/sample_training?retryWrites=true&w=majority";

 const HTTP_PORT = process.env.PORT || 8080;

 app.use(express.json());
 
 

 app.post("/api/companies", (req, res) => {
   db.addNewCompany(req.body)
     .then((data) => {
       res.status(201).json(data); 
     })
     .catch((err) => {
       res.status(500).json({ message: err.message }); 
     });
 });
 

 app.get("/api/companies", (req, res) => {
   db.getAllCompanies(req.query.page, req.query.perPage, req.query.tag)
     .then((data) => {
       res.json(data); 
     })
     .catch((err) => {
       res.status(500).json({ message: err.message }); 
     });
 });
 
 

 app.get("/api/company/:name", (req, res) => {
   const name = req.params.name;
   db.getCompanyByName(name)
     .then((data) => {
       if (data) {
         res.json(data); 
         res.status(204).json({ message: "Company not found" });
       }
     })
     .catch((err) => {
       res.status(500).json({ message: err.message }); 
     });
 });
 

 app.put("/api/company/:name", (req, res) => {
   const name = req.params.name;
   db.updateCompanyByName(req.body, name)
     .then(() => {
       res.json({ message: `${req.body.name} updated` }); 
     })
     .catch((err) => {
       res.status(500).json({ message: err.message }); 
     });
 });
 
 

 app.delete("/api/company/:name", (req, res) => {
   const name = req.params.name;
   db.deleteCompanyByName(name)
     .then(() => {
       res.status(204).send(); 
     })
     .catch((err) => {
       res.status(500).json({ message: err.message }); 
     });
 });
 
 
 db.initialize(process.env.MONGODB_CONN_STRING).then(()=>{
   app.listen(HTTP_PORT, ()=>{
       console.log(`server listening on: ${HTTP_PORT}`);
   });
   }).catch((err)=>{
   console.log(err);
   });

