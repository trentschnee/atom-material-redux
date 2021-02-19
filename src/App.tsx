import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import React from 'react';
import HomePage from './components/pages/Home';
import logo from './logo.svg';
import theme from './theme';
import store from "./store"
import { Provider } from 'react-redux';
// import Provider from "react-redux"
function App() {
    // This is acting like a page
  // page should render some containers/components
  //  Impl(ement pages in later
  return (
    <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
    <HomePage/>
    </MuiThemeProvider>
    </Provider>

  );
}

export default App;
