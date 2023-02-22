import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppMui from "./AppMui/AppMui";
import AppAnt from "./AppAnt/AppAnt";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppAnt />
    {/*<AppMui />*/}
  </>
);
