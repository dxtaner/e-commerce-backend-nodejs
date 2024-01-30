const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const Product = require("../model/Product");

describe("Product API", () => {
  beforeEach(async () => {
    await Product.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should add a new product", async () => {
    const newProduct = {
      title: "Test Product",
      description: "This is a test product.",
      category: "Test Category",
      price: 19.99,
      image: "https://example.com/test-product.jpg",
    };

    const response = await request(app)
      .post("/api/product")
      .send(newProduct)
      .expect(201);

    const savedProduct = await Product.findById(response.body.data._id);
    expect(savedProduct).toBeTruthy();
    expect(savedProduct.title).toBe(newProduct.title);
  });

  it("should retrieve all products", async () => {
    const products = [
      {
        title: "Product 1",
        description: "Description 1",
        category: "Category 1",
        price: 29.99,
        image: "https://example.com/product1.jpg",
      },
      {
        title: "Product 2",
        description: "Description 2",
        category: "Category 2",
        price: 39.99,
        image: "https://example.com/product2.jpg",
      },
    ];

    await Product.create(products);

    const response = await request(app).get("/api/product").expect(200);

    expect(response.body.success).toBe(true);
    expect(response.body.data.length).toBe(products.length);
  });
});
