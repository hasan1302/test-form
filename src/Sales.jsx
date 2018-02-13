import React, { Component } from 'react';
//import './Sales.css';
import $ from 'jquery';
import {showServices, SERVICES} from './Services';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const clientsUrl = "http://localhost:8000/getclients";
const orderUrl = "http://localhost:8000/order";
const totalOrdersUrl = "http://localhost:8000/totalorders";




class Sales extends Component {

    constructor() {
        super();
        this.state = {
            clients: {},
            client: {},
            service: "",
            totalOrders: 0,
            open: false
        }
    }

    componentDidMount() {
        fetch(clientsUrl) //Upload all clients from database
        .then(response => response.json())
        .then(data => this.setState({clients: data}));
        
        fetch(totalOrdersUrl) //Upload all orders
        .then(response => response.json())
        .then(data => this.setState({totalOrders: data}));
    }

    sell = (event) => {
        $.post(orderUrl, {
            clientId: this.state.client, 
            serviceName: this.state.service,
            price: this.price.value,
            status: "Booked",
            date: new Date()
        });  
        console.log(this.state.service + " is sold to : " + this.state.client + " for : " + this.price.value);
        event.preventDefault();

    }

    submitClient = (event) => {
        this.setState({client: event.target.value})
        event.preventDefault();
    }

    submitService = (event) => {
        this.setState({service: event.target.value})
        event.preventDefault();
    }


  render() {
   const clients = [];
    if (this.state.clients.length>0) { 
        this.state.clients.map((element, i) => {
            clients.push(<option key={i} value={element._id}> {element.name} </option>);
        });
    };
    


    return (
            <div>
                <p> Продажи (Всего: {this.state.totalOrders.length}) </p>
                
                <form onSubmit={this.sell} >

                    <select onChange={this.submitClient} required>
                        <option disabled selected>  Выберите Клиента </option>
                        {clients}
                    </select>

                    <select onChange={this.submitService} required>
                        <option disabled selected>  Выберите Услугу </option>
                        {showServices(SERVICES)}
                    </select>

                    <input type="text" placeholder="Цена" ref={(input) => this.price = input} required/>

                    <input type="submit" value="Продать"/>

                </form>

            </div>
    );
  }
}

export default Sales;