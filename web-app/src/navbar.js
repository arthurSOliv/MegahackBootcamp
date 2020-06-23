import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import App from './App';
import Register from './Register';
import About from './About';
import Login from './Login';
import LoginStore from './LoginStore';
import LoginClient from './LoginClient';
import Contact from './Contact';
import Registerclient from './RegisterClient';
import Registerstore from './RegisterStore';
import UserPage from './user_components/UserPage';
import StorePage from './store_components/StorePage';
import Pedidos from './store_components/Pedidos';
import form from './user_components/Form';

import logo from './images/logo-texto.svg';

const Barra = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const currentPath = window.location.pathname;
  
    return (
      <div>
        <Router>
            {!currentPath.includes('userpage') && !currentPath.includes('storepage') ?
            <Navbar color="faded" light>
                <Container>
                    <NavLink href="/"><img src={logo} alt="Logo" className="logo"></img></NavLink>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <center>
                            <NavItem>
                                <NavLink href="/">Início</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register">Cadastro</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">Sobre</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Entrar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contato</NavLink>
                            </NavItem>
                        </center>
                    </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            : null }

            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/loginstore" component={LoginStore} />
            <Route path="/loginclient" component={LoginClient} />
            <Route path="/contact" component={Contact} />
            <Route path="/registerclient" component={Registerclient} />
            <Route path="/registerstore" component={Registerstore} />
            <Route path="/userpage" component={UserPage} />
            <Route path="/storepage" component={StorePage} />
            <Route path="/storepage/pedidos" component={Pedidos} />
            <Route path="/form" component={form} />
        </Router>
      </div>
    );
  }

export default Barra;