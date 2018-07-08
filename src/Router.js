import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Liga from './components/liga/Liga';
import Calendario from './components/calendario/Calendario'; 
import notFound from './components/not-found/notFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Liga} />
            <Route path='/liga' component={Liga} />
            <Route path='/calendario/:equipo' component={Calendario} />
            <Route path='/calendarios' component={Calendario} />
            <Route component={notFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;