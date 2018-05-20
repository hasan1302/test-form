import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ClientInfo from './ClientInfo';
import PeopleIcon from 'material-ui-icons/People'
import { loadClients } from './loadData';



const ClientListItem = client => {
    const { name = 'def_name', registerDate = 'def_regdate', _id = "def_id" } = client[1];
    return (
      <ListItem button onClick={ (_id) => {this.props.chooseClient(_id)}}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={name} secondary={_id}/>
        
      </ListItem>
    );
  };
  
  const ListOfClients = clients => 
    <div>
      <List>
        {Object.entries(clients).map((client, i) => (
          <ClientListItem key={`si-${i}`} {...client} />
        ))}
      </List>
    </div>
   
  


class Clients extends Component {
        state = {
            clients: [],
        }
    
    componentDidMount() {
        loadClients().then(data => this.setState({clients: data}));
    }

    chooseClient = (client) => {
        console.log(client);
        this.setState({client: client}); 
    }

  render() {
    return (
           <ListOfClients {...this.state.clients} chooseClient={ (client)=> {this.setState({client: client})} }/>
    );
  }
}
//<ClientInfo {...this.state.clients[2]}/>











   // const showClientInfo = this.state.client.name ? <ClientInfo client={this.state.client} orders={this.props.orders}/> : null ;
/*

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
    chooseClient = (client) => {
        this.setState({client: client}); 
    }
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

                                changeName = (event) => {
     //   let data = searchName(event.target.value, this.props.clients);
        this.setState({clientName: event.target.value});
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

*/


export default Clients;