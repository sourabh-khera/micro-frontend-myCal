import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from"react-redux"
import store from "./store"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(
  <Provider store={store}>
      <MuiThemeProvider>
    <App />
      </MuiThemeProvider>
    </Provider>,
  document.getElementById('app')
);
