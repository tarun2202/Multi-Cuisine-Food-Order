import React from 'react';
import ReactDOM from 'react-dom/client';
import Launcher from './Launcher';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
<Launcher/>
</BrowserRouter>);

