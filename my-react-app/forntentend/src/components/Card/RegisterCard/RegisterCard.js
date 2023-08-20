import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import './RegisterCard.css';

const RegisterCard = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // we must make navigate function from useNavigate
    const navigate = useNavigate();

    const handleRegister = () => {
    const userData = {
            fullName: `${firstName} ${lastName}`,
            email: email,
            password: password
          };

   axios.post('http://localhost:5000/api/user/signup', userData)
            .then(response => {
                
        alert('Registration successful');

        navigate('/'); 
            })
            .catch(error => {
                
                console.error(error);
            });
    };

    return (
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                 <div className="fname__input__container reg__input__container">
                    <label className="fname__label input__label">First name</label>
                        <input type="text" className="fname__input register__input" onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="lname__input__container reg__input__container">
                    <label className="lname__label input__label">Last name</label>
                     <input type="text" className="lname__input register__input" onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className="email__input__container reg__input__container">
                    <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input register__input" placeholder='example@gmail.com' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input type="password" className="password__input register__input" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="register__button__container">
                        <button className="register__button" onClick={handleRegister}>
                            Create Account
                        </button>
                    </div>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have an account? <Link to="/account/login">Login</Link></div>
                </div>
            </div>
        </div>
    );
};


export default RegisterCard;
