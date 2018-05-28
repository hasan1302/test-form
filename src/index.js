import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducer } from “redux”;

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';


import Authorization from './Authorization.jsx';

const lavaTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #2196f3 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
    
  },

});

const userReducer = (state = {}, action) => {
  return state;
};

const orderReducer = (state = {}, action) => {
return state;
};

const reducers = combineReducers({
userState: userReducer,
orderState: orderReducer
});

const store = createStore(reducers);

const App = () => (
    <MuiThemeProvider theme={lavaTheme}>
      <Authorization />
    </MuiThemeProvider>
  );

ReactDOM.render(<App />, document.getElementById('root'));


 