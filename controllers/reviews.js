const Listing = require("../models/listing");
const Review = require("../models/review");

// CREATE
module.exports.createReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  const newReview = new Review({
    comment: req.body.review.comment,
    rating: req.body.review.rating,
    author: req.user._id,
  });

  await newReview.save();

  listing.reviews.push(newReview._id);
  await listing.save();

  req.flash("success", "Review Created!");
  res.redirect(`/listings/${req.params.id}`);
};

// DELETE
module.exports.deleteReview =  async (req, res) => {
    let { id, reviewId } = req.params;
    console.log("reviewId:", reviewId);
    let review = await Review.findById(reviewId);
   // console.log("review found:", review);
    // check review exist
    if (!review) {
      req.flash("error", "Review not found!");
      return res.redirect(`/listings/${id}`);
    }

    // check author exist
    if (!review.author) {
      req.flash("error", "Invalid review data!");
      return res.redirect(`/listings/${id}`);
    }

    //  safe comparison
    if (!review.author.equals(req.user._id)) {
      req.flash("error", "You are not authorized!");
      return res.redirect(`/listings/${id}`);
    }

    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId }
    });

    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
  
  };




