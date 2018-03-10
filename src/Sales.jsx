import React, { Component } from 'react';
import $ from 'jquery';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';

import { loadClients } from './loadData';
//import {ChoosePartners} from './partnerNames';
const orderUrl = "http://localhost:8000/order";

const DEF_PARTNERS = [
    "Юла", "Авито", "Вконтакте", "Инстаграм", "ИнстаХарам", "ДагФМ"
];

const DEF_SERVICES = [
    "Наращивание ресниц",
    "Чистка лица",
    "Пилинг",
    "Пилинг продвинутый",
    "Отбеливание очков",
    "Омовение"
]//.map((element, i) => {
 //   services.push(<option key={i} value={element}> {element.name} </option>);
//});

const showPartners = () => 
DEF_PARTNERS.map((el, i) => {
    return <option key={i} value={el}>{el}</option>
});

const showServices = () => 
DEF_SERVICES.map((el, i) => {
    return <option key={i} value={el}>{el}</option>
});

const showClients = clients => 
clients.map((el, i) => {
    return <option key={i} value={el}>{el.name}</option>
});

const showClientsOptions = clients => 
    Object.entries(clients).map((el, i) => {
        return <option key={i} value={el}>{el}</option>
    });

const ChooseClient = clients =>  {
this.x = "yes";
return !clients ?

    <Select
        native
        value={this.x}
        //onChange={this.handleChange('service')}
        inputProps={{
            id: 'service-native-simple',
        }}
    >
    {showClientsOptions(clients)}
    </Select>

: null
    }






class Sales extends Component {
    state = {
        clients: [],
        client: {},
        services: [],
        service: '',
        date:'',
        price: ''
    }

    componentDidMount() {
        loadClients().then(data => this.setState({clients: data})) 
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    book = (event) => {
      //  if (this.state.date && this.state.time) {
         //   let date = this.state.date;
        //    let time = this.state.time;
          //  date.setHours(time.getHours());
          //  date.setMinutes(time.getMinutes());
            $.post(orderUrl, {
                clientId: this.state.client, 
                serviceName: this.state.service,
                price: this.state.price,
                status: "Booked",
                date: this.state.date,
                reservationTime: new Date(),
            });  
            alert("Забронировано")
       // }
       // event.preventDefault();
    };

    render(){
        const { classes } = this.props;
        return (
                <Grid container  ustify="center" alignItems='center' direction='column'>
                
                    <Grid item xs={12} >
                        <h1> Забронировать </h1>
                    </Grid>

                    <Grid item xs={12}>
                    
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="service-native-simple">Клиент</InputLabel>
                            <Select 
                            native 
            
                            onChange={this.handleChange('client')} 
                            inputProps={{id: 'service-native-simple',}}
                            >
                            <option value="" />
                            {Object.entries(this.state.clients).map((el, i) => {
                                return <option key={i} value={el[1].id}>{el[1].name}</option>
                            })}
                            </Select>
                        </FormControl>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="datetime-local"
                                label="Дата бронирования"
                                type="datetime-local"
                                onChange={this.handleChange('date')} 
                                className={styles.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="service-native-simple">Услуга</InputLabel>
                            <Select
                                native
          
                                onChange={this.handleChange('service')}
                                inputProps={{
                                    id: 'service-native-simple',
                                }}
                            >
                            <option value="" />
                            {showServices()}
                            </Select>
                        </FormControl>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl className={classes.formControl}>
                        <InputLabel>Партнёр</InputLabel>
                            <Select
                                native
                               
                                onChange={this.handleChange('partner')}
                                inputProps={{
                                    id: 'age-native-simple',
                                }}
                            >
                            <option value="" />
                            {showPartners()}
                            </Select>
                        </FormControl>
                    </Grid>
                    



                    <Grid item xs={12}>
                        <TextField 
                            className={classes.textField} 
                            required 
                            id="name" 
                            label="Цена" 
                            onChange={this.handleChange('price')} 
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Button className={classes.button} variant="raised" color="primary" onClick={this.book}>Забронировать _
                        <Icon className={classes.rightIcon}>gavel</Icon>
                        </Button>
                    </Grid>
  
                </Grid>
        );
    }}

    const styles = theme => ({
        root: {
            flexGrow: 1,
            width: 500
        },
        button: {
          margin: theme.spacing.unit,
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        },
        leftIcon: {
          marginRight: theme.spacing.unit,
        },

        formControl: {
            margin: theme.spacing.unit,
            minWidth: 120,
            width: 200
          },
      });
    

/*
import $ from 'jquery';

import Divider from 'material-ui/Divider';
//import RaisedButton from 'material-ui/RaisedButton';
//import MenuItem from 'material-ui/MenuItem';
//import TimePicker from 'material-ui/TimePicker';
//import DatePicker from 'material-ui/DatePicker';
//import SelectField from 'material-ui/SelectField';
//import TextField from 'material-ui/TextField';

const orderUrl = "http://localhost:8000/order";

const style = {
    margin: 12,
  };

const DEF_SERVICES = [
    "Наращивание ресниц",
    "Чистка лица",
    "Пилинг",
    "Пилинг продвинутый",
    "Отбеливание очков",
    "Омовение"
];//.map((element, i) => {
//    this.push(<option key={i} value={element}> {element.name} </option>);
//});

//function showServices(){
 //   const services = [];
 //   DEF_SERVICES.map((element, i) => {
//        return services.push(<MenuItem key={i} value={element} primaryText={element}/>  );
 //   });
//    return services;
//};


class Sales extends Component {

    constructor() {
        super();
        this.state = {
            orders: {},
            client: {},
            service: "",
            valueClient: "",
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

return null
  }
}
      /*
   const clients = [];
    if (this.props.clients.length>0) { 
        this.props.clients.map((element, i) => {
            clients.push(<MenuItem key={i} value={element._id} primaryText={element.name}/>);
        });
    };
    
    return ( //<form onSubmit={this.sell}> <input type="submit" value="Продать"/> </form>
            <div align="center">
                <p> Бронь </p>
                <SelectField floatingLabelText="Выбрать клиента" value={this.state.valueClient} onChange={this.changeClient}>
                    {clients}
                </SelectField>

                <SelectField floatingLabelText="Выбрать услугу" value={this.state.valueService} onChange={this.submitService}>
                    {showServices()}
                </SelectField>

                <TextField hintText="Цена" value={this.state.valuePrice} onChange={this.setPrice}/>


                <RaisedButton label="Продать" primary={true} style={style} onClick={this.sell}/> 
                 
            </div>
    );
  }
}

                <DatePicker hintText="Нажми чтобы изменить дату" value={this.state.date} onChange={this.pickDate}/>

                <TimePicker format="24hr" hintText="Нажми чтобы изменить время" value={this.state.time} onChange={this.pickTime}/>


*/
export default withStyles(styles)(Sales);