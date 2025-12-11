import React from 'react';

import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router-dom'

function CarouselFadeExample () {
  const navigate = useNavigate()

  const goToPage = path => {
    navigate(path)
  }

  return (
  <Container>
    <Carousel fade>
      <Carousel.Item onClick={() => goToPage('/bracelet')}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/slider/slider1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>دستبند</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item onClick={() => goToPage('/earring')}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/images/slider/slider3.webp'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>گوشواره</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>

  )
}

export default CarouselFadeExample
