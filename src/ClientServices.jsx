import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import $ from 'jquery';
//import Typography from 'material-ui/Typography';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

const styles = {
    headline: {
      fontSize: 24,

      marginBottom: 12,
      fontWeight: 400,
    },
  };
  const styleInfo = {
    height: 800,
    width: 1100,
    marginTop: 10
  };
  
class ClientServices extends Component {
    constructor() {
        super();
    }

    cancelService = (client, serviceId) => {
     // database.clients.findClient(client).service.find(serviceId).remove
    }

  render() {



   let showInfo;
    if (this.props.client.name.length>0) {
      showInfo =   
        <div>            
          <Tabs>
            <Tab label="Текущие заказы" >
              <div>
                <h2 align="center" style={styles.headline}>Текущие заказы</h2>
                

                
              </div>
            </Tab>
              <Tab label="Прошлые заказы">
                <div>
                  <h2 align="center"  style={styles.headline}>Прошлые заказы</h2>
                </div>
              </Tab>
            </Tabs>
        </div>
    }


    return (
            <div >
                    <Paper align="center" style={styleInfo}  rounded={false} >
                      {showInfo}
                      <Divider inset={true} />
                      
                    </Paper>
      
                    
            </div>
    );
  }
}


export default ClientServices;