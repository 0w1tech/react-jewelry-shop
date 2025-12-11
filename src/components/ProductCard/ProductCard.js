import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ id, type, title, price, image, addToCart }) => {

  const toPersianNumber = (number) => 
    new Intl.NumberFormat('fa-IR').format(number);

  return (
    <Link to={`/product/${type}/${id}`} style={{ textDecoration: 'none' }}>
      <Card style={{ width: '18rem', margin: '10px', border: '1px orange solid' , boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.19)'}}>
        <Card.Img variant='top' src={image} alt={title} />
        <Card.Body style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>قیمت: {toPersianNumber(price)} تومان</Card.Text>

          <Button style={{ width: '90%', backgroundColor: 'orange', border: 'none'}}
            onClick={e => {
              e.preventDefault() 
              addToCart({ id, type, title, price, image })
            }}
          >
           افزودن به سبد خرید
          </Button>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default ProductCard
