// Dummy product data
const products = [
  {
    _id: '1',
    name: 'Sample Product 1',
    price: 99.99,
    description: 'This is a sample product',
    image: 'https://via.placeholder.com/150'
  },
  {
    _id: '2',
    name: 'Sample Product 2',
    price: 199.99,
    description: 'Another sample product',
    image: 'https://via.placeholder.com/150'
  }
];

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = { getProducts, getProductById };
