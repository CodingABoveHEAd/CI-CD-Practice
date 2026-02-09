import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Vercel version 2!" ,
    name: "Vercel API",
    version: "2.0",
    build_at: new Date().toISOString(),

  });
});

export default app;
