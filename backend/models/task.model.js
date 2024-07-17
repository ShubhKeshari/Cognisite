const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  activityName: { type: String, required: true },
  startDate: { type: Date, required: true },
  totalWork: { type: Number, required: true }, 
  numberOfLabour: { type: Number, required: true },
  labourEfficiency: { type: Number, required: true },
  endDate: { type: Date },
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = { Task };
