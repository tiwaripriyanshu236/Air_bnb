const axios = require("axios");

module.exports.getCoordinates = async (location) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${location}`;

    const res = await axios.get(url, {
        headers: {
            "User-Agent": "wanderlust-app"
        }
    });

    if (!res.data.length) {
        throw new Error("Location not found");
    }

    const { lon, lat } = res.data[0];

    return [parseFloat(lon), parseFloat(lat)];
};