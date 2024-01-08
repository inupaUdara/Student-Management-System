import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styles from './Login.module.css'
function Login() {


    const history = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8070/teacher/login", {
                username, password
            }).then(res => {
                if (res.data === "exist") {
                    history('/info');
                }
                else {
                    alert("Incorrect password or username")
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <body>
                <div className={styles.box}>
                    <div className={styles.container}>


                        <div className={styles.navlogo}>
                            <p className={styles.para}>Student Management </p>
                        </div>

                        <div className="top-header">
                            <header>Login</header>
                        </div>
                        <form action="POST">
                            <div className={styles.inputField}>
                                <input type="text" onChange={(e) => { setUsername(e.target.value) }} className={styles.input} placeholder="Username" required />
                                <i class="bx bx-user"></i>
                            </div>

                            <div className={styles.inputField}>
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} className={styles.input} placeholder="Password" required />

                                <i class="bx bx-lock-alt"></i>
                            </div>

                            <div className={styles.inputField}>
                                <input type="submit" onClick={submit} className={styles.submit} value="Login" />
                            </div>
                        </form>
                        <div className={styles.bottom}>
                            <div className={styles.left}>
                                <label for="admin"><a href="/adminLogin">Admin Login</a></label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="login">
                <h1>Login</h1>
                <form action="POST">
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" name="" id="" />
                    <input type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />
                    <input type="submit" onClick={submit} />
                </form>
            </div>
            <ul class="navbar-nav">
                <li className="nav-item">
                    <Link to="/adminLogin" className="nav-link">Admin Login</Link>
                </li>
            </ul> */}
            </body>
        </>
    );
}

export default Login