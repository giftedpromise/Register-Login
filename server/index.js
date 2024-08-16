// server/tests/userRoutes.test.js

const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("../routes/userRoutes"); // Adjust path if necessary

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes); // Use the routes

const connectionString =
  "mongodb+srv://gifted:mX3VeBBCDObfBGRk@register.fxfou.mongodb.net/CRUD?retryWrites=true&w=majority";

// Connect to the database before running tests
beforeAll(async () => {
  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Close the database connection after tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /api/users/register", () => {
  it("should register a user successfully", async () => {
    const response = await request(app).post("/api/users/register").send({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200); // Adjust if your endpoint returns a different status
    expect(response.text).toBe("User registered"); // Adjust if your endpoint returns different text
  });

  // Additional test cases for error scenarios
});
