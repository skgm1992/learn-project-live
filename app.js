import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const DB_URL="mongodb+srv://shubhj1588:1r8Afc1L7Mlrj4sN@cluster0.td0mwwn.mongodb.net/";

mongoose
.connect(DB_URL)
.then(()=>console.log("CONNECTED"))
.catch((err)=>console.log("NOT CONNECTED",err));

let City=mongoose.model("city",mongoose.Schema({
    id:String,
    name:String,
    state:String
},{collection:"city"}));


let app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/v1/city",async(req,res)=>{
    try{
    let result=await City.find();
    res.send(result);
    }catch(err){
        res.send({success:false,err});
    }
})

app.listen(3000,()=>console.log("Server Connected"));
