import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria'

const Pagina404 = () => (<div>Erro 404, esta pagina não existe.</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    <Route component={Pagina404} />
  </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);
