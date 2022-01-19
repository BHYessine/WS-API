const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
const connectDB = require("./config/connectDB");
const routes = require("./routes/userRoutes");
connectDB();
app.use("/api/user", routes);
const PORT = process.env.PORT;
app.listen(process.env.PORT, (err) =>
  err
    ? console.error(err.message)
    : console.log(`This server is running on localhost:${PORT}...`)
);
