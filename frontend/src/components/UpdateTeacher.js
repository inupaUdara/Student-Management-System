import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateTeacher() {
    const [name,setName] = useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8070/teacher/getTeacher/${id}`,).then((res) => {
            setName(res.data.teacher.name);
            setUsername(res.data.teacher.username);
            setPassword(res.data.teacher.password);
        }).catch((err) => {
            alert(err);
        });
    }, [id])

    function sentData(e) {
        e.preventDefault();
        
        const updateStudent={
            name,
            username,
            password
        }

        axios.put(`http://localhost:8070/teacher/updateteacher/${id}`,updateStudent).then(() => {
            alert("Teacher updated");
            navigate('/allteachers');
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <div className="container">
            <form onSubmit={sentData}>
                <div class="mb-3">
                    <label for="name" class="form-label">Teacher Name</label>
                    <input type="text" class="form-control" id="name" value={name} placeholder="Enter Teacher Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                       
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Teacher username</label>
                    <input type="text" class="form-control" id="age" value={username} placeholder="Enter Teacher username" 
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}/>
                       
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Teacher password</label>
                    <input type="text" class="form-control" id="gender" value={password} placeholder="Enter password" 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                       
                </div>
                
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
    
}

export default UpdateTeacher