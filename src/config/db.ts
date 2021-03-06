import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const databaseName = 'moxy';
    const con = await mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${databaseName}`);
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
