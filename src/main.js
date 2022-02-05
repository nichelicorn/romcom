// CURRENT TASK
// * 5: Deleting Saved Covers

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
// saved covers display area
const savedCoversSection = document.getElementById("savedCoversSection");

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
saveCoverBtn.addEventListener("click", saveCurrentCover);
// on savedBtn click, display view saved-view page (line 26 index.html)
savedCoversBtn.addEventListener("click", showSaved);
// on makeBtn click, display view form-view page (line 29 index.html)
makeCoverBtn.addEventListener("click", showForm);
// on homeBtn click, display the home view
homeBtn.addEventListener("click", showHome);
// on makeBookBtn click, make custom cover
makeBookBtn.addEventListener("click", createCustomCover);
// doubleclick on saved cover section to delete selected poster
savedCoversSection.addEventListener("dblclick", deleteSavedCover);

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
  // coverImage.src = image;
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
  // console.log(`The current cover is`, currentCover);

  // console.log("this cover >", thisCover);

  // display generated elements to the DOM
  // coverImage.src = image;
  // displayDomImageElement(coverImage, image);
  // coverTitle.innerText = title;
  // displayDomTextElement(coverTitle, title);
  // tag1.innerText = adjective1;
  // displayDomTextElement(tag1, adjective1);
  // tag2.innerText = adjective2;
  // displayDomTextElement(tag2, adjective2);

  displayCurrentCover();
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

  generateSavedView();
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

  currentCover = new Cover(userCover, userTitle, descriptor1, descriptor2);

  // console.log("current cover >", currentCover);

  showHome(event);
  displayCurrentCover();
};


function displayCurrentCover() {
  console.log(`The current cover is`, currentCover);
  // console.log("coverImage >", coverImage);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;
};

function saveCurrentCover(event) {
  event.preventDefault();
  
  if (savedCovers.includes(currentCover)) {
    // console.log("oh no! this is a duplicate cover!");
    alert("This cover is already saved! Having fun? Try making a new cover!");
  } else {
    savedCovers.push(currentCover);
  }
  // console.log("savedCovers >", savedCovers);
};

function generateSavedView() {
  
  savedCoversSection.innerHTML = "";
  
  let tinyCovers = savedCovers.map(cover => {
    // console.log("cover details >", cover);
    savedCoversSection.innerHTML += `
      <section class="mini-cover" id=${cover.id}>
        <img class="cover-image" src="${cover.cover}" id="coverImage">
        <h2 class="cover-title" id="coverTitle">${cover.title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1" id="tag1">${cover.tagline1}</span> and <span class="tagline-2" id="tag2">${cover.tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
    `;
    // console.log("cover HTML >", cover);
    return cover;
  });
  // display each of the saved covers as a small icon
  // console.log("tiny covers >", tinyCovers);

  // console.log("equality check for length >", savedCovers.length === tinyCovers.length)
};

// * From the saved covers view, if a user double clicks a saved poster, it will be deleted
// * Hint: How will you update the data model to achieve this? Hint: Look into this user event Note: None of this needs to persist on page load (https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
function deleteSavedCover(event) {
  console.log("event >", event);
  console.log("event.target >", event.target);
  // console.log("closest cover?", event.target.closest(".overlay"));
  // console.log("event parent?", event.target.parentNode);

  const clickedElement = event.target.parentNode;
  console.log("clickedElement >", clickedElement);

  const clickedId = Number(event.target.parentNode.id);
  console.log("clickedId >", typeof clickedId);
  
  const deleteMatch = () => savedCovers.map((cover, index) => {
    // console.log("saved covers beforee splice >", savedCovers);
    // console.log("cover.id >", typeof cover.id);
    // console.log("id match?", cover.id === clickedId);
    // console.log("index >", index);
    cover.id === clickedId ? savedCovers.splice(index, 1) : console.log("not a match!");
    // console.log("saved covers after splice >", savedCovers);
  });
  deleteMatch();
  //
  generateSavedView();
  
  
  // const toDelete = event.target.closest(".overlay");
  // console.log("toDelete >", toDelete);
}