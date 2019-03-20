import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container } from 'reactstrap';

import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = () => {
      this.setState({windowScroll: window.scrollY})
    }

    state = {
      isOpen: false,
      windowScroll: null
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

    let classes = ['fixed-top header-nav'];
    
    if(this.state.windowScroll > 60) {
      classes.push('fixed-header');
    }

    return (
        <Navbar expand="lg" className={classes.join(' ')}>
            <Container>
                <NavbarBrand href="/" className="navbar-brand">Untitled  <span className="theme-bg"></span> </NavbarBrand>
                <NavbarToggler onClick={this.toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink 
                                to='/' exact
                                className = "btn btn-theme home-link"
                                activeClassName = "home-link__visited">
                                    For Users
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='/partners' exact
                                className="btn btn-theme home-link"
                                activeClassName="home-link__visited">
                                    For Partners
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
  }  
  
  
}

export default Navigation;
