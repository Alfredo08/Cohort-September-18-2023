import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const URL = "http://localhost:8080/login";
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        };

        const response = await fetch(URL, settings);
        const data = await response.json();
        if(data.message){
            props.setIsLoggedIn(false);
            setErrorMessage(data.message);
        }
        if(data.token){
            setErrorMessage("");
            localStorage.setItem('token', data.token);
            props.setIsLoggedIn(true);
            navigate('/home')
        }
    }

    return(
        <>
            <h1> Login </h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email"> Username: </label>
                    <input type="text" 
                           id="email" 
                           name="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password"> Password: </label>
                    <input type="password" 
                           id="password" 
                           name="password" 
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>
                    Login
                </button>
                <div className="errors">{errorMessage}</div>
            </form>
        </>
    );
}

export default Login;