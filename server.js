const express = require("express");
// const cors = require('cors');

const app = express();

app.get("/api/test", (req, res) => {
  const array = [
    { id: 1, name: "Paco Taco", color: "red" },
    { id: 2, name: "Wako Tako", color: "blue" },
    { id: 3, name: "George", color: "green" },
  ];

  res.json(array);
});

const port = 5000;

app.listen(port, () => `Server running on port: ${port}`);
