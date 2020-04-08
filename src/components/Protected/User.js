import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'

class User extends Component {

    state = {
        userID: "",
        username: ""
    }

    componentDidMount() {
        if (!localStorage.token) {
            this.props.history.push('/')
        } else {
            this.getUser();
        }
    }

    getUser = () => {
        if (localStorage.token) {
            fetch('http://localhost:3000/users/profile', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
                .then(resp => resp.json())
                .then(data => this.setState({ username: data.username, userID: data.user_id }))
        }
    }

    handleLogout = () => {
        this.setState({ userID: "", username: "" });
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <p>Super secret stuff!</p>
                <button onClick={this.handleLogout}>Log Out!</button>
            </div>
        )
    }
}

export default User;