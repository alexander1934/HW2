import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { Button } from './components/Button/Button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Button onClick={()=> console.log("click")} disabled loading>Click me!</Button>
  </React.StrictMode>
);
