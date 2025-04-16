import nodemon from "nodemon";
import Express from "express";
import cors from "cors";
import mysql from "mysql";

const app = Express();

app.use(cors());

app.listen(8081, ()=>{
    console.log("app is listening on port 8081");
});