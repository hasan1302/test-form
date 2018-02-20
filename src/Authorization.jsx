import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Brain from './Brain';
import { loadClients, loadOrders, loadAdmin } from './loadData';

const adminUrl = "http://localhost:8000/getadmin";
const clientsUrl = "http://localhost:8000/getclients";
const ordersUrl = "http://localhost:8000/getorders";

class Authorization extends Component {
    constructor() {
        super();
        this.state = {
            admin: {},
            clients: {},
            orders: {},
            logined: true // FALSE      DOLJNO BIT TUT !!!!!!!!!!!!!!! ETO MOZGI
        };

    }

    componentDidMount() {
        loadAdmin().then(data => this.setState({admin: data}));
        loadClients().then(data => this.setState({ clients: data }));
        loadOrders().then(data => this.setState({orders: data}));
    }

    setLogin = (event) => {
        this.setState({valueLogin: event.target.value})
    }
    setPassword = (event) => {
        this.setState({valuePassword: event.target.value})
    }

    signIn = (event) => {
        if ((this.state.admin[0].login === this.state.valueLogin) && (this.state.admin[0].password === this.state.valuePassword)) {
            console.log("ok")
            this.setState({logined: true})
        };
        event.preventDefault();
    }

  render() {
      if (this.state.logined === true) {return (<div> <Brain clients={this.state.clients} orders={this.state.orders}/> </div>);};

        return (
            <div align="center">
                <p> Пройдите процесс авторизации ваша милость </p>
                <TextField hintText="Логин" value={this.state.valueLogin} onChange={this.setLogin}/>
                <TextField hintText="Пароль" value={this.state.valuePassword} onChange={this.setPassword}/>
                <RaisedButton label="Войти" primary={true} onClick={this.signIn}/>
            </div>
    );
  }
}

export default Authorization;
