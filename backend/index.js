const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./utils/db.config");
const PORT = process.env.PORT || 8080;
const { tasksRouter } = require("./routes/tasks.routes");
app.use(cors());

app.use(express.json());
app.use("/tasks", tasksRouter);
app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Server Home Page" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
app.listen(PORT, async () => {
  await connectDB();
  console.log(`server is running at http://localhost:${PORT}`);
});
