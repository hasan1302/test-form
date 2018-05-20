import React, { Component } from 'react';
import $ from 'jquery';

//Material UI 1.0b
import List, { ListItem, ListItemSecondaryAction, ListItemText, ListItemIcon} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ScheduleIcon from 'material-ui-icons/Schedule';
import Divider from 'material-ui/Divider';
import DoneIcon from 'material-ui-icons/Done';
//////////////////
import { loadOrders } from './loadData';

//date.getDate() + '/0' + date.getMonth() + ' - ' + date.getHours() + ':' + date.getMinutes() 
const ScheduleItem = props => {
    const { serviceName, date } = props[1];

  //  let data = new Date(date);

   // data = (date.getDate() + '/0' + date.getMonth() + ' - ' + date.getHours() + ':' + date.getMinutes() )
    return (
      <ListItem button>
        <ListItemIcon>
          <ScheduleIcon />
        </ListItemIcon>
        <ListItemText primary={serviceName + ""} secondary={date} />
        <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <DoneIcon />
                </IconButton>
              </ListItemSecondaryAction>
      </ListItem>
      
    );
  };
  
  const CurrentSchedule = orders => (
    <div>
      <List>
        {Object.entries(orders).map((order, i) => (
          <ScheduleItem key={`si-${i}`} {...order} />
        ))}
      </List>
    </div>
  );


const sortDate = date => {

}

class Orders extends Component {
    state={
        orders: []
    }

    componentDidMount() {
        loadOrders().then(data => this.setState({orders: data})) 
    }

  render() {
        return ( <CurrentSchedule {...this.state.orders} /> );
  };
}


export default Orders;

/*// <p> Продажи (Всего: {this.state.totalOrders.length}) </p>  
    //  const orders = [] && createListOfCurrentOrders(this.state.orders);
    done =(event) => {
        $.post(orderSuccessUrl, {
            clientId: event.target.value, 
            status: "Done",
        });  
        console.log(event.target.value + " done");
    }

    orders.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
*/