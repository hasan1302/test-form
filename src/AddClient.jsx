import React, { Component } from 'react';
import $ from 'jquery';

//import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import withStyles from 'material-ui/styles/withStyles';

const addClientUrl = "http://localhost:8000/addclient";

const styles = theme => ({
    root: {
        flexGrow: 1,
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

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
        width: 200
      },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
  });

const DEF_PARTNERS = [
    "Юла", "Авито", "Вконтакте", "Инстаграм", "ИнстаХарам", "ДагФМ"
];

const showPartners = () => 
DEF_PARTNERS.map((el, i) => {
    return <option key={i} value={el}>{el}</option>
});

function registerClient(name, phone, partner, description="Без примечаний") {
    $.post(addClientUrl, {
        name: name, 
        phone: phone,
        partner: partner,
        description: description,
        registerDate: new Date()
    });  
    alert("registered client : " + name);
}

function nameIsValid(name) {
    return /^[a-zA-Z]+$/.test(name);
}


class AddClient extends Component {
    state = {
        partner: "",
        name: "",
        phone: "",
        description: ""
    };

  addClientToDatabase = (event) => {
      if ((nameIsValid(this.state.name)) && (!isNaN(this.state.phone)) && (this.state.partner.length > 0)) {
          registerClient(this.state.name, this.state.phone, this.state.partner, this.state.description);
          this.setState({name: "", phone: "", partner: "", description: ""});
      };
  };

set = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
            <Grid container  ustify="center" alignItems='center' direction='column'>
                
                <Grid item xs={12} >
                    <h1> Добавить Клиента </h1>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        className={classes.textField} 
                        required 
                        id="name" 
                        label="Имя" 
                        value={this.state.name}
                        onChange={this.set('name')}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        className={classes.textField} 
                        required 
                        id="phone" 
                        label="Телефон" 
                        value={this.state.phone}
                        onChange={this.set('phone')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        className={classes.textField} 
                        required 
                        id="description" 
                        label="Примечание" 
                        value={this.state.description}
                        onChange={this.set('description')}
                    />
                </Grid>

                <Grid item xs={12}>
                        <FormControl className={classes.formControl}>
                        <InputLabel>Партнёр</InputLabel>
                            <Select
                                native
                                value={this.state.partner}
                                onChange={this.set('partner')}
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
                    <Button className={classes.button} variant="raised" color="primary" onClick={this.addClientToDatabase}>Добавить 
                    <Icon className={classes.rightIcon}>person_add</Icon>
                    </Button>
                </Grid>

            </Grid>
    );
  };
};

export default withStyles(styles)(AddClient);
