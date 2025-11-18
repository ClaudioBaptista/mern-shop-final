import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    // Tentar conectar apenas com a URI.
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    // Isso deve capturar qualquer erro (como senha errada ou IP)
    console.error(`Error connecting to MongoDB: ${error.message}`); 
    process.exit(1);
  }
};

export default connectDatabase;