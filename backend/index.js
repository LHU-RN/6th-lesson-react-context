const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = 3000;
const jwt = require("jsonwebtoken");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const userTest = {
  fullName: "Nguyen Van A",
  username: "nguyenvana",
  password: "xxxxxx",
};

app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username === userTest.username && password === userTest.password) {
    const token = jwt.sign({ username }, "secretkey", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

app.get("/me", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, "secretkey");
    res.json({
      ...userTest,
      password: undefined,
    });
  } catch (e) {
    res.status(400).json({ message: "Invalid token" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
