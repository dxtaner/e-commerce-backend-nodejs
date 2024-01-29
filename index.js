const { Server } = require("socket.io");
const DatabaseAdapter = require("./adapters/DatabaseAdapter.js");
const Product = require("./models/Product.js");
const app = require("./app.js");

require("dotenv").config();

const port = process.env.PORT || 3000;
// console.log("Port is:", port);

DatabaseAdapter.connectToDatabase()
  .then(() => {
    const server = app.listen(port, () => {
      console.log(`Server started at the port ${port}`);
    });

    const socketio = new Server(server);

    socketio.on("connection", (socket) => {
      socket.join(socket.handshake.query.productId);
    });

    const dbStream = DatabaseAdapter.getCollection(
      Product.getCollectionName()
    ).watch();

    dbStream.on("change", (change) => {
      if (change.operationType === "update") {
        socketio.in(change.documentKey._id).emit("product-update", {
          _id: change.documentKey._id,
          ...change.updateDescription.updatedFields,
        });
      }
    });
  })
  .catch((err) => {
    console.log("Failed to connect to the database!", err);
    process.exit(1);
  });
