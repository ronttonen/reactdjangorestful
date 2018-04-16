import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home, ListItem } from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Route path="/list-item" component={ListItem} />
        </div>
    </Router>,
document.getElementById('root')
);
registerServiceWorker();
