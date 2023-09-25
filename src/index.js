import React from 'react';
import { BrowserRouter} from 'react-router-dom'

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './Front-End/reducer';
import Stateprovider from './Front-End/Stateprovider/Stateprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
<BrowserRouter>
<Stateprovider intialState={initialState} reducer={reducer }>
<App/>
</Stateprovider>

</BrowserRouter>
</React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
