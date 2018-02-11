import React, { Component } from 'react';
import $ from 'jquery';
const adminUrl = "http://localhost:8000/getadmin";

class Authorization extends Component {
    constructor() {
        super();
        this.state = {
            admin: {}
        }
    }

    componentDidMount() {
        fetch(adminUrl)
        .then(response => response.json())
        .then(data => this.setState({admin: data}));
    }

    signIn = (event) => {
        if ((this.state.admin[0].login === this.login.value) && (this.state.admin[0].password === this.password.value)) {
            console.log("Login ok!");
        }
        event.preventDefault();
    }

  render() {
    return (
            <div>
                <p> Authorization </p>
                <form onSubmit={this.signIn} >
                    <input type="text" placeholder="Логин" ref={(input) => this.login = input} required/>
                    <input type="text" placeholder="Пароль" ref={(input) => this.password = input} required/>
                    <input type="submit" value="Войти"/>
                </form>
            </div>
    );
  }
}

export default Authorization;