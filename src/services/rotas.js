import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/home';
import Locacao from '../pages/locacao';
import Venda from '../pages/venda';
import Contato from '../pages/contato';
import Add from '../pages/Add';

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/venda" component={Venda}/>
                <Route exact path="/locacao" component={Locacao}/>
                <Route exact path="/contato" component={Contato}/>
                <Route exact path="/add" component={Add}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;