import React, { Component } from 'react';
//import './Sales.css';
import $ from 'jquery';

class ClientOrders extends Component {
    constructor() {
        super();
        this.state = {
            clients: {},
            orders: {}
        }
    }



    removeOrder = (id) => {

    }


    render() {
        let orders = [];
        if (this.props.orders) { 
            this.props.orders.map((element, i) => {
                if (element.clientId === this.props.client._id) {
                    orders.push(<p key={i}>{element.serviceName} {element.date}</p>);
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

export default ClientOrders;