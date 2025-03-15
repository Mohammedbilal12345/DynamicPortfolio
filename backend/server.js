const express = require("express");
const cors = require("cors");  // Import cors

const app = express();

app.use(cors());  // Allow all origins (Not recommended for production)

// OR Allow only frontend (Vite) to access backend
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
