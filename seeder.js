import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
// import Order from './models/orderModel.js'; // Se tiver criado o OrderModel
import connectDatabase from './config/database.js';

dotenv.config();

connectDatabase();

const importData = async () => {
  try {
    // 1. Limpa o banco
    // await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // 2. Cria os usuários
    const createdUsers = await User.insertMany(users);

    // 3. Pega o ID do admin (o primeiro usuário)
    const adminUser = createdUsers[0]._id;

    // 4. Adiciona o admin como "dono" de cada produto
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // 5. Insere os produtos
    await Product.insertMany(sampleProducts);

    console.log('Dados Importados com Sucesso!');
    process.exit();
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Dados Destruídos!');
    process.exit();
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    process.exit(1);
  }
};

// Verifica se chamamos com "-d" para deletar
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}