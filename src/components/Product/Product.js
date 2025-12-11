import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { allProducts } from '../Data/Data';
import './Product.css';
import { Container, Row, Col, Image, Alert, Button, Tabs, Tab, Form } from 'react-bootstrap';

const Product = ({ addToCart, cartItems = [], setCartItems }) => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const defaultDescription =
    "این محصول از بهترین متریال ساخته شده و مناسب استفاده روزانه است. کیفیت عالی، طراحی شیک و دوام بالا از ویژگی‌های این محصول است.";

  // پیدا کردن محصول
  useEffect(() => {
    if (category && id) {
      const foundProduct = allProducts.find(
        item =>
          item.type &&
          item.type.toLowerCase() === category.toLowerCase() &&
          item.id === Number(id)
      );
      setProduct(foundProduct);

      if (foundProduct) {
        const savedQuantity = localStorage.getItem(`product_${id}_quantity`);
        if (savedQuantity) setSelectedProductQuantity(Number(savedQuantity));
        // بررسی وجود نظرات
        setReviews(foundProduct.reviews || []);
      }
    }
  }, [category, id]);

  // ذخیره quantity در localStorage
  useEffect(() => {
    if (product) {
      localStorage.setItem(`product_${id}_quantity`, selectedProductQuantity);
    }
  }, [selectedProductQuantity, id, product]);

  const toPersianNumber = number =>
    new Intl.NumberFormat('fa-IR').format(number);

  const handleIncreaseQuantity = () => {
    if (product && selectedProductQuantity < product.stock) {
      setSelectedProductQuantity(prev => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (selectedProductQuantity > 1) setSelectedProductQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      const existingIndex = cartItems.findIndex(item => item.id === product.id);
      if (existingIndex !== -1) {
        const updatedCart = [...cartItems];
        updatedCart[existingIndex].quantity = selectedProductQuantity;
        setCartItems(updatedCart);
      } else {
        addToCart({ ...product, quantity: selectedProductQuantity });
      }
    }
  };

  const handleAddReview = e => {
    e.preventDefault();
    if (newReview.trim() === '') return;
    const review = { username: 'کاربر مهمان', comment: newReview };
    setReviews(prev => [review, ...prev]);
    setNewReview('');
  };

  return (
    <Layout>
      <Container className="mt-5">
        {product ? (
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="product-card-box p-4" style={{ background: '#fff', borderRadius: '15px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                <Row>
                  {/* عکس محصول */}
                  <Col md={6} className="text-center mb-4">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fluid
                      rounded
                      style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.15)', borderRadius: '15px' }}
                    />
                  </Col>

                  {/* اطلاعات محصول */}
                  <Col md={6} className="product-info-col">
                    <h1 className="product-title mb-3">{product.title}</h1>

                    <p className="product-price mb-2" style={{ fontSize: '1.4rem', fontWeight: '600' }}>
                      قیمت: <span style={{ color: 'orange' }}>{toPersianNumber(product.price)} تومان</span>
                    </p>

                    <p className="product-info mb-4" style={{ color: '#555' }}>
                      دسته‌بندی: <strong>{product.type}</strong>
                    </p>

                    {/* کنترل تعداد */}
                    <div className="quantity-control d-flex align-items-center mb-3 flex-wrap">
                      <Button 
                        className="quantity-btn"
                        onClick={handleDecreaseQuantity} 
                        disabled={selectedProductQuantity <= 1}
                      >
                        -
                      </Button>

                      <input
                        type="number"
                        value={selectedProductQuantity}
                        onChange={e => {
                          const val = Number(e.target.value);
                          if (val >= 1 && val <= product.stock) setSelectedProductQuantity(val);
                        }}
                        min="1"
                        max={product.stock}
                        className="quantity-input"
                      />

                      <Button 
                        className="quantity-btn"
                        onClick={handleIncreaseQuantity} 
                        disabled={selectedProductQuantity >= product.stock}
                      >
                        +
                      </Button>
                    </div>

                    {/* مجموع قیمت */}
                    <p className="product-total-price mb-3" style={{ fontSize: '1.2rem' }}>
                      مجموع: <span style={{ color: 'orange', fontWeight: '600' }}>{toPersianNumber(product.price * selectedProductQuantity)} تومان</span>
                    </p>

                    <Button 
                      className="add-to-cart-btn w-100"
                      onClick={handleAddToCart}
                    >
                      افزودن به سبد خرید
                    </Button>
                  </Col>

                </Row>

                {/* تب توضیحات و نظرات */}
                <div className="mt-5">
                  <Tabs defaultActiveKey="description" id="product-tabs" className="mb-3">
                    {/* تب توضیحات */}
                    <Tab eventKey="description" title="توضیحات">
                      <p style={{ lineHeight: '1.8', marginTop: '10px' }}>
                        {product.description || defaultDescription}
                      </p>
                    </Tab>

                    {/* تب نظرات */}
                    <Tab eventKey="reviews" title={`نظرات (${reviews.length})`}>
                      {reviews.length > 0 ? (
                        reviews.map((rev, index) => (
                          <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                            <strong>{rev.username}</strong>
                            <p>{rev.comment}</p>
                          </div>
                        ))
                      ) : (
                        <p>هنوز نظری برای این محصول ثبت نشده است.</p>
                      )}

                      {/* فرم افزودن نظر */}
                      <Form onSubmit={handleAddReview} className="mt-3">
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="نظر خود را بنویسید..."
                          value={newReview}
                          onChange={e => setNewReview(e.target.value)}
                          className="mb-2"
                        />
                        <Button type="submit" style={{ backgroundColor: 'orange', border: 'none' }}>ثبت نظر</Button>
                      </Form>
                    </Tab>
                  </Tabs>
                </div>

              </div>
            </Col>
          </Row>
        ) : (
          <Alert variant="danger" className="text-center">
            محصول یافت نشد!
          </Alert>
        )}
      </Container>
    </Layout>
  );
};

export default Product;
