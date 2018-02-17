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
       // console.log(this.props.client._id);
        let orders = [];
        if (this.state.orders.length>0) { 
            this.state.orders.map((element, i) => {
                if (element.clientId === this.props.client._id) {
                    orders.push(<p key={i}>{element.serviceName}<button>X</button></p>);
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