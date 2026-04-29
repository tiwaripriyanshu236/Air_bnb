

const mongoose  = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  image: {
    url: String,
    filename: String,
  },

  price: Number,

  // 👉 address ke liye (jo tum pehle se use kar rahe ho)
  location: String,

  country: String,

  // ✅ NEW: GeoJSON location for map
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true
    }
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ],

  owner: {  
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
  type: String,
  enum: [
    "rooms",
    "mountain",
    "beach",
    "castles",
    "camping",
    "arctic",
    "city",
    "forest",
    "lake",
  ],
  required: true
}
});


// 🧹 delete reviews when listing deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;