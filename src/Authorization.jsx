import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Brain from './Brain';

import { loadAdmin } from './loadData';
import MainBar from './MainBar.jsx';

const adminUrl = "http://localhost:8000/getadmin";

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
        backgroundColor: 'blue',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
  });

class Authorization extends Component {
        state = {
            admin: {},
            login: '',
            password: '',
            logined: true// FALSE      DOLJNO BIT TUT !!!!!!!!!!!!!!! ETO MOZGI
        };

        handleChange = name => event => {
            this.setState({[name]: event.target.value,});
          };

        componentDidMount() {
            loadAdmin().then(data => this.setState({admin: data}));
        }


    signIn = (event) => {
        this.state.admin[0].login === this.state.login && this.state.admin[0].password === this.state.password && this.setState({logined: true, login: '', password: ''})
    }

    render() { //<Brain clients={this.state.clients} orders={this.state.orders}/>
    const { classes } = this.props;
      if (this.state.logined) {return (<MainBar/>);};

        return (
                <Grid container className={styles.root} ustify="center" alignItems='center' direction='column'>
                
                    <Grid item xs={12} >
                        <h1> Авторизация </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            className={styles.textField} 
                            required 
                            id="login" 
                            label="Логин" 
                            value={this.state.login}
                            onChange={this.handleChange('login')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            className={styles.textField} 
                            required 
                            id="password" 
                            label="Пароль" 
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button className={styles.button} variant="raised" color="primary" onClick={this.signIn}>LogIn - 
                        <Icon className={styles.rightIcon}>vpn_key</Icon>
                        </Button>
                    </Grid>
  
                </Grid>
        );
    }
}

Authorization.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Authorization);
