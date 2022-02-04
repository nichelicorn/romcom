// CURRENT TASK
// * 3: Creating a new cover
// * In the new cover form view, users should be able to fill out the four input fields and then hit the Make My Book button
// * When the Make My Book button is clicked, several things will happen: 
// * Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data

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
const newCoverBtn = document.getElementById("newBtn");
// save cover button
const saveCoverBtn = document.getElementById("saveBtn");
// view saved covers button
const savedCoversBtn = document.getElementById("savedBtn");
// make your own cover button
const makeCoverBtn = document.getElementById("makeBtn");
// home button
const homeBtn = document.getElementById("homeBtn");
// make book button
const makeBookBtn = document.getElementById("makeBookBtn");
// home view page
const homeView = document.getElementById("homeView");
// form view page
const formView = document.getElementById("formView");
// saved covers view page
const savedView = document.getElementById("savedView");

// We've provided a few variables below
let savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
let currentCover;

// Add your event listeners here 👇
// on page load, display a randomly generated cover (image, tagline, title)
window.addEventListener("load", createRandomCover);
// on newBtn click, generate a new random cover to display in the DOM
newCoverBtn.addEventListener("click", createRandomCover);
// on saveBtn click, add the current cover to the savedCovers array (should not save duplicate covers)

// on savedBtn click, display view saved-view page (line 26 index.html)
savedCoversBtn.addEventListener("click", showSaved);
// on makeBtn click, display view form-view page (line 29 index.html)
makeCoverBtn.addEventListener("click", showForm);
// on homeBtn click, display the home view
homeBtn.addEventListener("click", showHome);
// on makeBookBtn click, make custom cover
makeBookBtn.addEventListener("click", createCustomCover);

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
};

function showForm(event) {
  event.preventDefault();
  // console.log("event >", event);
  formView.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
  homeView.classList.add("hidden");
  newCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
};

function showSaved(event) {
  event.preventDefault();
  // console.log("event >", event);
  savedView.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  newCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
};

function showHome(event) {
  event.preventDefault();
  homeView.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
  newCoverBtn.classList.remove("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
  homeBtn.classList.add("hidden");
};

// * Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
function createCustomCover(event) {
  event.preventDefault();
  const userCover = document.getElementById("userCover").value;
  const userTitle = document.getElementById("userTitle").value;
  const descriptor1 = document.getElementById("descriptor1").value;
  const descriptor2 = document.getElementById("descriptor2").value;
  
  // push url into covers array
  covers.push(userCover);
  // push title into titles array
  titles.push(userTitle);
  // push descriptors into descriptors array
  descriptors = [...descriptors, descriptor1, descriptor2];
  // console.log("descriptor2 >", descriptor2);
  // console.log("descriptors array >", descriptors);
};