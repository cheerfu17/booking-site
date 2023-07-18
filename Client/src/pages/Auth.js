import React, { useContext, useState} from 'react';
import { Button, Col, Form} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BOOKING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../components/http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("password");

    
    const click = async () =>{
        
        try {
            let data;
            if (isLogin){
                data = await login(email, password)
            } else {
                data = await registration(name, email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(BOOKING_ROUTE);
        } catch (error) {
            alert(error);
        }
    }

    

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600, borderRadius: 20}} className='p-5'>
                <h2 className='m-auto'>
                    {isLogin ? "Авторизация" : "Регистрация"}
                </h2>
                <Form className='d-flex flex-column'>
                    {!isLogin ? <Form.Control className='mt-3' placeholder='Введите ваше имя' value={name} onChange={e => setName(e.target.value)}/> : <div></div>}
                    <Form.Control className='mt-3' placeholder='Введите ваш email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className='mt-3' placeholder='Введите ваш пароль' value={password} onChange={e => setPassword(e.target.value)} type='password'/>
                    <Row className='d-flex mt-3 justify-content-between'>
                        <Col className='d-flex justify-content-between'>
                            {isLogin ? 
                            <div className='d-flex flex-col mr-5'>
                                <p>Нет аккаунта?</p>
                                <NavLink style={{marginLeft: "5px"}} to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div className='d-flex flex-col mr-5'>
                                <p>Есть аккаунт?</p>
                                <NavLink style={{marginLeft: "5px"}} to={LOGIN_ROUTE}>Авторизируйтесь!</NavLink>
                            </div>
                            }
                                
                            <Button onClick={click}  variant={'outline-success'}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                        </Col>
                    </Row>
                </Form>

            </Card>
        </Container>
    );
});

export default Auth;