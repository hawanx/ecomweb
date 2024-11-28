const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGO_DB_NAME || "ecomweb";

let client;
let db;

// Function to connect to MongoDB
async function connectToDatabase() {
  if (!client) {
    try {
      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await client.connect();
      console.log("Connected to MongoDB successfully!");
      db = client.db(dbName); // Access the specified database
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      throw err;
    }
  }
  return db;
}

// Export the connection function
module.exports = connectToDatabase;
