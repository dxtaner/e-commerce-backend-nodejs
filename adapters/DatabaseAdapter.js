const mongoose = require("mongoose");
require("dotenv").config();

class DatabaseAdapter {
  static async connectToDatabase() {
    try {
      console.log(process.env.PORT);
      const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

      await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("Connected to the database!");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw error;
    }
  }

  static getCollection(collectionName) {
    return mongoose.connection.collection(collectionName);
  }
}

module.exports = DatabaseAdapter;
