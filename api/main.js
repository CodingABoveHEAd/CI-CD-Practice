import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Niloy's website!" });
});

module.exports = app;
