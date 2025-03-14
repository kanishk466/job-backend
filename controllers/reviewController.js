const Review = require("../models/review");

// ✅ Create a New Review
exports.createReview = async (req, res) => {
  try {
    const { customerName, rating, comment } = req.body;
    const newReview = new Review({ customerName, rating, comment });
    await newReview.save();
    res.status(201).json({ message: "Review added successfully!", review: newReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Review by ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found!" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Review by ID
exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReview) return res.status(404).json({ message: "Review not found!" });
    res.json({ message: "Review updated successfully!", review: updatedReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Review by ID
exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) return res.status(404).json({ message: "Review not found!" });
    res.json({ message: "Review deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
