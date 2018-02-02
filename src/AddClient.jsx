import React, { Component } from 'react';
import './AddClient.css';
import $ from 'jquery';

const registerLink = "http://localhost:8000/addclient";

function nameIsValid(name) {
    return /^[a-zA-Z]+$/.test(name);
}

class AddClient extends Component {

    constructor() {
        super();
        this.state = {
            partner: ""
        }
    }

  register = (name, phone, partner, description) => {
    $.post(registerLink, {
        name: name, 
        phone: phone,
        partner: partner,
        description: description,
        registerDate: new Date()
    });  
  }

  addClientToDatabase = (event) => {
      const name = this.name.value;
      const phone = this.phone.value;
      const description = this.description.value || "no description";
      if ((nameIsValid(name)) && (!isNaN.phone) && (this.state.partner.length > 0)) {
          this.register(name, phone, this.state.partner, description);
      };
      event.preventDefault();
  }

  submitPartner = (event) => {
    this.setState({partner: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
            <div>
                <p> Регистрация </p>
                <form onSubmit={this.addClientToDatabase} >

                    <input type="text" placeholder="Имя" ref={(input) => this.name = input} required/>
                    <input type="text" placeholder="Телефон" ref={(input) => this.phone = input} required/>
                    <input type="text" placeholder="Примечание" ref={(input) => this.description = input}/>
                    <input type="submit" value="Зарегистрировать"/>

                    <select onChange={this.submitPartner} required>
                        <option disabled selected>  Выберите Партнёра </option>
                        <option value="Yula"> Юла </option>
                        <option value="Avito"> Авито </option>
                        <option value="Radio"> Сарафанное радио </option>
                    </select>

                </form>
            </div>
    );
  }
}

export default AddClient;
