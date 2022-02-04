// CURRENT TASK
// * 1: Show random cover
// * Every time the user clicks the Show New Random Cover button, the random cover is displayed 
// * hint: you may need to create a function that displays information on the DOM

// Create variables targetting the relevant DOM elements here 👇
// image
let coverImage = document.getElementById("coverImage");
// title
let coverTitle = document.getElementById("coverTitle");
// tagline
let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");
// let coverTagline = document.getElementById("coverTagline");
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
window.addEventListener("load", createRandomCover);

// on newBtn click, generate a new random cover to display in the DOM
newCoverButton.addEventListener("click", createRandomCover);

// on saveBtn click, add the current cover to the savedCovers array (should not save duplicate covers)

// on savedBtn click, display view saved-view page (line 26 index.html)

// on makeBtn click, display view form-view page (line 29 index.html)

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// write a function to generate a random cover
function createRandomCover() {
  // assign cover elements
  // const image = covers[getRandomIndex(covers)];
  // const image = getRandomImage();
  const image = getRandomElement(covers);
  coverImage.src = image;
  // const title = titles[getRandomIndex(titles)];
  const title = getRandomElement(titles);
  // const adjective1 = descriptors[getRandomIndex(descriptors)];
  // const adjective2 = descriptors[getRandomIndex(descriptors)];
  const adjective1 = getRandomElement(descriptors);
  const adjective2 = getRandomElement(descriptors);

  // console.log("image >", image);
  // console.log("title >", title);
  // console.log("adjective words >", adjective1, adjective2);

  // create new Cover object
  const thisCover = new Cover(image, title, adjective1, adjective2);
  setCurrentCover(thisCover);
  console.log(`The current cover is`, currentCover);

  // console.log("this cover >", thisCover);

  // display generated elements to the DOM
  // coverImage.src = image;
  displayDomImageElement(coverImage, image);
  // coverTitle.innerText = title;
  displayDomTextElement(coverTitle, title);
  // tag1.innerText = adjective1;
  displayDomTextElement(tag1, adjective1);
  // tag2.innerText = adjective2;
  displayDomTextElement(tag2, adjective2);
};

function setCurrentCover(cover) {
  currentCover = cover;
};

// function getRandomImage() {
//   return covers[getRandomIndex(covers)];
// };

function getRandomElement(array) {
  return array[getRandomIndex(array)];
};

// * hint: you may need to create a function that displays information on the DOM
function displayDomImageElement(element, image) {
  // console.log("image >", image);
  // console.log("test >", coverImage.src = image);
  element.src = image;
};

function displayDomTextElement(element, data) {
  // console.log("data >", data);
  element.innerText = data;
}