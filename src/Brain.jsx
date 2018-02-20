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


class Brain extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    showOrders = () => this.setState({view: <Orders clients={this.props.clients} orders={this.props.orders}/>, open: false });
    showClients = () => this.setState({view: <Clients clients={this.props.clients} orders={this.props.orders}/>, open: false });
    showSell = () => this.setState({view: <Sales clients={this.props.clients} orders={this.props.orders}/>, open: false });
    showAddClient = () => this.setState({view: <AddClient clients={this.props.clients}/>, open: false });

    
  render() {
    return (
            <div>
                <AppBar title="" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={this.handleToggle}> </AppBar>
                {this.state.view}
                <Drawer docked={false} width={500} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                   <MenuItem onClick={this.showOrders}>Главная</MenuItem>
                   <MenuItem onClick={this.showClients}>Клиенты</MenuItem>
                   <MenuItem onClick={this.showSell}>Продать </MenuItem>
                   <MenuItem onClick={this.showAddClient}>Добавить клиента</MenuItem>
                </Drawer>
            </div>
    );
  }
}

export default Brain;