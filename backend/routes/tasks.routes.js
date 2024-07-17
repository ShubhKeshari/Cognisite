const express = require("express");
const { Task } = require("../models/task.model");
const tasksRouter = express.Router();

tasksRouter.post("/addTask", async (req, res) => {
  try {
    const {
      activityName,
      startDate,
      totalWork,
      numberOfLabour,
      labourEfficiency,
    } = req.body;

    const daysNeeded = Math.ceil(
      totalWork / (numberOfLabour * labourEfficiency)
    );
    const start = new Date(startDate);
    start.setDate(start.getDate() + daysNeeded-1);
    const endDate = start;

    const task = new Task({
      activityName,
      startDate,
      totalWork,
      numberOfLabour,
      labourEfficiency,
      endDate,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

tasksRouter.get("/getTask", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
tasksRouter.all("*", (req, res) => {
  return res.status(404).json({ message: "404 Invalid Route" });
});

module.exports = { tasksRouter };
