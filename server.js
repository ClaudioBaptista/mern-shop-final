import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js'; // 1. Importar Banco
import productRoutes from './routes/productRoutes.js'; // 2. Importar Rotas

dotenv.config();

// 3. Conectar ao Banco
connectDatabase();

const app = express();

// Permite aceitar dados JSON (útil para login/cadastro futuro)
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 4. Usar as Rotas de Produtos
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));