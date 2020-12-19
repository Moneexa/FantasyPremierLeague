import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import {store} from './shared/store/store'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-rubik'
import { StoreProvider } from 'easy-peasy';

function Index() {
  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
