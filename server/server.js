const express=require('express');
const cors=require('cors');
const parser=require("body-parser")
const actions=require("./database-actions.js");


const INSERT="INSERT";
const FIND_ALL="FIND_ALL";
const FIND_ONE="FIND_ONE";
const UPDATE="UPDATE";
const DELETE="DELETE";



const app=express();
app.use(cors());
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
//root endpoint
app.get("/",(req,res)=>{
	res.send("Reached root end point");
})
//login
//register
app.post("/register",(req,res)=>{
	console.log(req.body)
	const {username, fullname, email, coords, postcode} = req.body;
	console.log({username,fullname,email,coords,postcode});
	const newEntry={
		username, fullname, email, coords, postcode
	}
	const result=actions.dbCall(INSERT, "users", newEntry, username);
	console.log(result);
	res.send(result);
})
//add/remove friend
//request permission




app.listen(3001,()=>console.log("listening"));
