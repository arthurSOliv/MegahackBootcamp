import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Barra from './navbar';
import Footer from './footer';

import * as serviceWorker from './serviceWorker';


const routing = (
  <div>  
    <Barra />
    <Footer />
  </div>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
