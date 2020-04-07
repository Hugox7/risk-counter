import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import SelectRegions from './components/SelectRegions';

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/select-regions" component={SelectRegions} />
            </Switch>
        </div>
    )
}

export default App;