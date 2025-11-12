const properties = [
{
id: 1,
title: "Luxury 3BHK Apartment in Bandra",
type: "Apartment",
price: 250,
location: "Bandra West, Mumbai",
bedrooms: 3,
bathrooms: 2,
area: 1500,
image: "https://picsum.photos/seed/mumbai1/400/300",
featured: true,
new: true,
amenities: ["Parking", "Gym", "Security"],
description: "Premium 3BHK apartment in the heart of Bandra with sea view and modern amenities.",
},
{
id: 2,
title: "Spacious Independent House in Whitefield",
type: "House",
price: 180,
location: "Whitefield, Bangalore",
bedrooms: 4,
bathrooms: 3,
area: 2500,
image: "https://picsum.photos/seed/bangalore1/400/300",
featured: false,
new: false,
amenities: ["Parking", "Pool", "Security"],
description: "Beautiful independent house with garden and modern amenities in IT hub.",
},
{
id: 3,
title: "Premium Penthouse in Gurgaon",
type: "Penthouse",
price: 450,
location: "Sector 54, Gurgaon",
bedrooms: 4,
bathrooms: 4,
area: 3500,
image: "https://picsum.photos/seed/gurgaon1/400/300",
featured: true,
new: true,
amenities: ["Parking", "Pool", "Gym", "Security"],
description: "Luxurious penthouse with panoramic city views and premium finishes.",
},
{
id: 4,
title: "Modern 2BHK in Koregaon Park",
type: "Apartment",
price: 120,
location: "Koregaon Park, Pune",
bedrooms: 2,
bathrooms: 2,
area: 1100,
image: "https://picsum.photos/seed/pune1/400/300",
featured: false,
new: false,
amenities: ["Parking", "Gym"],
description: "Modern apartment in prime location with excellent connectivity.",
},
{
id: 5,
title: "Beachfront Villa in Goa",
type: "Villa",
price: 380,
location: "Candolim, Goa",
bedrooms: 5,
bathrooms: 4,
area: 4000,
image: "https://picsum.photos/seed/goa1/400/300",
featured: true,
new: false,
amenities: ["Parking", "Pool", "Security"],
description: "Stunning beachfront villa with private beach access and infinity pool.",
},
{
id: 6,
title: "Compact 1BHK in HSR Layout",
type: "Apartment",
price: 65,
location: "HSR Layout, Bangalore",
bedrooms: 1,
bathrooms: 1,
area: 650,
image: "https://picsum.photos/seed/bangalore2/400/300",
featured: false,
new: true,
amenities: ["Parking"],
description: "Perfect for singles or couples in prime Bangalore location.",
},
{
id: 7,
title: "Beach House in Visakhapatnam",
type: "House",
price: 185,
location: "RK Beach, Visakhapatnam",
bedrooms: 3,
bathrooms: 2,
area: 2000,
image: "https://picsum.photos/seed/vizag1/400/300",
featured: true,
new: true,
amenities: ["Parking", "Garden", "Security", "Beach Access"],
description: "Modern beach house with stunning Bay of Bengal views and private beach access.",
},
{
id: 8,
title: "Sky-High Apartment in Worli",
type: "Apartment",
price: 320,
location: "Worli, Mumbai",
bedrooms: 3,
bathrooms: 3,
area: 1800,
image: "https://picsum.photos/seed/mumbai2/400/300",
featured: false,
new: false,
amenities: ["Parking", "Gym", "Pool", "Security"],
description: "Luxury apartment with breathtaking sea views from higher floors.",
},
{
id: 9,
title: "Garden Villa in Hyderabad",
type: "Villa",
price: 280,
location: "Jubilee Hills, Hyderabad",
bedrooms: 4,
bathrooms: 3,
area: 3200,
image: "https://picsum.photos/seed/hyderabad1/400/300",
featured: false,
new: true,
amenities: ["Parking", "Pool", "Gym", "Security"],
description: "Beautiful villa with landscaped garden and modern amenities.",
},
{
id: 10,
title: "Contemporary Apartment in Noida",
type: "Apartment",
price: 95,
location: "Sector 137, Noida",
bedrooms: 2,
bathrooms: 2,
area: 1200,
image: "https://picsum.photos/seed/noida1/400/300",
featured: false,
new: false,
amenities: ["Parking", "Gym", "Security"],
description: "Modern apartment with excellent connectivity to Delhi and NCR.",
}
];

const agents = [
{
id: 1,
name: "Rajesh Sharma",
experience: "15 years",
specialty: "Luxury Properties",
image: "https://picsum.photos/seed/agent1/200/200",
phone: "+91 98765 43210",
email: "rajesh@propertyhub.in",
rating: 4.8,
properties: 125,
},
{
id: 2,
name: "Priya Nair",
experience: "10 years",
specialty: "Commercial Properties",
image: "https://picsum.photos/seed/agent2/200/200",
phone: "+91 98765 43211",
email: "priya@propertyhub.in",
rating: 4.7,
properties: 98,
},
{
id: 3,
name: "Amit Patel",
experience: "12 years",
specialty: "Residential Properties",
image: "https://picsum.photos/seed/agent3/200/200",
phone: "+91 98765 43212",
email: "amit@propertyhub.in",
rating: 4.9,
properties: 156,
},
{
id: 4,
name: "Sneha Reddy",
experience: "8 years",
specialty: "Investment Properties",
image: "https://picsum.photos/seed/agent4/200/200",
phone: "+91 98765 43213",
email: "sneha@propertyhub.in",
rating: 4.6,
properties: 87,
},
{
id: 5,
name: "Vikram Singh",
experience: "20 years",
specialty: "Premium Villas",
image: "https://picsum.photos/seed/agent5/200/200",
phone: "+91 98765 43214",
email: "vikram@propertyhub.in",
rating: 4.9,
properties: 203,
},
{
id: 6,
name: "Anjali Gupta",
experience: "6 years",
specialty: "First-time Buyers",
image: "https://picsum.photos/seed/agent6/200/200",
phone: "+91 98765 43215",
email: "anjali@propertyhub.in",
rating: 4.7,
properties: 64,
},
];

let filteredProperties = [];
let buyFilteredProperties = [];
let rentFilteredProperties = [];
let favorites = new Set();
let savedSearches = [];
let viewMode = "grid";
let buyViewMode = "grid";
let rentViewMode = "grid";
let selectedBedrooms = "any";
let isDarkMode = false;
let currentUser = null;
let currentPage = "home-section";
let homePageOffset = 0;
let buyPageOffset = 0;
let rentPageOffset = 0;
const propertiesPerPage = 10;
let isLoading = false;

document.addEventListener("DOMContentLoaded", () => {
initializePages();
updateFavoriteCount();
loadUserData();
renderAgents();
});

function initializePages() {
filteredProperties = properties.slice(0, propertiesPerPage);
renderProperties();

buyFilteredProperties = properties
.filter((p) => p.price > 50)
.slice(0, propertiesPerPage);
renderBuyProperties();

rentFilteredProperties = properties
.filter((p) => p.price < 150)
.slice(0, propertiesPerPage);
renderRentProperties();
}

function loadUserData() {
const userData = localStorage.getItem("propertyHubUser");
if (userData) {
currentUser = JSON.parse(userData);
updateUserUI();

if (currentUser.favorites) {
favorites = new Set(currentUser.favorites);
updateFavoriteCount();
}

if (currentUser.savedSearches) {
savedSearches = currentUser.savedSearches;
renderSavedSearches();
}
}
}

function updateUserUI() {
if (currentUser) {
document.getElementById("authBtn").innerHTML =
'<i class="fas fa-user-circle mr-2"></i>Profile';
document.getElementById("authBtn").onclick = () => showPage('profile-section');
document.getElementById("profileBtn").classList.remove('hidden');
document.getElementById("userName").textContent = currentUser.name;
document.getElementById("userEmail").textContent = currentUser.email;
} else {
document.getElementById("authBtn").innerHTML =
'<i class="fas fa-sign-in-alt mr-2"></i>Sign In';
document.getElementById("authBtn").onclick = () => showPage('login-section');
document.getElementById("profileBtn").classList.add('hidden');
document.getElementById("userName").textContent = "Guest User";
document.getElementById("userEmail").textContent = "Please sign in to continue";
}
}

function showPage(pageName) {
document.querySelectorAll(".page").forEach((page) => {
page.classList.remove("active");
});
document.getElementById(pageName).classList.add("active");
currentPage = pageName;

const header = document.getElementById("header");
if (pageName === "login-section" || pageName === "signup-section") {
header.classList.add("compact");
} else {
header.classList.remove("compact");
}

window.scrollTo({ top: 0, behavior: "smooth" });

if (pageName === "buy-section") {
loadBuyProperties();
} else if (pageName === "rent-section") {
loadRentProperties();
} else if (pageName === "wishlist-section") {
loadWishlist();
}
}

function renderProperties() {
const grid = document.getElementById("propertyGrid");
if (!grid) return;

grid.innerHTML = "";

filteredProperties.forEach((property, index) => {
const card = createPropertyCard(property);
setTimeout(() => {
grid.appendChild(card);
card.classList.add("fade-in");
}, index * 100);
});

document.getElementById("resultCount").textContent =
filteredProperties.length;

const loadMoreContainer = document.getElementById("loadMoreContainer");
if (homePageOffset + propertiesPerPage >= properties.length) {
loadMoreContainer.style.display = "none";
} else {
loadMoreContainer.style.display = "flex";
}
}

function createPropertyCard(property) {
const card = document.createElement("div");
card.className = "card bg-primary rounded-xl shadow-lg overflow-hidden cursor-pointer";

const isFavorite = favorites.has(property.id);

card.innerHTML = `
<div class="relative overflow-hidden img-container">
<img src="${property.image}" alt="${property.title}" class="img">
<div class="absolute top-4 left-4 flex gap-2">
${property.featured
? '<span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Featured</span>'
: ""
}
${property.new
? '<span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold badge">New</span>'
: ""
}
</div>
<div class="absolute top-4 right-4">
<div class="location">
<i class="fas fa-map-marker-alt"></i>
<span class="text-xs">${property.location.split(",")[0]}</span>
</div>
</div>
<button onclick="toggleFavorite(event, ${property.id})" class="absolute bottom-4 right-4 bg-primary rounded-full p-3 shadow-lg hover:shadow-xl transition transform hover:scale-110 border border-gray-200">
<i class="fas fa-heart text-xl ${isFavorite
? "text-red-500"
: "text-gray-400"
}"></i>
</button>
</div>
<div class="p-5">
<div class="flex justify-between items-start mb-3">
<h3 class="text-lg font-semibold text-primary hover:text-indigo-600 transition">${property.title}</h3>
<div class="price">
₹${property.price}L
</div>
</div>
<p class="text-secondary text-sm mb-4 flex items-center">
<i class="fas fa-map-marker-alt mr-2 text-indigo-500"></i>${property.location}
</p>
<div class="flex justify-between text-sm text-secondary mb-4">
<span class="flex items-center"><i class="fas fa-bed mr-2 text-indigo-500"></i>${property.bedrooms} Beds</span>
<span class="flex items-center"><i class="fas fa-ruler-combined mr-2 text-indigo-500"></i>${property.area} sqft</span>
</div>
<div class="flex flex-wrap gap-2 mb-4">
${property.amenities
.slice(0, 3)
.map(
(amenity) =>
`<span class="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
<i class="fas fa-check-circle mr-1"></i>${amenity}
</span>`
)
.join("")}
</div>
<div class="flex gap-2">
<button onclick="showPropertyDetails(${property.id})" class="flex-1 btn-primary py-3 rounded-lg hover:shadow-xl transition transform hover:scale-105 font-semibold">
<i class="fas fa-eye mr-2"></i>View Details
</button>
</div>
</div>
`;

return card;
}

function loadMoreProperties() {
if (
isLoading ||
homePageOffset + propertiesPerPage >= properties.length
)
return;

isLoading = true;
const loadingIndicator = document.getElementById("propertyLoading");
loadingIndicator.classList.remove("hidden");

setTimeout(() => {
homePageOffset += propertiesPerPage;
const newProperties = properties.slice(
homePageOffset,
homePageOffset + propertiesPerPage
);
filteredProperties = [...filteredProperties, ...newProperties];
renderProperties();

loadingIndicator.classList.add("hidden");
isLoading = false;

if (homePageOffset + propertiesPerPage >= properties.length) {
showNotification("All properties loaded");
}
}, 1000);
}

function renderBuyProperties() {
const grid = document.getElementById("buyPropertyGrid");
if (!grid) return;

grid.innerHTML = "";

buyFilteredProperties.forEach((property, index) => {
const card = createPropertyCard(property);
setTimeout(() => {
grid.appendChild(card);
card.classList.add("fade-in");
}, index * 100);
});

document.getElementById("buyResultCount").textContent =
buyFilteredProperties.length;

const loadMoreContainer = document.getElementById(
"buyLoadMoreContainer"
);
if (
buyPageOffset + propertiesPerPage >=
properties.filter((p) => p.price > 50).length
) {
loadMoreContainer.style.display = "none";
} else {
loadMoreContainer.style.display = "flex";
}
}

function loadMoreBuyProperties() {
if (
isLoading ||
buyPageOffset + propertiesPerPage >=
properties.filter((p) => p.price > 50).length
)
return;

isLoading = true;
const loadingIndicator = document.getElementById("buyPropertyLoading");
loadingIndicator.classList.remove("hidden");

setTimeout(() => {
buyPageOffset += propertiesPerPage;
const allBuyProperties = properties.filter((p) => p.price > 50);
const newProperties = allBuyProperties.slice(
buyPageOffset,
buyPageOffset + propertiesPerPage
);
buyFilteredProperties = [...buyFilteredProperties, ...newProperties];
renderBuyProperties();

loadingIndicator.classList.add("hidden");
isLoading = false;

if (buyPageOffset + propertiesPerPage >= allBuyProperties.length) {
showNotification("All buy properties loaded");
}
}, 1000);
}

function renderRentProperties() {
const grid = document.getElementById("rentPropertyGrid");
if (!grid) return;

grid.innerHTML = "";

rentFilteredProperties.forEach((property, index) => {
const card = createPropertyCard(property);
setTimeout(() => {
grid.appendChild(card);
card.classList.add("fade-in");
}, index * 100);
});

document.getElementById("rentResultCount").textContent =
rentFilteredProperties.length;

const loadMoreContainer = document.getElementById(
"rentLoadMoreContainer"
);
if (
rentPageOffset + propertiesPerPage >=
properties.filter((p) => p.price < 150).length
) {
loadMoreContainer.style.display = "none";
} else {
loadMoreContainer.style.display = "flex";
}
}

function loadMoreRentProperties() {
if (
isLoading ||
rentPageOffset + propertiesPerPage >=
properties.filter((p) => p.price < 150).length
)
return;

isLoading = true;
const loadingIndicator = document.getElementById("rentPropertyLoading");
loadingIndicator.classList.remove("hidden");

setTimeout(() => {
rentPageOffset += propertiesPerPage;
const allRentProperties = properties.filter((p) => p.price < 150);
const newProperties = allRentProperties.slice(
rentPageOffset,
rentPageOffset + propertiesPerPage
);
rentFilteredProperties = [
...rentFilteredProperties,
...newProperties,
];
renderRentProperties();

loadingIndicator.classList.add("hidden");
isLoading = false;

if (rentPageOffset + propertiesPerPage >= allRentProperties.length) {
showNotification("All rent properties loaded");
}
}, 1000);
}

function loadBuyProperties() {
buyPageOffset = 0;
const allBuyProperties = properties.filter((p) => p.price > 50);
buyFilteredProperties = allBuyProperties.slice(0, propertiesPerPage);
renderBuyProperties();
}

function loadRentProperties() {
rentPageOffset = 0;
const allRentProperties = properties.filter((p) => p.price < 150);
rentFilteredProperties = allRentProperties.slice(0, propertiesPerPage);
renderRentProperties();
}

function toggleFavorite(event, propertyId) {
event.stopPropagation();
if (!currentUser) {
showNotification("Please sign in to add properties to wishlist");
showPage("login-section");
return;
}

if (favorites.has(propertyId)) {
favorites.delete(propertyId);
showNotification("Property removed from wishlist");
} else {
favorites.add(propertyId);
showNotification("Property added to wishlist");
}

updateFavoriteCount();
saveUserData();

if (currentPage === "home-section") {
renderProperties();
} else if (currentPage === "buy-section") {
renderBuyProperties();
} else if (currentPage === "rent-section") {
renderRentProperties();
} else if (currentPage === "wishlist-section") {
loadWishlist();
}
}

function updateFavoriteCount() {
document.getElementById("favCount").textContent = favorites.size;
}

function showPropertyDetails(propertyId) {
const property = properties.find((p) => p.id === propertyId);
if (!property) return;

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

const isFavorite = favorites.has(property.id);

modalContent.innerHTML = `
<div class="relative">
<img src="${property.image}" alt="${property.title}" class="w-full h-96 object-cover">
<button onclick="closeModal()" class="absolute top-4 right-4 bg-primary rounded-full p-3 shadow-lg hover:shadow-xl transition transform hover:scale-110 border border-gray-200">
<i class="fas fa-times text-gray-600"></i>
</button>
<button onclick="toggleFavorite(event, ${property.id})" class="absolute top-4 right-20 bg-primary rounded-full p-3 shadow-lg hover:shadow-xl transition transform hover:scale-110 border border-gray-200">
<i class="fas fa-heart text-2xl ${isFavorite
? "text-red-500"
: "text-gray-400"
}"></i>
</button>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<h2 class="text-2xl font-bold text-primary mb-2">${property.title}</h2>
<p class="text-secondary flex items-center">
<i class="fas fa-map-marker-alt mr-2 text-indigo-500"></i>${property.location}
</p>
</div>
<div class="text-right">
<div class="price text-2xl">
₹${property.price}L
</div>
<p class="text-secondary mt-1">₹${Math.round(
(property.price * 100000) / property.area
).toLocaleString()}/sqft</p>
</div>
</div>

<div class="flex border-b mb-6">
<button onclick="showTab('overview')" class="tab-btn px-4 py-2 font-medium active">Overview</button>
<button onclick="showTab('amenities')" class="tab-btn px-4 py-2 font-medium">Amenities</button>
<button onclick="showTab('calculator')" class="tab-btn px-4 py-2 font-medium">EMI Calculator</button>
</div>

<div id="tab-overview" class="tab-content active">
<div class="grid grid-cols-3 gap-4 mb-6">
<div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 text-center transform hover:scale-105 transition">
<i class="fas fa-bed text-3xl text-indigo-600 mb-2"></i>
<p class="font-semibold text-primary">${property.bedrooms} Bedrooms</p>
</div>
<div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 text-center transform hover:scale-105 transition">
<i class="fas fa-bath text-3xl text-indigo-600 mb-2"></i>
<p class="font-semibold text-primary">${property.bathrooms} Bathrooms</p>
</div>
<div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 text-center transform hover:scale-105 transition">
<i class="fas fa-ruler-combined text-3xl text-indigo-600 mb-2"></i>
<p class="font-semibold text-primary">${property.area} sqft</p>
</div>
</div>

<div class="mb-6">
<h3 class="text-lg font-semibold mb-2 text-primary">Description</h3>
<p class="text-secondary">${property.description}</p>
</div>
</div>

<div id="tab-amenities" class="tab-content">
<h3 class="text-lg font-semibold mb-4 text-primary">Amenities</h3>
<div class="grid grid-cols-2 gap-4">
${property.amenities
.map(
(amenity) =>
`<div class="flex items-center p-3 bg-secondary rounded-lg">
<i class="fas fa-check-circle text-green-500 mr-3"></i>
<span class="text-primary">${amenity}</span>
</div>`
)
.join("")}
</div>
</div>

<div id="tab-calculator" class="tab-content">
<h3 class="text-lg font-semibold mb-4 text-primary">EMI Calculator</h3>
<div class="space-y-4">
<div>
<label class="block text-secondary font-medium mb-2">Property Price (₹)</label>
<input type="number" id="calcPriceModal" class="calc-input input" value="${property.price * 100000}">
</div>
<div>
<label class="block text-secondary font-medium mb-2">Down Payment (%)</label>
<input type="number" id="calcDownPaymentModal" class="calc-input input" value="20">
</div>
<div>
<label class="block text-secondary font-medium mb-2">Interest Rate (%)</label>
<input type="number" id="calcInterestModal" class="calc-input input" value="8.5">
</div>
<div>
<label class="block text-secondary font-medium mb-2">Loan Term (Years)</label>
<input type="number" id="calcTermModal" class="calc-input input" value="20">
</div>
<button onclick="calculateMortgageModal()" class="w-full btn-primary py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105 font-semibold">
Calculate EMI
</button>
<div id="calcResultModal" class="hidden mt-6 p-4 bg-indigo-50 rounded-lg">
<h3 class="text-lg font-semibold mb-2 text-primary">Monthly EMI: <span id="monthlyEMIModal" class="text-indigo-600"></span></h3>
<p class="text-secondary">Total Interest: <span id="totalInterestModal"></span></p>
<p class="text-secondary">Total Payment: <span id="totalPaymentModal"></span></p>
</div>
</div>
</div>

<div class="flex gap-4 mt-6">
<button onclick="scheduleTour(${property.id})" class="flex-1 btn-primary py-3 rounded-lg hover:shadow-xl transition transform hover:scale-105 font-semibold">
<i class="fas fa-calendar mr-2"></i>Schedule Tour
</button>
<button onclick="contactAgent(${property.id})" class="flex-1 btn-secondary py-3 rounded-lg hover:bg-gray-300 transition transform hover:scale-105 font-semibold">
<i class="fas fa-phone mr-2"></i>Contact Agent
</button>
</div>
</div>
`;

modal.classList.add("active");
document.body.style.overflow = "hidden";
}

function showTab(tabName) {
document.querySelectorAll(".tab-content").forEach((tab) => {
tab.classList.remove("active");
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
btn.classList.remove("active");
});

document.getElementById(`tab-${tabName}`).classList.add("active");
event.target.classList.add("active");
}

function calculateMortgageModal() {
const price = parseFloat(
document.getElementById("calcPriceModal").value
);
const downPayment = parseFloat(
document.getElementById("calcDownPaymentModal").value
);
const interest = parseFloat(
document.getElementById("calcInterestModal").value
);
const term = parseFloat(document.getElementById("calcTermModal").value);

const loanAmount = price - (price * downPayment) / 100;
const monthlyInterest = interest / 12 / 100;
const numPayments = term * 12;

const emi =
(loanAmount *
monthlyInterest *
Math.pow(1 + monthlyInterest, numPayments)) /
(Math.pow(1 + monthlyInterest, numPayments) - 1);
const totalPayment = emi * numPayments;
const totalInterest = totalPayment - loanAmount;

document.getElementById("monthlyEMIModal").textContent =
"₹" + emi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("totalInterestModal").textContent =
"₹" + totalInterest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("totalPaymentModal").textContent =
"₹" + totalPayment.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("calcResultModal").classList.remove("hidden");
}

function closeModal() {
document.getElementById("modal").classList.remove("active");
document.body.style.overflow = "auto";
}

function scheduleTour(propertyId) {
if (!currentUser) {
showNotification("Please sign in to schedule a tour");
showPage("login-section");
return;
}
showNotification(
"Tour scheduled successfully! Agent will contact you soon."
);
closeModal();
}

function contactAgent(propertyId) {
showNotification("Agent contact details sent to your email");
closeModal();
}

function performSearch() {
const searchTerm = document
.getElementById("searchInput")
.value.toLowerCase();

if (searchTerm) {
const allProperties = properties.filter(
(property) =>
property.title.toLowerCase().includes(searchTerm) ||
property.location.toLowerCase().includes(searchTerm) ||
property.type.toLowerCase().includes(searchTerm) ||
property.description.toLowerCase().includes(searchTerm)
);

homePageOffset = 0;
filteredProperties = allProperties.slice(0, propertiesPerPage);
renderProperties();
} else {
homePageOffset = 0;
filteredProperties = properties.slice(0, propertiesPerPage);
renderProperties();
}
}

function handleSearchInput(event) {
const searchTerm = event.target.value.toLowerCase();
const suggestionsContainer =
document.getElementById("searchSuggestions");

if (searchTerm.length > 2) {
const suggestions = properties
.filter(
(property) =>
property.title.toLowerCase().includes(searchTerm) ||
property.location.toLowerCase().includes(searchTerm) ||
property.type.toLowerCase().includes(searchTerm)
)
.slice(0, 5);

if (suggestions.length > 0) {
suggestionsContainer.innerHTML = suggestions
.map(
(property) => `
<div class="suggestion px-4 py-2 hover:bg-gray-100 cursor-pointer" onclick="selectSuggestion('${property.title}')">
<div class="font-medium text-primary">${property.title}</div>
<div class="text-sm text-secondary">${property.location}</div>
</div>
`
)
.join("");
suggestionsContainer.classList.remove("hidden");
} else {
suggestionsContainer.innerHTML =
'<div class="px-4 py-2 text-secondary">No results found</div>';
suggestionsContainer.classList.remove("hidden");
}
} else {
suggestionsContainer.classList.add("hidden");
}

if (event.key === "Enter") {
performSearch();
suggestionsContainer.classList.add("hidden");
}
}

function performBuySearch() {
const searchTerm = document
.getElementById("buySearchInput")
.value.toLowerCase();

if (searchTerm) {
const allBuyProperties = properties.filter(
(property) =>
property.price > 50 &&
(property.title.toLowerCase().includes(searchTerm) ||
property.location.toLowerCase().includes(searchTerm) ||
property.type.toLowerCase().includes(searchTerm) ||
property.description.toLowerCase().includes(searchTerm))
);

buyPageOffset = 0;
buyFilteredProperties = allBuyProperties.slice(0, propertiesPerPage);
renderBuyProperties();
} else {
loadBuyProperties();
}
}

function handleBuySearchInput(event) {
const searchTerm = event.target.value.toLowerCase();
const suggestionsContainer = document.getElementById(
"buySearchSuggestions"
);

if (searchTerm.length > 2) {
const suggestions = properties
.filter(
(property) =>
property.price > 50 &&
(property.title.toLowerCase().includes(searchTerm) ||
property.location.toLowerCase().includes(searchTerm) ||
property.type.toLowerCase().includes(searchTerm))
)
.slice(0, 5);

if (suggestions.length > 0) {
suggestionsContainer.innerHTML = suggestions
.map(
(property) => `
<div class="suggestion px-4 py-2 hover:bg-gray-100 cursor-pointer" onclick="selectBuySuggestion('${property.title}')">
<div class="font-medium text-primary">${property.title}</div>
<div class="text-sm text-secondary">${property.location}</div>
</div>
`
)
.join("");
suggestionsContainer.classList.remove("hidden");
} else {
suggestionsContainer.innerHTML =
'<div class="px-4 py-2 text-secondary">No results found</div>';
suggestionsContainer.classList.remove("hidden");
}
} else {
suggestionsContainer.classList.add("hidden");
}

if (event.key === "Enter") {
performBuySearch();
suggestionsContainer.classList.add("hidden");
}
}

function selectBuySuggestion(title) {
document.getElementById("buySearchInput").value = title;
document.getElementById("buySearchSuggestions").classList.add("hidden");
performBuySearch();
}

function performRentSearch() {
const searchTerm = document
.getElementById("rentSearchInput")
.value.toLowerCase();

if (searchTerm) {
const allRentProperties = properties.filter(
(property) =>
property.price < 150 &&
(property.title.toLowerCase().includes(searchTerm) ||
property.location.toLowerCase().includes(searchTerm) ||
property.type.toLowerCase().includes(searchTerm) ||
property.description.toLowerCase().includes(searchTerm))
);

rentPageOffset = 0;
rentFilteredProperties = allRentProperties.slice(
0,
propertiesPerPage
);
renderRentProperties();
} else {
loadRentProperties();
}
}

function handleRentSearchInput(event) {
const searchTerm = event.target.value.toLowerCase();
const suggestionsContainer = document.getElementById(
"rentSearchSuggestions"
);

if (searchTerm.length > 2) {
const suggestions = properties
.filter(
(property) =>
property.price < 150 &&
(property.title.toLowerCase().includes(searchTerm) ||
property.location.toLowerCase().includes(searchTerm) ||
property.type.toLowerCase().includes(searchTerm))
)
.slice(0, 5);

if (suggestions.length > 0) {
suggestionsContainer.innerHTML = suggestions
.map(
(property) => `
<div class="suggestion px-4 py-2 hover:bg-gray-100 cursor-pointer" onclick="selectRentSuggestion('${property.title}')">
<div class="font-medium text-primary">${property.title}</div>
<div class="text-sm text-secondary">${property.location}</div>
</div>
`
)
.join("");
suggestionsContainer.classList.remove("hidden");
} else {
suggestionsContainer.innerHTML =
'<div class="px-4 py-2 text-secondary">No results found</div>';
suggestionsContainer.classList.remove("hidden");
}
} else {
suggestionsContainer.classList.add("hidden");
}

if (event.key === "Enter") {
performRentSearch();
suggestionsContainer.classList.add("hidden");
}
}

function selectRentSuggestion(title) {
document.getElementById("rentSearchInput").value = title;
document
.getElementById("rentSearchSuggestions")
.classList.add("hidden");
performRentSearch();
}

function selectSuggestion(title) {
document.getElementById("searchInput").value = title;
document.getElementById("searchSuggestions").classList.add("hidden");
performSearch();
}

function filterByType(type) {
const allProperties = properties.filter(
(property) => property.type === type
);
homePageOffset = 0;
filteredProperties = allProperties.slice(0, propertiesPerPage);
renderProperties();
showNotification(`Showing ${type} properties`);
}

function toggleSidebar() {
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

sidebar.classList.toggle("active");
overlay.classList.toggle("active");
}

function updatePriceRange() {
const minPrice = document.getElementById("minPrice").value;
const maxPrice = document.getElementById("maxPrice").value;

document.getElementById("minPriceValue").textContent = minPrice;
document.getElementById("maxPriceValue").textContent = maxPrice;
}

function toggleBedroom(button, value) {
document.querySelectorAll(".bedroom-btn").forEach((btn) => {
btn.classList.remove("bg-indigo-600", "text-white");
});
button.classList.add("bg-indigo-600", "text-white");
selectedBedrooms = value;
}

function applyFilters() {
const selectedTypes = Array.from(
document.querySelectorAll(".filter-check:checked")
).map((cb) => cb.value);
const minPrice = parseInt(document.getElementById("minPrice").value);
const maxPrice = parseInt(document.getElementById("maxPrice").value);
const selectedAmenities = Array.from(
document.querySelectorAll(".amenity-checkbox:checked")
).map((cb) => cb.value);

let allProperties = properties;

if (currentPage === "buy-section") {
allProperties = allProperties.filter((p) => p.price > 50);
} else if (currentPage === "rent-section") {
allProperties = allProperties.filter((p) => p.price < 150);
}

const filtered = allProperties.filter((property) => {
if (
selectedTypes.length > 0 &&
!selectedTypes.includes(property.type)
) {
return false;
}

if (property.price < minPrice || property.price > maxPrice) {
return false;
}

if (
selectedBedrooms !== "any" &&
property.bedrooms < parseInt(selectedBedrooms)
) {
return false;
}

if (selectedAmenities.length > 0) {
const hasAllAmenities = selectedAmenities.every((amenity) =>
property.amenities.includes(amenity)
);
if (!hasAllAmenities) {
return false;
}
}

return true;
});

if (currentPage === "home-section") {
homePageOffset = 0;
filteredProperties = filtered.slice(0, propertiesPerPage);
renderProperties();
} else if (currentPage === "buy-section") {
buyPageOffset = 0;
buyFilteredProperties = filtered.slice(0, propertiesPerPage);
renderBuyProperties();
} else if (currentPage === "rent-section") {
rentPageOffset = 0;
rentFilteredProperties = filtered.slice(0, propertiesPerPage);
renderRentProperties();
}

toggleSidebar();
showNotification("Filters applied successfully");
}

function resetFilters() {
document
.querySelectorAll(".filter-check")
.forEach((cb) => (cb.checked = false));
document.getElementById("minPrice").value = 0;
document.getElementById("maxPrice").value = 500;
updatePriceRange();
document.querySelectorAll(".bedroom-btn").forEach((btn) => {
btn.classList.remove("bg-indigo-600", "text-white");
});
document
.querySelectorAll(".amenity-checkbox")
.forEach((cb) => (cb.checked = false));
selectedBedrooms = "any";

if (currentPage === "home-section") {
homePageOffset = 0;
filteredProperties = properties.slice(0, propertiesPerPage);
renderProperties();
} else if (currentPage === "buy-section") {
loadBuyProperties();
} else if (currentPage === "rent-section") {
loadRentProperties();
}

toggleSidebar();
showNotification("Filters reset successfully");
}

function sortProperties() {
const sortBy = document.getElementById("sortSelect").value;

switch (sortBy) {
case "price-low":
filteredProperties.sort((a, b) => a.price - b.price);
break;
case "price-high":
filteredProperties.sort((a, b) => b.price - a.price);
break;
case "newest":
filteredProperties.sort((a, b) => b.new - a.new);
break;
case "bedrooms":
filteredProperties.sort((a, b) => b.bedrooms - a.bedrooms);
break;
case "featured":
default:
filteredProperties.sort((a, b) => b.featured - a.featured);
}

renderProperties();
}

function sortBuyProperties() {
const sortBy = document.getElementById("buySortSelect").value;

switch (sortBy) {
case "price-low":
buyFilteredProperties.sort((a, b) => a.price - b.price);
break;
case "price-high":
buyFilteredProperties.sort((a, b) => b.price - a.price);
break;
case "newest":
buyFilteredProperties.sort((a, b) => b.new - a.new);
break;
case "bedrooms":
buyFilteredProperties.sort((a, b) => b.bedrooms - a.bedrooms);
break;
case "featured":
default:
buyFilteredProperties.sort((a, b) => b.featured - a.featured);
}

renderBuyProperties();
}

function sortRentProperties() {
const sortBy = document.getElementById("rentSortSelect").value;

switch (sortBy) {
case "price-low":
rentFilteredProperties.sort((a, b) => a.price - b.price);
break;
case "price-high":
rentFilteredProperties.sort((a, b) => b.price - a.price);
break;
case "newest":
rentFilteredProperties.sort((a, b) => b.new - a.new);
break;
case "bedrooms":
rentFilteredProperties.sort((a, b) => b.bedrooms - a.bedrooms);
break;
case "featured":
default:
rentFilteredProperties.sort((a, b) => b.featured - a.featured);
}

renderRentProperties();
}

function setViewMode(mode) {
viewMode = mode;
const grid = document.getElementById("propertyGrid");
const gridBtn = document.getElementById("gridViewBtn");
const listBtn = document.getElementById("listViewBtn");

if (mode === "grid") {
grid.className =
"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6";
gridBtn.className = "px-3 py-2 bg-indigo-600 text-white";
listBtn.className = "px-3 py-2 bg-primary text-secondary hover:bg-gray-50";
} else {
grid.className = "space-y-4";
gridBtn.className = "px-3 py-2 bg-primary text-secondary hover:bg-gray-50";
listBtn.className = "px-3 py-2 bg-indigo-600 text-white";
}

renderProperties();
}

function setBuyViewMode(mode) {
buyViewMode = mode;
const grid = document.getElementById("buyPropertyGrid");
const gridBtn = document.getElementById("buyGridViewBtn");
const listBtn = document.getElementById("buyListViewBtn");

if (mode === "grid") {
grid.className =
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
gridBtn.className = "px-3 py-2 bg-indigo-600 text-white";
listBtn.className = "px-3 py-2 bg-primary text-secondary hover:bg-gray-50";
} else {
grid.className = "space-y-4";
gridBtn.className = "px-3 py-2 bg-primary text-secondary hover:bg-gray-50";
listBtn.className = "px-3 py-2 bg-indigo-600 text-white";
}

renderBuyProperties();
}

function setRentViewMode(mode) {
rentViewMode = mode;
const grid = document.getElementById("rentPropertyGrid");
const gridBtn = document.getElementById("rentGridViewBtn");
const listBtn = document.getElementById("rentListViewBtn");

if (mode === "grid") {
grid.className =
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
gridBtn.className = "px-3 py-2 bg-indigo-600 text-white";
listBtn.className = "px-3 py-2 bg-primary text-secondary hover:bg-gray-50";
} else {
grid.className = "space-y-4";
gridBtn.className = "px-3 py-2 bg-primary text-secondary hover:bg-gray-50";
listBtn.className = "px-3 py-2 bg-indigo-600 text-white";
}

renderRentProperties();
}

function toggleTheme() {
isDarkMode = !isDarkMode;
document.body.classList.toggle("dark");
const icon = document.getElementById("themeIcon");
icon.className = isDarkMode
? "fas fa-sun text-2xl"
: "fas fa-moon text-2xl";
localStorage.setItem("darkMode", isDarkMode);
}

function handleLogin(event) {
event.preventDefault();

document.getElementById("loginEmailError").textContent = "";
document.getElementById("loginPasswordError").textContent = "";
document.getElementById("loginSuccess").textContent = "";

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

let isValid = true;

if (!email) {
document.getElementById("loginEmailError").textContent =
"Please enter your email";
isValid = false;
} else if (!validateEmail(email)) {
document.getElementById("loginEmailError").textContent =
"Please enter a valid email";
isValid = false;
}

if (!password) {
document.getElementById("loginPasswordError").textContent =
"Please enter your password";
isValid = false;
} else if (password.length < 6) {
document.getElementById("loginPasswordError").textContent =
"Password must be at least 6 characters";
isValid = false;
}

if (!isValid) return;

const loginButton = document.getElementById("loginButton");
loginButton.disabled = true;
loginButton.textContent = "Signing In...";

setTimeout(() => {
currentUser = {
name:
email.split("@")[0].charAt(0).toUpperCase() +
email.split("@")[0].slice(1),
email: email,
favorites: Array.from(favorites),
savedSearches: savedSearches,
};

localStorage.setItem("propertyHubUser", JSON.stringify(currentUser));

updateUserUI();

loginButton.disabled = false;
loginButton.textContent = "Sign In";

document.getElementById("loginSuccess").textContent =
"Login successful! Redirecting...";

setTimeout(() => {
showPage("home-section");
showNotification("Welcome back, " + currentUser.name + "!");
}, 1500);
}, 1000);
}

function handleSignup(event) {
event.preventDefault();

document.getElementById("signupNameError").textContent = "";
document.getElementById("signupEmailError").textContent = "";
document.getElementById("signupPhoneError").textContent = "";
document.getElementById("signupPasswordError").textContent = "";
document.getElementById("signupConfirmPasswordError").textContent = "";
document.getElementById("signupSuccess").textContent = "";

const name = document.getElementById("signupName").value;
const email = document.getElementById("signupEmail").value;
const phone = document.getElementById("signupPhone").value;
const password = document.getElementById("signupPassword").value;
const confirmPassword = document.getElementById(
"signupConfirmPassword"
).value;

let isValid = true;

if (!name) {
document.getElementById("signupNameError").textContent =
"Please enter your name";
isValid = false;
}

if (!email) {
document.getElementById("signupEmailError").textContent =
"Please enter your email";
isValid = false;
} else if (!validateEmail(email)) {
document.getElementById("signupEmailError").textContent =
"Please enter a valid email";
isValid = false;
}

if (!phone) {
document.getElementById("signupPhoneError").textContent =
"Please enter your phone number";
isValid = false;
} else if (!validatePhone(phone)) {
document.getElementById("signupPhoneError").textContent =
"Please enter a valid phone number";
isValid = false;
}

if (!password) {
document.getElementById("signupPasswordError").textContent =
"Please enter a password";
isValid = false;
} else if (password.length < 6) {
document.getElementById("signupPasswordError").textContent =
"Password must be at least 6 characters";
isValid = false;
}

if (!confirmPassword) {
document.getElementById("signupConfirmPasswordError").textContent =
"Please confirm your password";
isValid = false;
} else if (password !== confirmPassword) {
document.getElementById("signupConfirmPasswordError").textContent =
"Passwords do not match";
isValid = false;
}

if (!isValid) return;

const signupButton = document.getElementById("signupButton");
signupButton.disabled = true;
signupButton.textContent = "Creating Account...";

setTimeout(() => {
currentUser = {
name: name,
email: email,
phone: phone,
favorites: [],
savedSearches: [],
};

localStorage.setItem("propertyHubUser", JSON.stringify(currentUser));

updateUserUI();

signupButton.disabled = false;
signupButton.textContent = "Create Account";

document.getElementById("signupSuccess").textContent =
"Account created successfully! Redirecting...";

setTimeout(() => {
showPage("home-section");
showNotification(
"Welcome to PropertyHub, " + currentUser.name + "!"
);
}, 1500);
}, 1000);
}

function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}

function validatePhone(phone) {
const re = /^[0-9]{10}$/;
return re.test(phone.replace(/\D/g, ""));
}

function socialLogin(provider) {
showNotification(`Signing in with ${provider}...`);

setTimeout(() => {
currentUser = {
name: `${provider.charAt(0).toUpperCase() + provider.slice(1)
} User`,
email: `user@${provider}.com`,
favorites: [],
savedSearches: [],
};

localStorage.setItem("propertyHubUser", JSON.stringify(currentUser));

updateUserUI();

showPage("home-section");
showNotification(`Welcome back, ${currentUser.name}!`);
}, 1000);
}

function handleSignOut() {
currentUser = null;
localStorage.removeItem("propertyHubUser");
updateUserUI();
showNotification("Signed out successfully!");
showPage("home-section");
}

function saveUserData() {
if (currentUser) {
const userData = {
...currentUser,
favorites: Array.from(favorites),
savedSearches: savedSearches,
};
localStorage.setItem("propertyHubUser", JSON.stringify(userData));
}
}

function showNotification(message) {
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");

notificationText.textContent = message;
notificationText.style.wordWrap = "break-word";
notificationText.style.maxWidth = "250px";

notification.classList.add("show");

setTimeout(() => {
notification.classList.remove("show");
}, 3000);
}

function handlePropertySubmission(event) {
event.preventDefault();
if (!currentUser) {
showNotification("Please sign in to submit a property");
showPage("login-section");
return;
}
showNotification(
"Property submitted successfully! Our team will review and list it soon."
);
event.target.reset();
}

function loadWishlist() {
const wishlistGrid = document.getElementById("wishlistGrid");
const emptyWishlist = document.getElementById("emptyWishlist");

if (favorites.size === 0) {
wishlistGrid.style.display = "none";
emptyWishlist.style.display = "block";
} else {
wishlistGrid.style.display = "grid";
emptyWishlist.style.display = "none";

wishlistGrid.innerHTML = "";
const wishlistProperties = properties.filter((p) =>
favorites.has(p.id)
);

wishlistProperties.forEach((property) => {
const card = createPropertyCard(property);
wishlistGrid.appendChild(card);
});
}
}

function renderAgents() {
const container = document.querySelector("#agents-section .grid");
if (!container) return;

container.innerHTML = "";

agents.forEach((agent) => {
const card = document.createElement("div");
card.className = "agent bg-primary rounded-lg shadow-lg overflow-hidden";
card.innerHTML = `
<img src="${agent.image}" alt="${agent.name}" class="w-full h-48 object-cover">
<div class="p-6">
<h3 class="text-xl font-semibold mb-2 text-primary">${agent.name}</h3>
<p class="text-secondary mb-2">${agent.specialty}</p>
<div class="flex items-center mb-2">
<div class="text-yellow-500 mr-2">
${Array(5)
.fill()
.map(
(_, i) =>
`<i class="fas fa-star ${i < Math.floor(agent.rating)
? ""
: "text-gray-300"
}"></i>`
)
.join("")}
</div>
<span class="text-sm text-secondary">${agent.rating
} (${agent.properties} properties)</span>
</div>
<p class="text-sm text-secondary mb-4">${agent.experience
} experience</p>
<div class="space-y-2 mb-4">
<p class="text-sm text-secondary"><i class="fas fa-phone mr-2"></i>${agent.phone
}</p>
<p class="text-sm text-secondary"><i class="fas fa-envelope mr-2"></i>${agent.email
}</p>
</div>
<button onclick="contactAgentProfile(${agent.id
})" class="w-full btn-primary py-2 rounded-lg hover:bg-indigo-700 transition">
Contact Agent
</button>
</div>
`;
container.appendChild(card);
});
}

function contactAgentProfile(agentId) {
const agent = agents.find((a) => a.id === agentId);
if (agent) {
showNotification(
`Contact details for ${agent.name} sent to your email`
);
}
}

function saveCurrentSearch() {
if (!currentUser) {
showNotification("Please sign in to save searches");
showPage("login-section");
return;
}

let searchTerm = "";
if (currentPage === "home-section") {
searchTerm = document.getElementById("searchInput").value;
} else if (currentPage === "buy-section") {
searchTerm = document.getElementById("buySearchInput").value;
} else if (currentPage === "rent-section") {
searchTerm = document.getElementById("rentSearchInput").value;
}

if (searchTerm) {
const search = {
id: Date.now(),
term: searchTerm,
timestamp: new Date().toLocaleDateString(),
count:
currentPage === "home-section"
? filteredProperties.length
: currentPage === "buy-section"
? buyFilteredProperties.length
: rentFilteredProperties.length,
};

savedSearches.push(search);
saveUserData();
renderSavedSearches();
showNotification("Search saved successfully");
} else {
showNotification("Please enter a search term to save");
}
}

function renderSavedSearches() {
const container = document.getElementById("savedSearches");
if (!container) return;

if (savedSearches.length === 0) {
container.innerHTML =
'<p class="text-secondary">No saved searches yet</p>';
} else {
container.innerHTML = savedSearches
.map(
(search) => `
<div class="saved flex items-center justify-between p-3 bg-secondary rounded-lg">
<div>
<p class="font-medium text-primary">${search.term}</p>
<p class="text-sm text-secondary">${search.timestamp} - ${search.count} results</p>
</div>
<button onclick="loadSavedSearch('${search.term}')" class="text-indigo-600 hover:text-indigo-800">
<i class="fas fa-search"></i>
</button>
</div>
`
)
.join("");
}
}

function loadSavedSearch(term) {
if (currentPage === "home-section") {
document.getElementById("searchInput").value = term;
performSearch();
} else if (currentPage === "buy-section") {
document.getElementById("buySearchInput").value = term;
performBuySearch();
} else if (currentPage === "rent-section") {
document.getElementById("rentSearchInput").value = term;
performRentSearch();
}
showPage("home-section");
}

function calculateMortgage() {
const price = parseFloat(document.getElementById("calcPrice").value);
const downPayment = parseFloat(
document.getElementById("calcDownPayment").value
);
const interest = parseFloat(
document.getElementById("calcInterest").value
);
const term = parseFloat(document.getElementById("calcTerm").value);

if (!price || !downPayment || !interest || !term) {
showNotification("Please fill all fields");
return;
}

const loanAmount = price - (price * downPayment) / 100;
const monthlyInterest = interest / 12 / 100;
const numPayments = term * 12;

const emi =
(loanAmount *
monthlyInterest *
Math.pow(1 + monthlyInterest, numPayments)) /
(Math.pow(1 + monthlyInterest, numPayments) - 1);
const totalPayment = emi * numPayments;
const totalInterest = totalPayment - loanAmount;

document.getElementById("monthlyEMI").textContent =
"₹" + emi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("totalInterest").textContent =
"₹" + totalInterest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("totalPayment").textContent =
"₹" + totalPayment.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("calcResult").classList.remove("hidden");
}

function closeCalcModal() {
document.getElementById("calc-modal").classList.remove("active");
document.body.style.overflow = "auto";
}

document
.getElementById("searchInput")
.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
performSearch();
}
});

document
.getElementById("buySearchInput")
.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
performBuySearch();
}
});

document
.getElementById("rentSearchInput")
.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
performRentSearch();
}
});

document.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
closeModal();
closeCalcModal();
if (
document
.getElementById("sidebar")
.classList.contains("active")
) {
toggleSidebar();
}
}
});

if (localStorage.getItem("darkMode") === "true") {
toggleTheme();
}