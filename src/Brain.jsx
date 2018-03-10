import React from 'react';

import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import withStyles from 'material-ui/styles/withStyles';
//import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';
//import IconButton from 'material-ui/IconButton';

//import Clients from './Clients.jsx';
//import Sales from './Sales.jsx';
//import AddClient from './AddClient.jsx';
//import Orders from './Orders.jsx';
const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Brain extends React.Component {
        state = {
            open: false,
        }
    

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    //showOrders = () => this.setState({view: <Orders clients={this.props.clients} orders={this.props.orders}/>, open: false });
   // showClients = () => this.setState({view: <Clients clients={this.props.clients} orders={this.props.orders}/>, open: false });
   // showSell = () => this.setState({view: <Sales clients={this.props.clients} orders={this.props.orders}/>, open: false });
   // showAddClient = () => this.setState({view: <AddClient clients={this.props.clients}/>, open: false });

    
  render() {
      const { classes } = this.props
      return (
        <div className={classes.root}>

          <AppBar position="static">

            <Toolbar>
              
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>

              <Typography variant="title" color="inherit" className={classes.flex}>
                Главная
              </Typography>
              
            </Toolbar>

          </AppBar>

        </div>
      );
  }
}

/*
{this.state.view}
                <Drawer docked={false} width={500} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                   <MenuItem onClick={this.showOrders}>Главная</MenuItem>
                   <MenuItem onClick={this.showClients}>Клиенты</MenuItem>
                   <MenuItem onClick={this.showSell}>Продать </MenuItem>
                   <MenuItem onClick={this.showAddClient}>Добавить клиента</MenuItem>
                </Drawer>

*/

//Brain.propTypes = {
//    classes: PropTypes.object.isRequired,
 // };

export default withStyles(styles)(Brain);
