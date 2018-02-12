import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import Controls from './Controls';
import AddClient from './AddClient';
import Sales from './Sales';
import Authorization from './Authorization';
import Clients from './Clients';

const muiTheme = getMuiTheme({
    palette: {
      textColor: blue500,
    }
  });

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Authorization />
    </MuiThemeProvider>
  );

ReactDOM.render(<App />, document.getElementById('root'));


  /*
  // MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
  const Main = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar title="My AppBar" />
      <AddClient />
    </MuiThemeProvider>
  );
  */