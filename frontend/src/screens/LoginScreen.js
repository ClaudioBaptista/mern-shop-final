import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Login disparado');
    // Lógica de login com Redux virá aqui depois
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="p-5 shadow rounded" style={{ background: 'var(--card-bg)', maxWidth: '500px', width: '100%' }}>
        <h1 className="text-center mb-4">Login</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Digite seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type='password'
              placeholder='Digite sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' className="w-100">
            Entrar
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            Novo cliente? <Link to='/register'>Registre-se</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginScreen;