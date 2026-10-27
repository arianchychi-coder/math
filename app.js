require("dotenv").config();

const express = require("express");
const hameshRouter = require("./routes/hamaesh_route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.use("/", hameshRouter);

module.exports = app;