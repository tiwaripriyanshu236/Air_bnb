
const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

const Listing = require("../models/listing");
const Review = require("../models/review");
const {validateReview, isLoggedIn,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js")

// Post: Add Review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview));

     
// Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  wrapAsync(reviewController.deleteReview));


module.exports = router;