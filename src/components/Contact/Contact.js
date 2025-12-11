import React from 'react'
import Layout from '../Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import TitleWithLines from '../TitleWithLines/TitleWithLines'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Contact.css'

export default function Contact () {
  return (
    <Layout>
      <TitleWithLines text='تماس با ما' />
      <Container>
        <Row className='d-flex justify-content-between mb-5'>
          <Col>
            <p style={{marginBottom:'50px'}}>
              اگر در هر مرحله‌ای از خرید و یا انتخاب محصول نیاز به راهنمایی
              دارید، تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست. هدف ما
              فراهم کردن تجربه‌ای مطمئن و راحت برای شماست تا با خیالی آسوده از
              خرید خود لذت ببرید. لطفاً از طریق فرم زیر با ما در ارتباط باشید.
            </p>
            <Form>
            <Row className='mb-3'>
              <Col>
                <Form.Control placeholder='نام و نام خانوادگی' dir='rtl' style={{border: 'orange 1px solid'}}/>
              </Col>
              <Col>
                <Form.Control
                  type='tel'
                  placeholder='شماره موبایل'
                  dir='rtl'
                  className='text-right-placeholder'
                  style={{border: 'orange 1px solid'}}
                  onKeyDown={e => {
                    if (!/[0-9+]/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Form.Control
                  style={{border: 'orange 1px solid'}}
                  as='textarea'
                  placeholder='پیام شما'
                  rows={3}
                  dir='rtl'
                />
              </Col>
            </Row>
            <Button type='submit' style={{backgroundColor: 'orange', border: 'none'}}>
              ارسال پیام
            </Button>
          </Form>
          </Col>

        </Row>
 
      </Container>
    </Layout>
  )
}
