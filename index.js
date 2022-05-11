const express = require('express');
const app = express();
const mysql= require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Root2022!",
    database: "formulaire",
})

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO clients (client_nom, client_prenom) VALUES ('nom_test', 'prenom_test');";
    db.query(sqlInsert, (err, result) => {
        res.send("Inserted !");
    })
    /*res.send("test");*/
})

app.post("/api/insert", (req, res) => {
    const sqlInsert = "INSERT INTO clients (client_nom, client_prenom) VALUES (?, ?);";
    db.query(sqlInsert, [CliNom, CliPrenom], (err, result) => {
        res.send("Inserted !");
    })
})

app.listen(3006, () => {
    console.log("running on port 3006");
})