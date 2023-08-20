import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { TabTitle } from '../../../utils/General';
import './LoginCard.css';
import axios from 'axios';

class LoginCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleLogin = async () => {
        
        const { email, password } = this.state;

        try {
            const response = await axios.post('http://localhost:5000/api/user/signin', {
                email,
                password
            });

            if (response.status === 200) {
                alert('I successful  create LoGIN');
                window.location.href = '/';
                //this.props.history.push('/');
            } else {
                alert('Login again verify');
            }

             
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in');
        }
    }

    render() {
        return (
            <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <div className="login__inputs">
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">Email</label>
                        <input
                            type="email"
                            className="email__input login__input"
                            placeholder="example@gmail.com"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label">Password</label>
                        <input
                            type="password"
                            className="password__input login__input"
                            placeholder="**********"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="login__button__container">
                        <button className="login__button" onClick={this.handleLogin}>
                            LOGIN
                        </button>
                    </div>
                </div>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">
                        Don't have an account? <Link to="/account/register">Create account</Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginCard;
