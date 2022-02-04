// CURRENT TASK
//   * When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors

// Create variables targetting the relevant DOM elements here 👇
// image
const coverImage = document.getElementById("coverImage");
// title
const coverTitle = document.getElementById("coverTitle");
// tagline
const coverTagline = document.getElementById("coverTagline");
// new random cover button
const newCoverButton = document.getElementById("newBtn");
// save cover button
const saveCoverButton = document.getElementById("saveBtn");
// view saved covers button
const savedCoversBtn = document.getElementById("savedBtn");
// make your own cover button
const makeCoverBtn = document.getElementById("makeBtn");

// We've provided a few variables below
let savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
let currentCover;

// Add your event listeners here 👇

// on page load, display a randomly generated cover (image, tagline, title)

// on newBtn click, generate a new random cover to display in the DOM

// on saveBtn click, add the current cover to the savedCovers array (should not save duplicate covers)

// on savedBtn click, display view saved-view page (line 26 index.html)

// on makeBtn click, display view form-view page (line 29 index.html)

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// write a function to generate a random cover
