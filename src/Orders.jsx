import React, { Component } from 'react';
import $ from 'jquery';

class Orders extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    sell =() => {

    }

  render() {
    const orders = [];
    if (this.props.orders) {
        this.props.orders.map((el, i) => {
            orders.push(
                <div key={i}>
                    <p style={{ backgroundColor: el.status==="Booked" ? "green" : "red" }}> 
                        {el.serviceName} {el.price} {el.date} {el.time}
                        <button onClick={this.sell}>X</button> 
                    </p> 
                </div>
                );
        });
    }
    orders.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

        return (// <p> Продажи (Всего: {this.state.totalOrders.length}) </p>
        
            <div> 
                
                {orders}
            </div>
        )
  }
}


export default Orders;