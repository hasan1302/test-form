import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

import PeopleIcon from 'material-ui-icons/People'
import ScheduleIcon from 'material-ui-icons/Schedule';
import PersonAddIcon from 'material-ui-icons/PersonAdd'
import GavelIcon from 'material-ui-icons/Gavel'

import Orders from './Orders';
import Sales from './Sales';
import AddClient from './AddClient';
import Clients from './Clients';

const drawerWidth = 240;

class MainBar extends React.Component {
  state = {
    open: false,
    anchor: 'left',
    view: <Orders />
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  showOrders = () => {
      this.setState({view: <Orders />, open: false });
  }

  showSales = () => {
    this.setState({view: <Sales />, open: false });
  }

  showClients = () => {
    this.setState({view: <Clients />, open: false });
  }

  showAddClient = () => {
    this.setState({view: <AddClient />, open: false });
  }

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer variant="persistent" open={open} classes={{paper: classes.drawerPaper,}}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        <List>

        <ListItem button onClick={this.showOrders}>
            <ListItemIcon><ScheduleIcon /></ListItemIcon>
            <ListItemText primary="Расписание" />
        </ListItem>
 
        <ListItem button onClick={this.showClients}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Клиенты" />
        </ListItem>

        <ListItem button onClick={this.showSales}>
            <ListItemIcon><GavelIcon /></ListItemIcon>
            <ListItemText primary="Продать" />
        </ListItem>

        <ListItem button onClick={this.showAddClient}>
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemText primary="Добавить Клиента" />
        </ListItem>

        </List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>

        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, {[classes.appBarShift]: open,[classes[`appBarShift-${anchor}`]]: open,})}>

            <Toolbar disableGutters={!open}>

              <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, open && classes.hide)}>
                <MenuIcon />
              </IconButton>

              <Typography variant="title" color="inherit" noWrap></Typography>

            </Toolbar>

          </AppBar>
          
          {before}

          <main 
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />

            
            {this.state.view}
          </main>
          {after}
        </div>
      </div>
    );
  }
}

MainBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    appFrame: {
      height: 620,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
    },
    appBar: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #2196f3 90%)',
      position: 'absolute',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc( 00% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'appBarShift-left': {
      marginLeft: drawerWidth,
    },
    'appBarShift-right': {
      marginRight: drawerWidth,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #2196f3 90%)',
      position: 'relative',
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      background: 'linear-gradient(45deg, #FE6B8B 78%, #2196f3 30%)',
        overflow: 'auto',
      flexGrow: 1,
      backgroundColor: 'linear-gradient(45deg, #FE6B8B 78%, #2196f3 30%)',
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    'content-left': {
      marginLeft: -drawerWidth,
    },
    'content-right': {
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'contentShift-left': {
      marginLeft: 0,
    },
    'contentShift-right': {
      marginRight: 0,
    },
  });

export default withStyles(styles, { withTheme: true })(MainBar);