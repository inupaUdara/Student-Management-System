import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function AddTeacher() {

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const navigate = useNavigate ();

    function sentData(e) {
        e.preventDefault();

        const newTeacher = {

            name,
            age,
            gender
        }

<<<<<<<< HEAD:frontend/src/TeacherComponents/addTeacher.js

        axios.post("http://localhost:8070/Teacher/add", newTeacher).then(()=>{
========
        axios.post("http://localhost:8070/teacher/add", newTeacher).then(()=>{
>>>>>>>> d1a69de5a9e2740275d8454528eb50076731b264:frontend/src/components/addTeacher.js

            alert("Teacher Added");
            navigate('/teachers');

        }).catch((err)=>{
            alert(err);
        })


    }

    return (

        <div className = "container">
            <form onSubmit={sentData}>
                <div class = "mb-4">
                    <label for="name" class="from-label">Teacher Name</label>
                    <input type = "text" class = "from-control" id="name" placeholder="Enter Student Name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    
                 }}/>
    </div>

    <div class="mb-4">

        <label for="age" class="form-label">Teacher Age</label>
        <input type="text" class="form-control" id="name" placeholder="Enter Student Age"
        onChange={(e)=>{
            setAge(e.target.value);
        }}/>


    </div>
    <div class="mb-4">
        <label for="gender" class="form-label">Teacher Gender</label>
        <input type = "text" class= "form-control" id = "gender" placeholder="Enter Students Gender"

        onChange={(e)=>{
            setGender(e.target.value);
        }}/>
    </div>


    <button type = "submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}