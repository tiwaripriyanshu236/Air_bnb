
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport"); 
const {saveRedirectUrl } = require("../middleware.js")
const userController = require("../controllers/user.js");



// SIGNUP
router.route("/signup")
.get(userController.renderSignupForm)
.post( wrapAsync(userController.signup));

// LOGIN FORM
router.route("/login")
.get(userController.renderLoginForm)
.post(passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.passportlogin
);


// LOGOUT
router.get("/logout",userController.passportlogout);

module.exports = router;