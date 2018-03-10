import React, { Component } from 'react';
//import ClientsStyles from "./ClientsStyles.css";
import $ from 'jquery';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ClientInfo from './ClientInfo.jsx';
import PeopleIcon from 'material-ui-icons/People'

const clientsUrl = "http://localhost:8000/getclients";
const ordersUrl = "http://localhost:8000/getorders";

const styleClients = {width: 400,marginRight: 12,display: "inline-block"};
const styleInfo = {display: "inline-block"};
const styleAll = {height: 1200,width: 950,};

function searchName(name, clients){
    for (let i=0; i < clients.length; i++) {
        if (clients[i].name.toLowerCase() === name.toLowerCase()) {
           return clients[i];
        }
    }
}

const ClientListItem = props => {
    const { name = 'def name', registerDate = 'def reg date' } = props[1];
    return (
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
      
    );
  };
  
  const ListOfClients = clients => (
    <div>
      <List>
        {Object.entries(clients).map((client, i) => (
          <ClientListItem key={`si-${i}`} {...client} />
        ))}
      </List>
    </div>
  );


class Clients extends Component {
    constructor() {
        super();
        this.state = {
            client: {},
            clientName: "",
            view: []
        }
    }

    componentDidMount() {
        fetch(clientsUrl).then(response => response.json()).then(data => this.setState({clients: data}));
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
                if (this.state.clientName.toLocaleLowerCase() === el.name.toLocaleLowerCase()) {
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
   // const showClientInfo = this.state.client.name ? <ClientInfo client={this.state.client} orders={this.props.orders}/> : null ;
    return (
           <ListOfClients {...this.state.clients}/>
    );
  }
}
/*
 <div>
                    <div style={{display: "inline-block"}}>
                        <Paper style={{height: 700, overflow: 'auto', width: 300}} rounded={false} >
                            <Subheader align="center">Клиенты</Subheader>
                            <Divider inset={true} />
                            { this.state.clientName.length < 1 ? this.showAllClients() : this.showSearchedClient()}
                        </Paper>
                    </div>
                      
                    <div style={{display: "inline-block"}}>
                        {showClientInfo}
                    </div>
             
            </div>
                            <input type="text" onChange={this.changeName}/>

*/


export default Clients;