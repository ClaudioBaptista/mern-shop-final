import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const addToCartHandler = (id) => {
    navigate(`/cart/${id}?qty=1`);
  };

  return (
    <>
      {/* REMOVIDO O STYLE FIXO. Agora usa var(--heading-color) do CSS */}
      <h1 className="my-4 text-uppercase section-title">
        Últimos Produtos
      </h1>
      
      {loading ? (
        <h2>Carregando...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="d-flex align-items-stretch mb-4">
              <Card className='card-custom rounded'>
                <Card.Img 
                  src={product.image} 
                  variant='top' 
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title as='div'>
                    <strong>{product.name}</strong>
                  </Card.Title>
                  <Card.Text as='h3' className="my-3" style={{ color: 'var(--orange)' }}>
                    R$ {product.price}
                  </Card.Text>
                  <Button 
                    className="w-100 mt-auto"
                    style={{ backgroundColor: 'var(--prussian-blue)', border: 'none' }}
                    onClick={() => addToCartHandler(product._id)}
                  >
                    Adicionar ao Carrinho
                  </Button>
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