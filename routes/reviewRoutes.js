const express = require("express");
const { createReview, getReviews, getReviewById, updateReview, deleteReview } = require("../controllers/reviewController");

const router = express.Router();

// Create Review (POST)
router.post("/", createReview);

// Get All Reviews (GET)
router.get("/", getReviews);

// Get Single Review by ID (GET)
router.get("/:id", getReviewById);

// Update Review (PUT)
router.put("/:id", updateReview);

// Delete Review (DELETE)
router.delete("/:id", deleteReview);

module.exports = router;
