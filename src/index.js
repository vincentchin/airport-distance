import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

// Fixes onTouchTap error from Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
