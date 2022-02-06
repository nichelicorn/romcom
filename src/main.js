// CURRENT TASK
// basic iteration complete!!
// Refactoring

// * refactor CSS to create responsive layout


// 💐 Welcome to RomCom!

// 🌐 Query Selectors & Global variables
let coverImage = document.getElementById("coverImage");
let coverTitle = document.getElementById("coverTitle");
let currentCover;
let savedCovers = [];
let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");
const controls = document.getElementById("controls");
const formView = document.getElementById("formView");
const homeBtn = document.getElementById("homeBtn");
const homeView = document.getElementById("homeView");
const instructions = document.getElementById("instructions");
const makeBookBtn = document.getElementById("makeBookBtn");
const makeCoverBtn = document.getElementById("makeBtn");
const newCoverBtn = document.getElementById("newBtn");
const saveCoverBtn = document.getElementById("saveBtn");
const savedCoversBtn = document.getElementById("savedBtn");
const savedCoversSection = document.getElementById("savedCoversSection");
const savedInstructions = document.getElementById("savedInstructions");
const savedView = document.getElementById("savedView");

// 🎧 Event listeners
window.addEventListener("load", createRandomCover); 
homeBtn.addEventListener("click", showHome);
makeBookBtn.addEventListener("click", createCustomCover);
makeCoverBtn.addEventListener("click", showForm);
newCoverBtn.addEventListener("click", createRandomCover);
saveCoverBtn.addEventListener("click", saveCurrentCover);
savedCoversBtn.addEventListener("click", showSaved);
savedCoversSection.addEventListener("dblclick", deleteSavedCover);

// ⚙️ Page functionaity
function createRandomCover() {
  const image = getRandomElement(covers);
  const title = getRandomElement(titles);
  const adjective1 = getRandomElement(descriptors);
  const adjective2 = getRandomElement(descriptors);

  const randomCover = new Cover(image, title, adjective1, adjective2);
  
  setCurrentCover(randomCover);
  displayCurrentCover();
};

function createCustomCover(event) {
  event.preventDefault();
  const userCover = document.getElementById("userCover").value;
  const userTitle = document.getElementById("userTitle").value;
  const descriptor1 = document.getElementById("descriptor1").value;
  const descriptor2 = document.getElementById("descriptor2").value;
  
  covers.push(userCover);
  titles.push(userTitle);
  descriptors = [...descriptors, descriptor1, descriptor2];

  const thisCover = new Cover(userCover, userTitle, descriptor1, descriptor2);
  
  setCurrentCover(thisCover);
  showHome(event);
  displayCurrentCover();
};

function saveCurrentCover(event) {
  event.preventDefault();

  savedCovers.includes(currentCover) ? alert("This cover has already been saved. Try making a new cover!") : savedCovers.push(currentCover);
};

function generateSavedView() {
  savedCoversSection.innerHTML = "";

  if (!savedCovers.length) {
    savedCoversSection.innerHTML = "Save a cover on the home page 💾";
    hideElement(savedInstructions);
  };
  
  let tinyCovers = savedCovers.map(cover => {
    savedCoversSection.innerHTML += 
      `<section class="mini-cover" id=${cover.id}>
          <img class="cover-image" src="${cover.cover}" id="coverImage">
          <h2 class="cover-title" id="coverTitle">${cover.title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1" id="tag1">${cover.tagline1}</span> and <span class="tagline-2" id="tag2">${cover.tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
        </section>`;
    return cover;
  });

  return tinyCovers;
};

function deleteSavedCover(event) {
  const clickedId = Number(event.target.parentNode.id);
  
  const deleteMatch = () => savedCovers.map((cover, index) => {
    cover.id === clickedId ? savedCovers.splice(index, 1) : console.log("not a match!");
  });

  deleteMatch();
  generateSavedView();
};

// Display functions
function showForm(event) {
  event.preventDefault();
  displayElement(formView);
  displayElement(homeBtn);
  displayElement(savedCoversBtn);
  hideElement(homeView);
  hideElement(newCoverBtn);
  hideElement(saveCoverBtn);
  hideElement(savedView);
};

function showSaved(event) {
  event.preventDefault();
  displayElement(homeBtn);
  displayElement(savedView);
  hideElement(formView);
  hideElement(homeView);
  hideElement(newCoverBtn);
  hideElement(saveCoverBtn);
  hideElement(savedCoversBtn);

  generateSavedView();
};

function showHome(event) {
  event.preventDefault();
  displayElement(homeView);
  displayElement(newCoverBtn);
  displayElement(saveCoverBtn);
  displayElement(savedCoversBtn);
  hideElement(formView);
  hideElement(homeBtn);
  hideElement(savedView);
};

function displayCurrentCover() {
  // console.log(`The current cover is`, currentCover);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;
};

// Helper functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomElement(array) {
  return array[getRandomIndex(array)];
};

function setCurrentCover(cover) {
  currentCover = cover;
};

function hideElement(element) {
  element.classList.add("hidden");
};

function displayElement(element) {
  element.classList.remove("hidden");
};