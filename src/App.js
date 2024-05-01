import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import CallbackPage from './CallbackPage.js';
// import Home from './HomePage';
// import CallbackComponent from './Callback';
import AppRoutes from './AppRoutes';
class App extends React.Component {
  render() {
     return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
  }
}

export default App;
