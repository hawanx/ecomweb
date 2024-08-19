import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom'; 

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(e);
        
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convert form data to JSON
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Signup successful:', result);
                setIsSuccess(true);
                setStatusMessage('Signup successful!'); 
                // Handle success, e.g., redirect to login page
            } else {
                const errorData = await response.json();
                console.error('Signup failed:', errorData);
                setIsSuccess(false);
                setStatusMessage('Signup failed. Please try again.'); 
                // Handle error, e.g., display error message to user
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setIsSuccess(false);
            setStatusMessage('An error occurred. Please try again later.');
            // Handle network error, e.g., show a message to the user
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
            {statusMessage && (
                <div className={`status-message ${isSuccess ? 'success' : 'error'}`}>
                    {statusMessage}
                    {isSuccess && (
                        <div className="redirect-link">
                            <p>Proceed to <Link to="/login">Login</Link></p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Signup;
