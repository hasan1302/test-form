import React from 'react';


//const ClientInfo = ( {name, phone, partner, description, registerDate } ) => 
//<h1> {name} </h1>
import { loadOrders } from './loadData';


import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 23,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

const Orders = (orders) => 
 <Typography component="p">
 well meaning and kindly.<br />
 {orders.clientId}
</Typography>

class ClientInfo extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    loadOrders().then(data => this.setState({orders: data}));
}

  render() {
  const { classes } = this.props;
  
console.log(this.state.orders)
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>

          <Typography variant="headline" component="h2">
            Имя: {this.props.name}
          </Typography>

          <Typography className={classes.title}>
            Телефон: {this.props.phone}
          </Typography>

          <Typography className={classes.title}>
            Инфо: {this.props.description}
          </Typography>

          <Typography className={classes.title}>
            Дата Регистрации: {this.props.registerDate}
          </Typography>

          <Typography className={classes.pos}>Прошлые заказы:</Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Удалить</Button>
        </CardActions>
      </Card>

      <Orders {...this.state.orders}/>
    </div>
  );
  }
}



ClientInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientInfo);




/*
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import ClientOrders from './ClientOrders.jsx';



const styleInfo = {
    height: 800,
    width: 1100
  };

  const styleClient = {
    height: 66,
    width: 200
  };

  const styles = {
    headline: {
      fontSize: 24,

      marginBottom: 12,
      fontWeight: 400,
    },
  };
  

class ClientInfo extends Component {
  render() {
    let showInfo;
    if (this.props.client) {
      showInfo =  <div align="center">            
                    <h1> {this.props.client.name} </h1>
                    <Divider inset={true} />
                    <h3>Телефон: {this.props.client.phone}</h3>
                    <h3>Партнер: {this.props.client.partner}</h3>
                    <h4>Дата регистрации: {this.props.client.registerDate}</h4>
                    <h5>Примечание: {this.props.client.description} </h5>
                    <Divider inset={true} /> 
                  </div>
    }


    return (
            <div>
                    <Paper style={{height: 700, overflow: 'auto', width: 700, marginLeft: 1}} rounded={false} >
                      {showInfo}
                      <ClientOrders client={this.props.client} orders={this.props.orders}/>
                      <Divider inset={true} />
                    </Paper>
      
                    
            </div>
    );
  }
}


export default ClientInfo;
*/