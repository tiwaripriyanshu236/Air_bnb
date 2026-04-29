
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync")
const Listing = require("../models/listing");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

//index & create route
router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
     upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
);


//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);


//show , update & delete Route
router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,
    isOwner,
        upload.single('listing[image]'),
     validateListing,
     wrapAsync(listingController.updateListing))
.delete(isLoggedIn,wrapAsync(listingController.deleteListing));


//Edit Route
router.get("/:id/edit",isLoggedIn,wrapAsync(listingController.editListing));


module.exports = router;

