const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj,owner:'69e74c4ed41dab9ed843c447'}));
    await Listing.insertMany(initData.data);
    console.log(" data was initialized");
};

main()
.then(async ()=>{
    console.log(' Connected to MongoDB');
    await initDB();
})
.catch((err)=>{
    console.error(' ERROR:', err);
});