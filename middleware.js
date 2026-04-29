
const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError");
const {listingSchema ,reviewSchema} = require("./schema.js");

//  Check login
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }
    next();
};


//  Save redirect URL
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Check listing owner

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You don't have permission!");
        return res.redirect(`/listings/${id}`);
    }

    next();
};

module.exports.validateListing = (req,res,next) =>{
 let {error} = listingSchema.validate(req.body);
 if(error){
    let errmsg = error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400, errmsg); 
 }else{
    next();
 } 
};


// validation
module.exports.validateReview = (req,res,next) =>{
 let {error} = reviewSchema.validate(req.body);
 if(error){
    let errmsg = error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400, errmsg); 
 }else{
    next();
 } 
};
