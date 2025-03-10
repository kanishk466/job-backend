const express = require("express");
const { createJob, getJobs, getJob, updateJob, deleteJob , applyJob } = require("../controllers/jobController");

const router = express.Router();

router.post("/jobs", createJob);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJob);
router.put("/jobs/:id", updateJob);
router.delete("/jobs/:id", deleteJob);
router.post("jobs/:id/apply" ,applyJob );
module.exports = router;
