import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import CartIcon from '../CartIcon/CartIcon';
import './Navbar.css';

function ColorSchemesExample({ cartItems = [], isLogin, currentUser, handleLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <Navbar className="sticky-navbar" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">

        {/* برند */}
        <Navbar.Brand as={Link} to='/'>0W1TECH</Navbar.Brand>

        {/* دسکتاپ منو */}
        <Nav className="desktop-menu d-none d-lg-flex align-items-center">
          <Nav.Item className="nav-item-with-submenu">
            <Nav.Link as={Link} to="/">صفحه اصلی</Nav.Link>
          </Nav.Item>

          <Nav.Item className="nav-item-with-submenu ms-4">
            <Nav.Link>دسته بندی ها</Nav.Link>
            <ul className="submenu">
              <li><Nav.Link as={Link} to="/earring">گوشواره</Nav.Link></li>
              <li><Nav.Link as={Link} to="/necklace">گردنبند</Nav.Link></li>
              <li><Nav.Link as={Link} to="/bracelet">دستبند</Nav.Link></li>
              <li><Nav.Link as={Link} to="/rings">انگشتر</Nav.Link></li>
            </ul>
          </Nav.Item>

          <Nav.Item className="nav-item-with-submenu ms-4">
            <Nav.Link as={Link} to="/contact">تماس با ما</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* المان‌های ثابت */}
        <div className="d-flex align-items-center">
          <Nav.Link as={Link} to="/cart" className="me-2">
            <Button style={{ backgroundColor: 'orange', border: 'none' }}>
              <CartIcon itemCount={cartItems.length} />
            </Button>
          </Nav.Link>

          {isLogin ? (
            <Nav.Item className='nav-item-with-submenu'>
              <Nav.Link as={Link} to='/profile'>حساب کاربری</Nav.Link>
              <ul className='submenu profile'>
                <li className="user-name">سلام، {currentUser.username}</li>
                <li><Nav.Link as={Link} to='/profile'>مشاهده حساب کاربری</Nav.Link></li>
                <li><Nav.Link as={Link} to='/exit' onClick={handleLogout}>خروج</Nav.Link></li>
              </ul>
            </Nav.Item>
          ) : (
            <>
              <Nav.Link as={Link} to='/register' className='me-2'>عضویت</Nav.Link>
              <Nav.Link as={Link} to='/login'>ورود</Nav.Link>
            </>
          )}

          {/* همبرگر موبایل */}
          <Button
            className="d-lg-none ms-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
        </div>
      </Container>

      {/* منوی موبایل */}
      {mobileMenuOpen && (
        <div className="mobile-menu d-lg-none">
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setMobileMenuOpen(false)}>صفحه اصلی</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => setSubmenuOpen(!submenuOpen)}
                style={{ cursor: 'pointer' }}
              >
                دسته بندی ها
              </Nav.Link>
              {submenuOpen && (
                <ul className="submenu" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '15px' }}>
                  <li><Nav.Link as={Link} to="/earring" onClick={() => setMobileMenuOpen(false)}>گوشواره</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/necklace" onClick={() => setMobileMenuOpen(false)}>گردنبند</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/bracelet" onClick={() => setMobileMenuOpen(false)}>دستبند</Nav.Link></li>
                  <li><Nav.Link as={Link} to="/rings" onClick={() => setMobileMenuOpen(false)}>انگشتر</Nav.Link></li>
                </ul>
              )}
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => setMobileMenuOpen(false)}>تماس با ما</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )}
    </Navbar>
  );
}

export default ColorSchemesExample;
