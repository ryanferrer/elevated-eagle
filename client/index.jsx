import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Main from './components/Main/Main.jsx';
import './index.css';

ReactDOM.render(<Sidebar/>, document.getElementById('Sidebar'));
ReactDOM.render(<Main/>, document.getElementById('Main'));