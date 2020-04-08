import React, { Component } from 'react'
import './login.css'

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleLoginForm = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    localStorage.token = data;
                    this.props.history.push('/user');
                }
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (

            <form className="loginform" onSubmit={this.handleLoginForm}>
                <p>Username: <input name="username" type="text" value={this.state.username} onChange={this.handleChange} /></p>
                <p>Password: <input name="password" type="password" value={this.state.password} onChange={this.handleChange} /></p>
                <input className="button" type="submit" value="Submit" />
            </form>
        )
    }
}

export default Login;