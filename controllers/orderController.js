const getOrders = (req, res) => {
  res.json([
    {
      _id: '1',
      user: 'User A',
      totalPrice: 250,
      isPaid: false,
      createdAt: new Date()
    }
  ]);
};

module.exports = { getOrders };
