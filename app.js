if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// ROUTES
const reviewRoutes = require("./routes/review");
const listingsRoutes = require("./routes/listing");
const userRoutes = require("./routes/user");

// ================= DB =================
const dbUrl = process.env.ATLASDB_URL;

// ================= VIEW ENGINE =================
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ================= MIDDLEWARE =================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ================= PORT =================
const PORT = process.env.PORT || 8080;

// ================= DB CONNECT =================
async function main() {
  if (!dbUrl) {
    throw new Error("❌ ATLASDB_URL is missing");
  }

  await mongoose.connect(dbUrl);
  console.log("✅ Connected to MongoDB");

  // ================= SESSION =================
  app.use(
    session({
      secret: process.env.SECRET || "mysupersecret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      },
    })
  );

  app.use(flash());

  // ================= PASSPORT =================
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  // ================= GLOBAL =================
  app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
  });

  // ================= HOME ROUTE =================
  app.get("/", (req, res) => {
    res.redirect("/listings");
  });

  // ================= ROUTES =================
  app.use("/", userRoutes);
  app.use("/listings", listingsRoutes);
  app.use("/listings/:id/reviews", reviewRoutes);

  // ================= ERROR =================
  app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
  });

  app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
  });

  // ================= SERVER =================
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

// ================= RUN =================
main().catch((err) => {
  console.log("❌ DB Error:", err);
});