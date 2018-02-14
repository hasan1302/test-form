import React, { Component } from 'react';
//import ClientsStyles from "./ClientsStyles.css";
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import ClientInfo from './ClientInfo.jsx';
import SearchClient from './SearchClient.jsx';

function searchName(name, clients){
    for (let i=0; i < clients.length; i++) {
        if (clients[i].name.toLowerCase() === name.toLowerCase()) {
           return clients[i];
        }
    }
    //return;
}

const emptyClient = {name: "",phone: "",partner: "",registerDate: "",services: [],servicesDone: [],description: ""};

const styleClients = {width: 400,marginRight: 12,display: "inline-block"};
const styleInfo = {display: "inline-block"};
const styleAll = {height: 1200,width: 950,};

class Clients extends Component {
    constructor() {
        super();
        this.state = {
            client: {},
            clientName: "",
            view: []
        }
    }

    chooseClient = (client) => {
        this.setState({client: client}); 
    }

    showAllClients = () => {
        let clientsNames = [];
        if (this.props.clients.length > 0) {
            this.props.clients.map((el, i) => {
                clientsNames.push(<ListItem align="center" onClick={this.chooseClient.bind(this, el)}  key={i} value={el.name} primaryText={el.name}/>); 
            });                        
        }
        return clientsNames;
    }

    showSearchedClient = () => {
        let clientsNames = [];
        if (this.props.clients.length > 0) {
            this.props.clients.map((el, i) => {
                if (this.state.clientName === el.name) {
                    clientsNames.push(<ListItem align="center" onClick={this.chooseClient.bind(this, el)}  key={i} value={el.name} primaryText={el.name}/>); 
                }
            });                        
        }
        return clientsNames;
    }

    changeName = (event) => {
     //   let data = searchName(event.target.value, this.props.clients);
        this.setState({clientName: event.target.value});
    }

  render() {
    const showClientInfo = this.state.client.name ? <ClientInfo client={this.state.client} /> : <ClientInfo client={emptyClient} />;
    return (
            <div>
                    <div>
                        <Paper style={{maxHeight: 400, overflow: 'auto'}} rounded={false} >
                            <Subheader align="center">Клиенты</Subheader>
                            <input type="text" onChange={this.changeName}/>
                            <Divider inset={true} />
                            { this.state.clientName.length < 1 ? this.showAllClients() : this.showSearchedClient()}
                        </Paper>
                    </div>

                        
                    <div style={styleInfo}>
                        {showClientInfo}
                    </div>

                
            </div>
    );
  }
}


export default Clients;