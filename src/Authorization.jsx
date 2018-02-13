import React, { Component } from 'react';
import $ from 'jquery';

import Controls from './Controls';
import AddClient from './AddClient';
import Sales from './Sales';
import Clients from './Clients';
import Brain from './Brain';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
const adminUrl = "http://localhost:8000/getadmin";

class Authorization extends Component {
    constructor() {
        super();
        this.state = {
            admin: {},
            logined: true // FALSE      DOLJNO BIT TUT !!!!!!!!!!!!!!! ETO MOZGI
        }
    }

    componentDidMount() {
        fetch(adminUrl)
        .then(response => response.json())
        .then(data => this.setState({admin: data}));
    }

    signIn = (event) => {
        if ((this.state.admin[0].login === this.login.value) && (this.state.admin[0].password === this.password.value)) {
            this.setState({logined: true})
        };
        event.preventDefault();
    }

  render() {
      if (this.state.logined === true) {return (<div> <Brain /> </div>);};

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