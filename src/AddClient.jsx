import React, { Component } from 'react';
import $ from 'jquery';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const addClientUrl = "http://localhost:8000/addclient";




export const DEF_PARTNERS = [
    "Юла", "Авито", "Вконтакте", "Инстаграм", "ИнстаХарам", "ДагФМ"
];

function showPartners(obj){
    const partners = [];
    obj.map((element, i) => {
        return partners.push(<option key={i} value={element}> {element} </option>);
    });
    return partners;
}


function nameIsValid(name) {
    return /^[a-zA-Z]+$/.test(name);
}


class AddClient extends Component {

    constructor() {
        super();
        this.state = {
            partner: "",
            valuePartner: 0,
            valueName: "",
            valuePhone: "",
            valueDescription: ""
        }
    }

  register = (name, phone, partner, description) => {
    $.post(addClientUrl, {
        name: name, 
        phone: phone,
        partner: partner,
        description: description,
        registerDate: new Date()
    });  
    console.log("registered client : " + name);
  }

  addClientToDatabase = (event) => {
      const name = this.name.value;
      const phone = this.phone.value;
      const description = this.description.value || "Без примечаний";
      if ((nameIsValid(name)) && (!isNaN.phone) && (this.state.partner.length > 0)) {
          this.register(name, phone, this.state.partner, description);
      };
      event.preventDefault();
  }


  changePartner = (event, index, value) => {
    this.setState({partner: value, valuePartner: value});
    event.preventDefault();
};


setName = (event) => {
    this.setState({valueName: event.target.value})
}
setPhone = (event) => {
    this.setState({valuePhone: event.target.value})
}
setDescription = (event) => {
    this.setState({valueDescription: event.target.value})
}

  render() {

    return (
            <div align="center">

                <p> Добавить нового любимчика </p>
                <div align="left">
                <TextField hintText="Имя" value={this.state.valueNamen} onChange={this.setName}/>
                <Divider />
                <TextField hintText="Телефон" value={this.state.valuePhone} onChange={this.setPhone}/>
                <Divider />
                <TextField hintText="Примечание" value={this.state.valueDescription} onChange={this.setDescription}/>
                <Divider />


                <SelectField floatingLabelText="Выбери Партнёра" value={this.state.valuePartner} onChange={this.changePartner}>
                    {showPartners(DEF_PARTNERS)}
                </SelectField>
                </div>
                <RaisedButton label="Добавить любимчика" primary={true} onClick={this.addClientToDatabase}/> 


            </div>
    );
  }
}

export default AddClient;
