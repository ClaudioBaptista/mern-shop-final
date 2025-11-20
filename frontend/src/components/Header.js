import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <Navbar 
        expand="lg" 
        collapseOnSelect
        style={{ backgroundColor: 'var(--navbar-bg)', transition: '0.3s' }} 
        variant="dark"
      >
        <Container>
          <Link to="/" className='navbar-brand brand-logo'>
             MernShop
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              
              {/* Botão de Tema com Ícones Font Awesome */}
              <Button 
                variant="outline-light" 
                onClick={toggleTheme} 
                className="me-3 btn-sm rounded-pill"
                style={{ 
                  borderColor: 'var(--orange)', 
                  color: 'var(--orange)',
                  width: '40px',    // Define largura fixa para o botão não "pular" de tamanho
                  height: '30px',   // Ajuste fino de altura
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {theme === 'light' ? (
                  <i className="fas fa-moon"></i> 
                ) : (
                  <i className="fas fa-sun"></i>
                )}
              </Button>

              <Link to="/cart" className='nav-link' style={{ color: 'var(--navbar-text)' }}>
                <i className='fas fa-shopping-cart me-1'></i> Carrinho
              </Link>
              
              <Link to="/login" className='nav-link' style={{ color: 'var(--navbar-text)' }}>
                <i className='fas fa-user me-1'></i> Login
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;