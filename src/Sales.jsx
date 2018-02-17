import React, { Component } from 'react';
import $ from 'jquery';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

const orderUrl = "http://localhost:8000/order";

const style = {
    margin: 12,
  };

export const DEF_SERVICES = [
    "Наращивание ресниц",
    "Чистка лица",
    "Пилинг",
    "Пилинг продвинутый",
    "Отбеливание очков",
    "Омовение"
];//.map((element, i) => {
//    this.push(<option key={i} value={element}> {element.name} </option>);
//});

function showServices(obj){
    const services = [];
    obj.map((element, i) => {
        return services.push(<MenuItem key={i} value={element} primaryText={element}/>  );
    });
    return services;
};


class Sales extends Component {

    constructor() {
        super();
        this.state = {
            orders: {},
            client: {},
            service: "",
            valuePrice: "",
            valueService: ""
        };
    };

    sell = (event) => {
        if (this.state.date && this.state.time) {
            let date = this.state.date;
            let time = this.state.time;
            date.setHours(time.getHours());
            date.setMinutes(time.getMinutes());
            $.post(orderUrl, {
                clientId: this.state.client, 
                serviceName: this.state.service,
                price: this.state.valuePrice,
                status: "Booked",
                date: date,
                reservationTime: new Date(),
            });  
        }
        event.preventDefault();
    };

    changeClient = (event, index, value) => {
        this.setState({client: value, valueClient: value});
        event.preventDefault();
    };

    submitService = (event, index, value) => {
        this.setState({service: value, valueService: value})
        event.preventDefault();
    };

    pickTime = (event, input) => {
        this.setState({time: input});
    };

    pickDate = (event, input) => {
        this.setState({date: input});
    };

    setPrice = (event) => {
        this.setState({valuePrice: event.target.value})
    }

  render() {
   const clients = [];
    if (this.props.clients.length>0) { 
        this.props.clients.map((element, i) => {
            clients.push(<MenuItem key={i} value={element._id} primaryText={element.name}/>);
        });
    };
    
    return ( //<form onSubmit={this.sell}> <input type="submit" value="Продать"/> </form>
            <div>
                <SelectField floatingLabelText="Выбрать клиента" value={this.state.valueClient} onChange={this.changeClient}>
                    {clients}
                </SelectField>

                <SelectField floatingLabelText="Выбрать услугу" value={this.state.valueService} onChange={this.submitService}>
                    {showServices(DEF_SERVICES)}
                </SelectField>

                <TextField hintText="Цена" value={this.state.valuePrice} onChange={this.setPrice}/>
       
                <DatePicker hintText="Нажми чтобы изменить дату" value={this.state.date} onChange={this.pickDate}/>
                <TimePicker format="24hr" hintText="Нажми чтобы изменить время" value={this.state.time} onChange={this.pickTime}/>

                <RaisedButton label="Продать" primary={true} style={style} onClick={this.sell}/>    
            </div>
    );
  }
}

export default Sales;