import React from 'react';
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  // Exemplo de carrinho vazio vs cheio (mockado por enquanto)
  const cartItems = []; // Mude para ver itens: [{ product: 1, name: 'Airpods', image: '/images/airpods.jpg', price: 89.99, qty: 1 }]

  return (
    <Row>
      <Col md={8}>
        <h1>Carrinho de Compras</h1>
        {cartItems.length === 0 ? (
          <div className="alert alert-info">
            Seu carrinho está vazio <Link to="/">Voltar</Link>
          </div>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>R$ {item.price}</Col>
                  <Col md={2}>
                    {/* Select de Qtd aqui */}
                    <span>Qtd: {item.qty}</span>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light'>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal (0) itens</h2>
              R$ 0.00
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' disabled={cartItems.length === 0}>
                Finalizar Compra
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;