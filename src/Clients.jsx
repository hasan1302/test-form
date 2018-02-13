import React, { Component } from 'react';
//import ClientsStyles from "./ClientsStyles.css";
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import ClientInfo from './ClientInfo.jsx';

var emptyClient = {

        name: "",
        phone: "",
        partner: "",
        registerDate: "",
        services: [

        ],
        servicesDone: [

        ],
        description: ""
    
}

const styleClients = {
    width: 400,
    marginRight: 12,
    display: "inline-block"
  };

  const styleInfo = {
    display: "inline-block"
  };

  const styleAll = {
    height: 1200,
    width: 950,
  };


class Clients extends Component {
    constructor() {
        super();
        this.state = {
            client: {}
        }
    }

    chooseClient = (client) => {
        this.setState({client: client}); 
    }

    showListOfClients = () => {
        const clientsNames = [];
        if (this.props.clients.length > 0) {
            this.props.clients.map((el, i) => {
                clientsNames.push(<ListItem align="center" onClick={this.chooseClient.bind(this, el)}  key={i} value={el.name} primaryText={el.name}/>);
            });
          } else {
              return <ListItem primaryText=""/>
          };
          return clientsNames;
    }

  render() {
    const showClientInfo = this.state.client.name ? <ClientInfo client={this.state.client} /> : <ClientInfo client={emptyClient} />;
    return (
            <div>
                    <div>
                        <Paper style={{maxHeight: 400, overflow: 'auto'}} rounded={false} >
                            <Subheader align="center">Клиенты</Subheader>
                            <Divider inset={true} />
                            {this.showListOfClients()}
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