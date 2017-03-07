import React from 'react';
import ItemList from '../containers/itemsList/items-list';
import AdminPanel from '../containers/adminPanel/admin-panel';
import Header from '../containers/header/header';
import {
    BrowserRouter as Router, 
    Route } from 'react-router-dom'

require('../../scss/style.scss');

const App = () => (
    <Router>
        <div>
            <Header/>
            <hr/>
            <Route path="/items" component={ItemList}/>
            <Route path="/panel" component={AdminPanel}/>
        </div>
    </Router>
);

export default App;
