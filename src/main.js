// CURRENT TASK
// basic iteration complete!!
// * 6: Extensions

// 💐 Welcome to RomCom!

// 🌐 Query Selectors & Global variables
let coverImage = document.getElementById("coverImage");
let coverTitle = document.getElementById("coverTitle");
let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");
let savedCovers = [];
let currentCover;
const newCoverBtn = document.getElementById("newBtn");
const saveCoverBtn = document.getElementById("saveBtn");
const savedCoversBtn = document.getElementById("savedBtn");
const makeCoverBtn = document.getElementById("makeBtn");
const homeBtn = document.getElementById("homeBtn");
const makeBookBtn = document.getElementById("makeBookBtn");
const homeView = document.getElementById("homeView");
const formView = document.getElementById("formView");
const savedView = document.getElementById("savedView");
const savedCoversSection = document.getElementById("savedCoversSection");

// 🎧 Event listeners
window.addEventListener("load", createRandomCover); 
newCoverBtn.addEventListener("click", createRandomCover);
saveCoverBtn.addEventListener("click", saveCurrentCover);
savedCoversBtn.addEventListener("click", showSaved);
makeCoverBtn.addEventListener("click", showForm);
homeBtn.addEventListener("click", showHome);
makeBookBtn.addEventListener("click", createCustomCover);
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

// Helper functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function setCurrentCover(cover) {
  currentCover = cover;
};

function getRandomElement(array) {
  return array[getRandomIndex(array)];
};

function showForm(event) {
  event.preventDefault();
  formView.classList.remove("hidden");
  homeBtn.classList.remove("hidden");
  homeView.classList.add("hidden");
  newCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
};

function showSaved(event) {
  event.preventDefault();
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


function displayCurrentCover() {
  console.log(`The current cover is`, currentCover);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tag1.innerText = currentCover.tagline1;
  tag2.innerText = currentCover.tagline2;
};

function saveCurrentCover(event) {
  event.preventDefault();
  
  if (savedCovers.includes(currentCover)) {
    alert("This cover is already saved! Having fun? Try making a new cover!");
  } else {
    savedCovers.push(currentCover);
  }
};

function generateSavedView() {  
  savedCoversSection.innerHTML = "";
  
  let tinyCovers = savedCovers.map(cover => {
    savedCoversSection.innerHTML += `
      <section class="mini-cover" id=${cover.id}>
        <img class="cover-image" src="${cover.cover}" id="coverImage">
        <h2 class="cover-title" id="coverTitle">${cover.title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1" id="tag1">${cover.tagline1}</span> and <span class="tagline-2" id="tag2">${cover.tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
    `;
    return cover;
  });

  // return tinyCovers;
};

function deleteSavedCover(event) {
  const clickedId = Number(event.target.parentNode.id);
  
  const deleteMatch = () => savedCovers.map((cover, index) => {
    cover.id === clickedId ? savedCovers.splice(index, 1) : console.log("not a match!");
  });

  deleteMatch();
  generateSavedView();
};