import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  // Pega os dados do Redux
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts()); // Busca os produtos quando a tela carrega
  }, [dispatch]);

  return (
    <>
      <h1 className="my-3">Últimos Produtos</h1>
      {loading ? (
        <h2>Carregando...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {/* Agora usamos os 'products' que vieram do banco, não a lista fixa */}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Card.Img src={product.image} variant='top' />
                <Card.Body>
                  <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                  <Card.Text as='h3'>R$ {product.price}</Card.Text>
                  <Button variant="primary">Adicionar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;