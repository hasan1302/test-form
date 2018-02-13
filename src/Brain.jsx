import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import Clients from './Clients.jsx';
import Sales from './Sales.jsx';
import AddClient from './AddClient.jsx';
import Orders from './Orders.jsx';


const clientsUrl = "http://localhost:8000/getclients";

const styleAppBar = {
    fontFamily: 'Times New Roman',
    fontSize: '650%'
}

class Brain extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        fetch(clientsUrl)
        .then(response => response.json())
        .then(data => this.setState({clients: data}))
        .then(console.log("Clients database loaded"));
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});


    showMain = () => this.setState({view: "!!!!!!!!!!!!!!!!!!!!!!!!Main!!!!!!!!!!!!!!!!!!!!!", open: false});
    showClients = () => this.setState({view: <Clients clients={this.state.clients}/>, open: false });
    showSell = () => this.setState({view: <Sales clients={this.state.clients}/>, open: false });
    showAddClient = () => this.setState({view: <AddClient clients={this.state.clients}/>, open: false });
    showSoon = () => this.setState({view: <Orders />, open: false });
    
  render() {
    return (
            <div>
                <AppBar title="Главная" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={this.handleToggle}> </AppBar>
                {this.state.view}
                <Drawer docked={false} width={500} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                   <MenuItem onClick={this.showMain}>Главная</MenuItem>
                   <MenuItem onClick={this.showClients}>Клиенты</MenuItem>
                   <MenuItem onClick={this.showSell}>Продать </MenuItem>
                   <MenuItem onClick={this.showAddClient}>Добавить клиента</MenuItem>
                   <MenuItem onClick={this.showSoon}>Все заказы</MenuItem>
                </Drawer>
            </div>
    );
  }
}

export default Brain;