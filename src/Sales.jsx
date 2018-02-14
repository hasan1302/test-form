import React, { Component } from 'react';
import $ from 'jquery';

import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

import {showServices, SERVICES} from './Services';



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
            open: false,
            value24: null
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
            date: this.state.date,
            time: this.state.time,
            reservationTime: new Date(),

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

    pickTime = (event, input) => {
        this.setState({time: input});
    };

    pickDate = (event, input) => {
        this.setState({date: input});
    };

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
                    
                    <DatePicker
                        hintText="Нажми чтобы изменить дату"
                        value={this.state.date}
                        onChange={this.pickDate}
                    />

                    <TimePicker
                        format="24hr"
                        hintText="Нажми чтобы изменить время"
                        value={this.state.time}
                        onChange={this.pickTime}
                    />



                    <input type="submit" value="Продать"/>

                </form>

            </div>
    );
  }
}

export default Sales;