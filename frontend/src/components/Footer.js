import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: 'var(--prussian-blue)', 
        color: 'var(--alabaster-grey)',
        paddingTop: '2rem',
        marginTop: 'auto'
      }}
    >
      <Container>
        <Row className="justify-content-md-center py-4">
          
          {/* COLUNA 1: SOBRE */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--orange)', fontWeight: 'bold' }}>
              MernShop
            </h5>
            <p>
              A melhor loja de tecnologia para desenvolvedores e entusiastas. 
              Produtos de alta qualidade com os melhores preços do mercado.
            </p>
          </Col>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--orange)', fontWeight: 'bold' }}>
              Links Rápidos
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  <i className="fas fa-home me-2"></i> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/cart" className="footer-link">
                  <i className="fas fa-shopping-cart me-2"></i> Carrinho
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="footer-link">
                  <i className="fas fa-user me-2"></i> Minha Conta
                </Link>
              </li>
            </ul>
          </Col>

          {/* COLUNA 3: CONTATO */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-3" style={{ color: 'var(--orange)', fontWeight: 'bold' }}>
              Contato
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i> Sorocaba, SP - Brasil
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i> contato@mernshop.com
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i> (15) 99999-9999
              </li>
            </ul>
          </Col>
        </Row>

        {/* LINHA DE COPYRIGHT */}
        <Row>
          <Col className='text-center py-3 border-top' style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            Copyright &copy; {currentYear} MernShop - Todos os direitos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;