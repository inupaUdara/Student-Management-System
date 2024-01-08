const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
require("dotenv").config();
const studentRouter=require("./routes/students.js");
// dotenv.config();
const PORT =process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL= process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false 
});

const connection=mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection successfull!");
})


const StudentRouter=require("./routes/students.js");

app.use("/student",StudentRouter);

const TeacherRouter=require("./routes/TeacherRoute.js");
app.use("/teacher",TeacherRouter);

const AdminRouter=require("./routes/admins.js");
app.use("./admin",AdminRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);
})