import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(username) && validatePassword(password) && ValidatePassword(password) ) {
            // console.log('Username:', username);
            // console.log('Password:', password);
            navigate("/dashboard");
        } else {
            setError('Invalid username or password.');
        }
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@!$%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };

    const ValidatePassword = (password) => {
        return password === 'SmartServTest@123';
       };


    return (
        <div className="container">
            <div className="main">
                <div className="login-container">
                    <img src="/logo.png" alt="" />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                    {error && <p className='error'>{error}</p>}
                    <Link to="mailto:support@smartserv.io?subject=Password%20Reset&body=Please%20reset%20my%20password.%0D%0A%0D%0AThank%20you." target="_blank"><p style={{fontSize: '1rem'}}>Forgot your password?</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
