import React, { Component } from 'react';
import $ from 'jquery';

const ordersUrl = "http://localhost:8000/getorders";
const orderSuccessUrl = "http://localhost:8000/ordersuccess";



class Orders extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        fetch(ordersUrl)
        .then(response => response.json())
        .then(data => this.setState({orders: data}))
        .then(console.log("Orders database loaded"));
    }

    showCurrentOrders = () => {

    }

    orderDone = (name, id) => {
        $.post(orderSuccessUrl, {
            name: name, 
            orderDate: new Date()
        });  
    }

  render() {
    const orders = [];
    if (this.state.orders) {
        this.state.orders.map((el, i) => {
            orders.push(
                <div key={i}>
                    <p style={{ backgroundColor: el.status==="Booked" ? "green" : "red" }}> 
                        {el.serviceName} {el.price} {el.date}
                        <button>X</button> 
                    </p> 
                </div>
                );
        });
    }
    orders.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      
        return (
            <div> 
                {orders}
            </div>
        )
  }
}


export default Orders;