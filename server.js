import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'; // assuming it exists

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); // optional

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
