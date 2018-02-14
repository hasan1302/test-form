import React, { Component } from 'react';
//import './Sales.css';
import $ from 'jquery';

const clientsUrl = "http://localhost:8000/getclients";
const ordersUrl = "http://localhost:8000/getorders";




class CurrentOrders extends Component {
    constructor() {
        super();
        this.state = {
            clients: {},
            orders: {}
        }
    }

    componentDidMount() {


        fetch(clientsUrl) //Upload all clients from database
        .then(response => response.json())
        .then(data => this.setState({clients: data}))
        .then(console.log("Clients Database Loaded"));
        
        fetch(ordersUrl) //Upload all orders
        .then(response => response.json())
        .then(data => this.setState({orders: data}))
        .then(console.log("Clients Orders Database Loaded"));
    }

    removeOrder = (id) => {

    }


    render() {
       // console.log(this.props.client._id);
        let orders = [];
        if (this.state.orders.length>0) { 
            this.state.orders.map((element, i) => {
                if (element.clientId === this.props.client._id) {
                    orders.push(<p key={i}>{element.serviceName}<button onClick={this.removeOrder(element._id)}>X</button></p>);
                };
            });
        };
        
          return (
              <div> 
                 {orders}
              </div>
          )
    }
  

}

export default CurrentOrders;