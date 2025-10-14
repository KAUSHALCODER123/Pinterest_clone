import mongoose from 'mongoose';

// Support either ATLASDB_URI (used in code) or MONGODB_URI (common .env key)
const dbURL = process.env.ATLASDB_URI || process.env.MONGODB_URI;
if (!dbURL) {
  throw new Error(
    'Please define ATLASDB_URI or MONGODB_URI environment variable inside your .env file'
  );
}

// connect to mongodb

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);

    console.log(`Connected to mongodb database`);
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
