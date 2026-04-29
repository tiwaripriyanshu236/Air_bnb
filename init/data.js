const sampleListings = [
  { title:"Delhi Apartment", location:"Delhi", country:"India", price:1500, description:"Stay in Delhi", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1597040663342-45b6af3d91a1"}, category:"city", geometry:{type:"Point",coordinates:[77.2090,28.6139]}},

  { title:"Mumbai Sea View Flat", location:"Mumbai", country:"India", price:3000, description:"Sea facing stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1567157577867-05ccb1388e66"}, category:"city", geometry:{type:"Point",coordinates:[72.8777,19.0760]}},

  { title:"Bangalore Tech Loft", location:"Bangalore", country:"India", price:2000, description:"Modern city stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1588416499018-5c6a0a5c1c16"}, category:"city", geometry:{type:"Point",coordinates:[77.5946,12.9716]}},

  { title:"Jaipur Royal Haveli", location:"Jaipur", country:"India", price:2500, description:"Royal Rajasthan stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1599661046289-e31897846e41"}, category:"castles", geometry:{type:"Point",coordinates:[75.7873,26.9124]}},

  { title:"Goa Beach Villa", location:"Goa", country:"India", price:3500, description:"Beach vibes", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}, category:"beach", geometry:{type:"Point",coordinates:[74.1240,15.2993]}},

  { title:"Manali Mountain Cabin", location:"Manali", country:"India", price:1800, description:"Snowy retreat", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"}, category:"mountain", geometry:{type:"Point",coordinates:[77.1892,32.2432]}},

  { title:"Udaipur Lake Palace Stay", location:"Udaipur", country:"India", price:4000, description:"Lake view palace", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1582719478185-6fdd8cb9c58d"}, category:"lake", geometry:{type:"Point",coordinates:[73.7125,24.5854]}},

  { title:"Kolkata Heritage Home", location:"Kolkata", country:"India", price:1700, description:"Cultural stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1524492449090-4c1c5a7c4e3b"}, category:"city", geometry:{type:"Point",coordinates:[88.3639,22.5726]}},

  { title:"Chennai Beach House", location:"Chennai", country:"India", price:2200, description:"South India coast", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1580136579312-94651dfd596d"}, category:"beach", geometry:{type:"Point",coordinates:[80.2707,13.0827]}},

  { title:"Hyderabad Luxury Stay", location:"Hyderabad", country:"India", price:2600, description:"Nawab vibes", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750"}, category:"city", geometry:{type:"Point",coordinates:[78.4867,17.3850]}},

  { title:"Pune Modern Flat", location:"Pune", country:"India", price:1800, description:"Student city stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae"}, category:"city", geometry:{type:"Point",coordinates:[73.8567,18.5204]}},

  { title:"Rishikesh River Retreat", location:"Rishikesh", country:"India", price:1500, description:"Ganga riverside", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"}, category:"mountain", geometry:{type:"Point",coordinates:[78.2676,30.0869]}},

  { title:"Shimla Hill Stay", location:"Shimla", country:"India", price:1600, description:"Hill station vibes", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"}, category:"mountain", geometry:{type:"Point",coordinates:[77.1734,31.1048]}},

  { title:"Varanasi Ghat View", location:"Varanasi", country:"India", price:1400, description:"Spiritual stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1548013146-72479768bada"}, category:"city", geometry:{type:"Point",coordinates:[82.9739,25.3176]}},

  { title:"Amritsar Golden Stay", location:"Amritsar", country:"India", price:1500, description:"Near Golden Temple", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1605534441231-7b63f9dff4b0"}, category:"city", geometry:{type:"Point",coordinates:[74.8723,31.6340]}},

  { title:"Kerala Backwater Villa", location:"Alleppey", country:"India", price:2800, description:"Backwater houseboat", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}, category:"lake", geometry:{type:"Point",coordinates:[76.3388,9.4981]}},

  { title:"Darjeeling Tea Estate Stay", location:"Darjeeling", country:"India", price:2000, description:"Tea gardens", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"}, category:"mountain", geometry:{type:"Point",coordinates:[88.2627,27.0360]}},

  { title:"Agra Taj View Hotel", location:"Agra", country:"India", price:2100, description:"Taj Mahal view", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1582719478185-6fdd8cb9c58d"}, category:"city", geometry:{type:"Point",coordinates:[78.0081,27.1767]}},

  { title:"Lucknow Nawabi House", location:"Lucknow", country:"India", price:1600, description:"Awadhi culture", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae"}, category:"city", geometry:{type:"Point",coordinates:[80.9462,26.8467]}},

  { title:"Indore Foodie Stay", location:"Indore", country:"India", price:1400, description:"Street food heaven", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1493809842364-78817add7ffb"}, category:"city", geometry:{type:"Point",coordinates:[75.8577,22.7196]}},

  { title:"Bhopal Lake View", location:"Bhopal", country:"India", price:1500, description:"City of lakes", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"}, category:"lake", geometry:{type:"Point",coordinates:[77.4126,23.2599]}},

  { title:"Chandigarh Modern Stay", location:"Chandigarh", country:"India", price:1800, description:"Planned city", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae"}, category:"city", geometry:{type:"Point",coordinates:[76.7794,30.7333]}},

  { title:"Guwahati River Stay", location:"Guwahati", country:"India", price:1700, description:"Brahmaputra view", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"}, category:"lake", geometry:{type:"Point",coordinates:[91.7362,26.1445]}},

  { title:"Mysore Palace Stay", location:"Mysore", country:"India", price:1900, description:"Royal city", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1599661046289-e31897846e41"}, category:"castles", geometry:{type:"Point",coordinates:[76.6394,12.2958]}},

  { title:"Ooty Hill Cottage", location:"Ooty", country:"India", price:1800, description:"Cool climate", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"}, category:"mountain", geometry:{type:"Point",coordinates:[76.6950,11.4064]}},

  { title:"Coorg Coffee Estate Stay", location:"Coorg", country:"India", price:2000, description:"Coffee plantations", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"}, category:"forest", geometry:{type:"Point",coordinates:[75.8069,12.3375]}},

  { title:"Andaman Beach Resort", location:"Andaman", country:"India", price:4000, description:"Island stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}, category:"beach", geometry:{type:"Point",coordinates:[92.7265,11.7401]}},

  { title:"Leh Ladakh Camp", location:"Leh", country:"India", price:3500, description:"High altitude stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"}, category:"mountain", geometry:{type:"Point",coordinates:[77.5770,34.1526]}},

  { title:"Kanyakumari Ocean View", location:"Kanyakumari", country:"India", price:2200, description:"Southern tip stay", image:{filename:"listingimage",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}, category:"beach", geometry:{type:"Point",coordinates:[77.5385,8.0883]}}
];

module.exports = { data: sampleListings };