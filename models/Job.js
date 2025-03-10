const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true,   enum: ["Engineering", "Design", "Product", "Marketing", "Sales", "HR", "Finance"], },
  location: { type: String, required: true },
  type: { type: String, required: true ,  enum: ["Full-time", "Part-time", "Contract", "Internship", "Freelance"],},
  experience: { type: String },
  salary: { type: String },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  benefits: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
