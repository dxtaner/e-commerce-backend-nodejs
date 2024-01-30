Express.js Application with Compression Middleware
==================================================

This is a basic Express.js application with compression middleware to improve response time. The application also includes a main router for handling API routes.

Getting Started
---------------

1.  Install the necessary dependencies:

    npm install

3.  Start the Express server:

    npm start

The server will be running on [http://localhost:3000](http://localhost:3000) by default.

Dependencies
------------

*   [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
*   [Compression](https://www.npmjs.com/package/compression): Middleware for compressing responses.

Application Structure
---------------------

*   **Main Router:** The application includes a main router (`MainRouter.js`) for handling API routes. You can find and customize the routes in this file.
*   **Middleware:**
    *   `compression`: Used to compress responses, reducing the size of data sent to clients and improving performance.
    *   `express.urlencoded` and `express.json`: Middleware for parsing incoming request bodies.
*   **Default Route:** The default route ("/") responds with a simple message: "Hello, My App!"

API Routes
----------

All API routes are prefixed with "/api". You can define and extend the routes in the `MainRouter.js` file.


Real-Time Product Updates with Socket.io and MongoDB
====================================================

This repository contains a Node.js application that demonstrates real-time product updates using Socket.io and MongoDB. The application uses a WebSocket connection to notify clients about changes to product data in the MongoDB database.

Prerequisites
-------------

Before running the application, make sure you have the following installed:

*   Node.js
*   MongoDB
*   npm (Node Package Manager)

Installation
------------

1.  Clone the repository:

    git clone[ https://github.com/your-username/real-time-product-updates.git](https://github.com/dxtaner/e-commerce-backend-nodejs)
    cd real-time-product-updates

3.  Install dependencies:

    npm install

5.  Create a `.env` file in the root directory with the following content:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string

Replace `your_mongodb_connection_string` with the actual connection string for your MongoDB database.

Router Configuration
====================

This repository contains a set of routers built using Express.js for handling various endpoints of an application. Below is an overview of each router and its purpose:

Routers
-------

1.  ### Auth Router
    
    Path: `/auth`
    
    Handles authentication-related endpoints.
    
2.  ### User Router
    
    Path: `/user`
    
    Handles user-related endpoints, requiring authentication.
    
3.  ### Product Router
    
    Path: `/product`
    
    Manages endpoints related to product operations, requiring authentication.
    
4.  ### Cart Item Router
    
    Path: `/cartitem`
    
    Responsible for managing shopping cart items, requiring authentication.
    
5.  ### File Router
    
    Path: `/file`
    
    Manages file-related endpoints, requiring authentication.
    
6.  ### Search Router
    
    Path: `/search`
    
    Handles search functionalities.
    

Middleware
----------

*   ### AuthValidator
    
    Location: `../validators/AuthValidator.js`
    
    Provides authentication checks for routes requiring authorization. Used as middleware for routes handling user, product, cart item, and file operations.
    
## Auth Router
This router handles authentication-related endpoints.

### Endpoints

1. **Login**
   - Path: `/auth/login`
   - Method: `POST`
   - Description: Authenticates a user.
   - Request Body:
     - Requires validation using `UserValidator.loginValidator`.
     - Should include user credentials (e.g., email and password).
   - Controller: `AuthController.loginController`

2. **Register**
   - Path: `/auth/register`
   - Method: `POST`
   - Description: Registers a new user.
   - Request Body:
     - Requires validation using `UserValidator.registerValidator`.
     - Should include user details (e.g., username, email, password).
   - Controller: `AuthController.registerController`

## User Router

This router handles user-related endpoints.

### Endpoints

1. **Get User**
   - Path: `/user/:objectId`
   - Method: `GET`
   - Description: Retrieves a specific user by object ID.
   - Request Parameters:
     - `objectId`: The unique identifier of the user.
   - Middleware:
     - `UserValidator.getUserValidator`: Validates the request parameters.
     - `UserValidator.validate`: Additional validation if needed.
   - Controller: `UserController.getUser`

2. **Get All Users**
   - Path: `/user`
   - Method: `GET`
   - Description: Retrieves all users.
   - Middleware:
     - `UserValidator.getAllUsersValidator`: Validates the request.
     - `UserValidator.validate`: Additional validation if needed.
   - Controller: `UserController.getAllUsers`

## Product Router

This router handles product-related endpoints.

### Endpoints

1. **Add Product**
   - Path: `/product/`
   - Method: `POST`
   - Description: Adds a new product.
   - Request Body:
     - Requires validation using `ProductValidator.addProductValidator`.
     - Should include product details.
   - Controller: `ProductController.addProductController`

2. **Edit Product**
   - Path: `/product/:objectId`
   - Method: `PUT`
   - Description: Updates an existing product.
   - Request Parameters:
     - `objectId`: The unique identifier of the product to be edited.
   - Request Body:
     - Requires validation using `ProductValidator.editProductValidator`.
     - Should include updated product details.
   - Controller: `ProductController.editProductController`

3. **Get All Products**
   - Path: `/product/`
   - Method: `GET`
   - Description: Retrieves all products.
   - Controller: `ProductController.getAllProductController`

4. **Get Product**
   - Path: `/product/:objectId`
   - Method: `GET`
   - Description: Retrieves a specific product by object ID.
   - Request Parameters:
     - `objectId`: The unique identifier of the product.
   - Middleware:
     - `ProductValidator.getProductValidator`: Validates the request parameters.
   - Controller: `ProductController.getProductController`

5. **Delete Product**
   - Path: `/product/:objectId`
   - Method: `DELETE`
   - Description: Deletes a specific product by object ID.
   - Request Parameters:
     - `objectId`: The unique identifier of the product to be deleted.
   - Middleware:
     - `ProductValidator.deleteProductValidator`: Validates the request parameters.
   - Controller: `ProductController.deleteProductController`

## Cart Item Router

This router handles cart item-related endpoints.

### Endpoints

1. **Add Item to Cart**
   - Path: `/cartitem/`
   - Method: `POST`
   - Description: Adds an item to the cart.
   - Request Body:
     - Requires validation using `CartItemValidator.addItemToCartValidator`.
     - Should include item details.
   - Controller: `CartItemController.addItemToCart`

2. **Get Cart Items**
   - Path: `/cartitem/`
   - Method: `GET`
   - Description: Retrieves items from the cart.
   - Middleware:
     - `CartItemValidator.getItemsValidator`: Validates the request.
   - Controller: `CartItemController.getCartItems`

3. **Get All Items**
   - Path: `/cartitem/all`
   - Method: `GET`
   - Description: Retrieves all items from the cart.
   - Middleware:
     - `CartItemValidator.getItemsValidator`: Validates the request.
   - Controller: `CartItemController.getAllItems`

## File Router

This router handles file-related endpoints.

### Endpoints

1. **Upload File**
   - Path: `/file/upload`
   - Method: `POST`
   - Description: Uploads a file.
   - Request Body:
     - Requires a single file upload using `multipart/form-data` format.
   - Controller: `FileController.uploadFile`

2. **Get File**
   - Path: `/file/:filename`
   - Method: `GET`
   - Description: Retrieves a specific file by filename.
   - Request Parameters:
     - `filename`: The name of the file to be retrieved.
   - Controller: `FileController.getFile`

3. **Get All Files**
   - Path: `/file/`
   - Method: `GET`
   - Description: Retrieves metadata for all files.
   - Controller: `FileController.getAllFiles`

## Search Router

This router handles search-related endpoints.

### Endpoints

1. **Search**
   - Path: `/search/`
   - Method: `GET`
   - Description: Performs a search operation.
   - Controller: `SearchController.searchController`

Usage
-----

1.  Clone the repository.
2.  Install dependencies using `npm install`.
3.  Start the server using `npm start`.
4.  Access various endpoints using the provided paths and ensure authentication where necessary.

Authentication
--------------

Authentication is required for routes handling sensitive operations such as user management, product management, cart operations, and file handling. The `AuthValidator` middleware ensures that only authenticated users can access these routes.


Usage
-----

1.  Start the MongoDB server.
2.  Run the application:

    npm start

4.  The server will be started at the specified port (default is 3000). Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

WebSocket Connection
--------------------

The application uses Socket.io to establish a WebSocket connection between the server and clients. When a client connects to the server, it joins a room specified by the product ID.

    // Example: Joining a room based on the product ID
    socketio.on("connection", (socket) => {
      socket.join(socket.handshake.query.productId);
    });

Real-Time Product Updates
-------------------------

The application listens for changes in the MongoDB database using change streams. When a product is updated in the database, the server emits a `product-update` event to the corresponding room, notifying clients about the change.

    // Example: Broadcasting product updates to clients in the room
    dbStream.on("change", (change) => {
      if (change.operationType === "update") {
        socketio.in(change.documentKey._id).emit("product-update", {
          _id: change.documentKey._id,
          ...change.updateDescription.updatedFields,
        });
      }
    });

Clients can then listen for the `product-update` event and update their UI accordingly.

Contributing
------------

Feel free to contribute to the project by opening issues or submitting pull requests.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
