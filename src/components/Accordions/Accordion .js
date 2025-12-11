import React from 'react';

import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import './Accordion.css'

function Questions () {
  return (
    <Container className='mb-5 rtl'>
      <Accordion defaultActiveKey=''>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
           مدت زمان ارسال سفارش ها ؟
          </Accordion.Header>
          <Accordion.Body>
            سفارش ها در بازه زمانی یک الی سه روز کاری ارسال می شوند.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>نحوه دریافت کد رهگیری سفارش ؟</Accordion.Header>
          <Accordion.Body>کد رهگیری پس از تحویل بسته به پست برای شما پیامک میشود.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>چقدر طول میکشه بسته به دستم برسه؟</Accordion.Header>
          <Accordion.Body>
          ارسال با پست پیشتاز هست، حدود 3 الی 4 روز زمان میبره.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>آیا محصولات دارای گارانتی و تایید اصالت هستند؟</Accordion.Header>
          <Accordion.Body>
         بله ، تمامی محصولات دارای گارانتی اصالت کالا هستند.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Questions
