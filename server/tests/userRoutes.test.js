// __tests__/userRoutes.test.js

const request = require("supertest");
const express = require("express");
const userRoutes = require("./routes/userRoutes"); // Adjust path as necessary

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

describe("User Routes", () => {
  it("should register a user", async () => {
    const response = await request(app).post("/api/users/register").send({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe("User registered");
  });

  it("should log in a user", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "john@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.text).toBe("User logged in");
  });
});
