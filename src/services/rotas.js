import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/home';
import Venda from '../pages/venda';

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/venda" component={Venda}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;