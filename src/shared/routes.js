import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from '../App';

const Routes = () => (
    <div>
        <main>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </main>
    </div>
);

export default Routes;