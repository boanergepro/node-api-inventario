const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Hi.!")
});

app.listen( '8080', () => {
  console.log("app corriendo en el puerto 8080")
});
