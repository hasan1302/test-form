import React, { Component } from 'react';
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import ClientOrders from './ClientOrders.jsx';

const styleInfo = {
    height: 800,
    width: 1100
  };

  const styleClient = {
    height: 66,
    width: 200
  };

  const styles = {
    headline: {
      fontSize: 24,

      marginBottom: 12,
      fontWeight: 400,
    },
  };
  

class ClientInfo extends Component {
    constructor() {
        super();
    }

  render() {
    let showInfo;
    if (this.props.client) {
      showInfo =  <div>            
                    <h1> {this.props.client.name} </h1>
                    <Divider inset={true} />
                    <h3>Телефон: {this.props.client.phone}</h3>
                    <h3>Партнер: {this.props.client.partner}</h3>
                    <h4>Дата регистрации: {this.props.client.registerDate}</h4>
                    <h5>Примечание: {this.props.client.description} </h5>
                    <Divider inset={true} /> 
                  </div>
    }


    return (
            <div>
                    <Paper align="center"  rounded={false} >
                      {showInfo}
                      <ClientOrders client={this.props.client} orders={this.props.orders}/>
                      <Divider inset={true} />
                    </Paper>
      
                    
            </div>
    );
  }
}


export default ClientInfo;