import React, { Component } from 'react';
import ClientsStyles from "./ClientsStyles.css";
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

import SearchClient from './SearchClient';
const clientsUrl = "http://localhost:8000/getclients";




function createNames(clients) {
    let clientsNames=[];
    if (clients.length > 0) {
        clients.map((el, i) => {
            clientsNames.push(<ListItem onClick={this.chooseClient(el._id)} key={i} primaryText={el.name + " " + el.phone}/>);
        });
      } else {
          return <ListItem primaryText=""/>
      };
      return <td>{clientsNames}</td>;
}

function showInfo(client, clients) {
    for (var i=0; i < clients.length; i++) {
        if (clients[i].id === client.id) {
            return "His ID is : " + clients[i]._id + ", his name is stupid - " + clients[i].name + "...." + " and his phone is " + clients[i].phone;
        }
    }   
}

class Clients extends Component {
    constructor() {
        super();
        this.state = {
            clients: {},
        }
    }

    componentWillMount() {
        fetch(clientsUrl)
        .then(response => response.json())
        .then(data => this.setState({clients: data}))
    }

    filterName = () => {
        
    }

    chooseClient = (client) => {
        console.log(client);
    }

  render() {
      let clientsNames = createNames(this.state.clients);
     // let clientsPhones = createPhones(this.state.clients);
    return (
            <div>
                <Subheader align="center">Управление</Subheader>

                <div>
                    <div className="clientMenu">
                        <Subheader>Клиенты</Subheader>
                        {clientsNames}
                        <RaisedButton label="Сортировать по ближайшим" />
                    </div>
                    <ClientInfo client={hui}/>
                    <div align="center" className="clientInfo">
                        <Subheader>Информация</Subheader>
                        {clientsNames}
                    </div>
                </div>

            </div>
    );
  }
}

/*
          <table >
                <tr>
                  <th onClick={this.filterName}>Name</th>
                  <th>Phone</th> 
                </tr>
                <tr>
                  {clientsNames}
                  {clientsPhones}
                </tr>
              </table>
              <SearchClient clients={this.state.clients}/>
*/

/*
function createNames2(clients) {
    let clientsNames=[];
    if (clients.length > 0) {
        clients.map((el, i) => {
            clientsNames.push(<tr key={i}><td>{el.name}</td></tr>);
        });
      } else {
          return <td>NET</td>
      };
      return <td>{clientsNames}</td>;
}

function createPhones(clients) {
    let clientsPhones=[];
    if (clients.length > 0) {
        clients.map((el, i) => {
            clientsPhones.push(<tr key={i}><td>{el.phone}</td></tr>);
        });
      } else {
          return <td>NET</td>
      };
      return <td>{clientsPhones}</td>;
}
*/
export default Clients;