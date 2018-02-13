import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import $ from 'jquery';
//import Typography from 'material-ui/Typography';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

import ClientServices from './ClientServices.jsx';
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
                      <ClientOrders client={this.props.client} />
                      <Divider inset={true} />
                    </Paper>
      
                    
            </div>
    );
  }
}


export default ClientInfo;