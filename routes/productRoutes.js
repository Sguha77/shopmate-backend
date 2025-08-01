// backend/routes/productRoutes.js
import express from 'express';
const router = express.Router();

const products = [
  {
    id: 1,
    name: 'Nike Air Max 90',
    image: 'https://images.unsplash.com/photo-1699198489130-2e02f3726612?w=700&auto=format&fit=crop&q=60',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.5,
    description: 'Classic comfort and style from Nike.'
  },
  {
    id: 2,
    name: 'Apple Watch Series 6',
    image: 'https://m.media-amazon.com/images/I/71bf9IpGjtL._AC_SL1500_.jpg',
    price: 399,
    originalPrice: 499,
    rating: 5,
    description: 'A powerful smartwatch with health features.'
  },
  {
    id: 3,
    name: 'MacBook Pro',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    price: 1499.99,
    originalPrice: 1699.99,
    rating: 3.7,
    description: 'Powerful performance for professionals.'
  }
];

router.get('/', (req, res) => {
  res.json(products);
});

export default router;
