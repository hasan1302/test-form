import React, { Component } from 'react';



import $ from 'jquery';

const sellUrl = "http://localhost:8000/selltoclient";

function sell(client) {
    if (!client) return;
    $.post(sellUrl, {
        _id: {
            "$oid": "5a7315a30720f160e388f778"
        }, 
        title: "OoOooo",
        description: "AHAHAHAHAH"
    }); 
    console.log("SOLD to " + client._id);
}





function searchName(name, clients){
    for (var i=0; i < clients.length; i++) {
        if (clients[i].name.toLowerCase() === name.toLowerCase()) {
           return "His ID is : " + clients[i]._id + ", his name is stupid - " + clients[i].name + "...." + " and his phone is " + clients[i].phone;
        }
    }
}

function searchClient(name, clients){
    for (let i=0; i < clients.length; i++) {
        if (clients[i].name.toLowerCase() === name.toLowerCase()) {
           return clients[i];
        }
    }
}

class SearchClient extends Component {
    constructor() {
        super();
        this.state ={
            clientData: ""
        };
    }

    changeName = (event) => {
        let data = searchName(event.target.value, this.props.clients);
        this.setState({clientData: data});
        console.log(data);
    }

  render() {
      const client = searchClient("Timur", this.props.clients);

    return (
            <div>
                <input type="text" onChange={this.changeName}/>
      
                <button onClick={sell(client)}>1111111</button>
                <h1 align="center">{this.state.clientData}</h1>
            </div>
    );
  }
}

export default SearchClient;