import React, { Component } from 'react';
//import ClientsStyles from "./ClientsStyles.css";
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

import Clients from './Clients.jsx';
import ClientInfo from './ClientInfo.jsx';
import Paper from 'material-ui/Paper';
const clientsUrl = "http://localhost:8000/getclients";

let bolvanka = {
    name: "Timur",
    phone: "+79182727727",
    partner: "Avito",
    registerDate: "Thu Feb 09 2018 02:44:45 GMT+0300 (MSK)",
    services: [
        ["Пилинг", "Thu Feb 12 2018 10:44:45 GMT+0300 (MSK)"],
    ],
    servicesDone: [
        ["Пилинг", "Thu Feb 13 2017 13:33:33 GMT+0300 (MSK)"]
    ],
    description: "Da poshli vi nahui rebyata so svoim servisom ....."
}

let bolvanka2 = {
    name: "Vladimir",
    phone: "+791667266727",
    partner: "Yula",
    registerDate: "Thu Feb 02 2018 02:44:45 GMT+0300 (MSK)",
    services: [
        ["Пилинг", "Thu Feb 12 2018 10:44:45 GMT+0300 (MSK)"],
    ],
    servicesDone: [
        ["Пилинг", "Thu Feb 13 2017 13:33:33 GMT+0300 (MSK)"]
    ],
    description: "Horoshiy servis, vsem sovetuyu"
}

let bolvanka3 = {
    name: "Masha",
    phone: "+711127211721",
    partner: "Radio",
    registerDate: "Thu Feb 09 2018 02:44:45 GMT+0300 (MSK)",
    services: [
        ["Пилинг", "Thu Feb 21 2018 10:44:45 GMT+0300 (MSK)"],
        ["Чистка", "Thu Feb 15 2018 10:44:45 GMT+0300 (MSK)"],
    ],
    servicesDone: [
        ["Пилинг", "Thu Feb 13 2017 13:33:33 GMT+0300 (MSK)"]
    ],
    description: "Kak v rayu!!!"
}

let bolvanka4 = {
    name: "kamil",
    phone: "+7531142788",
    partner: "Radio",
    registerDate: "Thu Feb 22 2019 02:44:45 GMT+0300 (MSK)",
    services: [
        ["Пилинг", "Thu Feb 12 2018 10:44:45 GMT+0300 (MSK)"],
    ],
    servicesDone: [
        ["Пилинг", "Thu Feb 13 2017 13:33:33 GMT+0300 (MSK)"]
    ],
    description: "v menu net baranini"
}

const clients = [bolvanka, bolvanka2, bolvanka3, bolvanka4];

const styleControls = {
    height: 200,
    width: 700,

  };

class Controls extends Component {
    constructor() {
        super();
        this.state = {
            clients: {}
        }
    }

    componentDidMount() {
        fetch(clientsUrl)
        .then(response => response.json())
        .then(data => this.setState({clients: data}))
        .then(console.log("Clients database loaded in -Contorls-"));

       // this.setState({clients: clients}); // delete potom
    }

  render() {
        return (
            <div align="center"> 
                <Clients clients={this.state.clients}/> 
            </div>
        )
  }
}


export default Controls;