const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//Database Connection
const dbConnection = require("./db");

// For parsing application/json
app.use(express.json());
app.use(cors());

//Calling the routes
app.use("/", require("./routes/routes"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("Node.js server started http://localhost:" + port);
});
