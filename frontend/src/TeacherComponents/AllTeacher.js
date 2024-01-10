import React, {useState, useEffect } from "react";
import axios from "axios";
export default function AllTeacher() {

    // const [teachers,setTeachers] = useState([]);
    const [teachers,setTeachers] = useState([]);

    useEffect(()=>{
        function getTeachers(){
            axios.get("http://localhost:8070/teacher/").then((res)=>{
                setTeachers(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getTeachers();

    }, [])

return (

<div className = "container">
    <table class ="table">
        <thead>
            <tr>
                <th scope = "col">Name</th>
                <th scope = "col">Age</th>
                <th scope = "col">Gender</th>
                <th scope = "col">Action</th>
            </tr>
        </thead>
        <tbody>
            {teachers && teachers.map((Teachers)=> (
                <tr key = {Teachers.id} >
                    
                    <td>{Teachers.name}</td>
                    <td>{Teachers.age}</td>
                    <td>{Teachers.gender}</td>
                    <a className="btn btn-primary" href={`/update/${Teachers._id}`} role="button">update</a>
                    <a className="btn btn-primary" href={`/delete/${Teachers._id}`} role="button">delete</a>
                </tr>
            )
            )}
        </tbody>
    </table>
</div>
)
}