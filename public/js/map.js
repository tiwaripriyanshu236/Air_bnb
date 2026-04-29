document.addEventListener("DOMContentLoaded", () => {

  const mapDiv = document.getElementById("map");

  // 🟢 SHOW PAGE
  if (mapDiv && typeof L !== "undefined" && window.geometryData) {

    const geometry = window.geometryData;

    if (geometry && geometry.coordinates.length > 0) {

      const coords = geometry.coordinates;

      console.log("MAP COORDS 👉", coords); // debug

      const map = L.map('map').setView([coords[1], coords[0]], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      L.marker([coords[1], coords[0]])
        .addTo(map)
        .bindPopup(`<b>${window.listingTitle}</b><br>₹ ${window.listingPrice}`)
        .openPopup();

    } else {
      console.log("❌ Coordinates empty");
    }

  } else {
    console.log("❌ Map not initialized");
  }

});