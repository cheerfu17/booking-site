import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ADMIN_ROUTE, BOOKING_ROUTE, DIVISION_ROUTE, HALLS_ROUTE, LOGIN_ROUTE, USERS_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { NavLink } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href={BOOKING_ROUTE}>Hall Booking</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {user.isAuth
                        ?
                        <Nav className="me-auto">
                        <NavLink className="nav-link" to={BOOKING_ROUTE} >Booking</NavLink>
                        <NavLink className="nav-link" to={USERS_ROUTE}>Users</NavLink>
                        <NavLink className="nav-link" to={HALLS_ROUTE}>Halls</NavLink>
                        <NavLink className="nav-link" to={DIVISION_ROUTE}>Divisions</NavLink>
                        {user.user.role === "ADMIN" ?
                            <NavLink className="nav-link" to={ADMIN_ROUTE}>Admin</NavLink>
                            :
                            <div></div>
                        }
                        </Nav>
                        :
                        <Nav className="me-auto">
                        </Nav>
                    }

                    {user.isAuth 
                    ?
                    <Nav>
                        <NavLink className="nav-link">{user.user.name}</NavLink>
                        <NavLink className="nav-link" onClick={() => {user.setIsAuth(false); user.setUser({}); localStorage.removeItem("token")}} to={LOGIN_ROUTE}>Logout</NavLink>
                    </Nav>
                    :
                    <Nav>
                        <NavLink className="nav-link" >Login</NavLink>
                    </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;