import React, { Component } from 'react';
import $ from 'jquery';

import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';


const clientsUrl = "http://localhost:8000/getclients";
const orderUrl = "http://localhost:8000/order";
const totalOrdersUrl = "http://localhost:8000/totalorders";


export const SERVICES = [
    "Наращивание ресниц",
    "Чистка лица",
    "Пилинг",
    "Пилинг продвинутый",
    "Отбеливание очков",
    "Омовение"
]//.map((element, i) => {
//    this.push(<option key={i} value={element}> {element.name} </option>);
//});

function showServices(obj){
    const services = [];
    obj.map((element, i) => {
        return services.push(<option key={i} value={element}> {element} </option>);
    });
    return services;

}


class Sales extends Component {

    constructor() {
        super();
        this.state = {
            orders: {},
            client: {},
            service: ""
        }
    }

    sell = (event) => {
        let time = this.state.time;
        let date = this.state.date;
        date.setHours(time.getHours());
        date.setMinutes(time.getMinutes());
        $.post(orderUrl, {
            clientId: this.state.client, 
            serviceName: this.state.service,
            price: this.price.value,
            status: "Booked",
            date: date,
            reservationTime: new Date(),
        });  
        console.log(this.state.service + "  was sold to :  " + this.state.client + "  for :  " + this.price.value);
        event.preventDefault();

    }

    submitClient = (event) => {
        this.setState({client: event.target.value})
        event.preventDefault();
    }

    submitService = (event) => {
        this.setState({service: event.target.value})
        event.preventDefault();
    }

    pickTime = (event, input) => {
        this.setState({time: input});
    };

    pickDate = (event, input) => {
        this.setState({date: input});
    };

  render() {
   const clients = [];
    if (this.props.clients.length>0) { 
        this.props.clients.map((element, i) => {
            clients.push(<option key={i} value={element._id}> {element.name} </option>);
        });
    };
    

    return (
            <div>
                <form onSubmit={this.sell} >


                    <select onChange={this.submitClient} required>
                        <option disabled selected>  Выберите Клиента </option>
                        {clients}
                    </select>

                    <select onChange={this.submitService} required>
                        <option disabled selected>  Выберите Услугу </option>
                        {showServices(SERVICES)}
                    </select>

                    <input type="text" placeholder="Цена" ref={(input) => this.price = input} required/>
                    
                    <DatePicker hintText="Нажми чтобы изменить дату" value={this.state.date} onChange={this.pickDate}/>
                    <TimePicker format="24hr" hintText="Нажми чтобы изменить время" value={this.state.time} onChange={this.pickTime}/>

                    <input type="submit" value="Продать"/>

                </form>
            </div>
    );
  }
}

export default Sales;