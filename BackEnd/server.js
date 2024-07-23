// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Server started at port no. 3000");
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
