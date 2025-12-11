import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Footer.css'

function Footer () {
  return (
    <footer
      style={{
        backgroundColor: '#f1f3f5',
        padding: '20px 0',
        marginBottom: '0px',
        marginTop: '40px'
      }}
      dir='rtl'
    >
      <Container>
        <Row>
          {/* Social Media Icons */}
          <Col className='text-center mb-3'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark mx-3'
            >
              <i className='bi bi-instagram' style={{ fontSize: '24px' }}></i>
            </a>
            <a
              href='https://t.me/owltechdev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark mx-3'
            >
              <i className='bi bi-telegram' style={{ fontSize: '24px' }}></i>
            </a>
            <a
              href='https://wa.me/your-number'
              target='_blank'
              rel='noopener noreferrer'
              className='text-dark mx-3'
            >
              <i className='bi bi-whatsapp' style={{ fontSize: '24px' }}></i>
            </a>
          </Col>
        </Row>
        <Row>
          {/* Contact Information */}
          <Col className='text-center'>
            <p>
              <i className='bi bi-telephone-fill pe-2'></i>
              <span style={{ unicodeBidi: 'bidi-override', direction: 'ltr' }}>
                +98 123 456 7890
              </span>
            </p>
            <p>
              <i className='bi bi-envelope-fill'></i> owltechdev@gmail.com
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p>0W1TECH &copy;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
