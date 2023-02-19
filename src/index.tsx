import React from 'react';
import ReactDOM from 'react-dom/client';
import { CheckBox } from './components/CheckBox/CheckBox';
import './styles/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CheckBox onChange={()=> console.log("bebra")}/>
  </React.StrictMode>
);
