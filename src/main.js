var mainTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");

var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var homeButton = document.querySelector(".home-button");
var newRandomCoverButton = document.querySelector(".random-cover-button");

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedCoversView = document.querySelector(".saved-view");

var userInputCover = document.querySelector(".user-cover");
var userInputTitle = document.querySelector(".user-title");
var userInputDescription1 = document.querySelector(".user-desc1");
var userInputDescription2 = document.querySelector(".user-desc2");
var mainCover = document.querySelector(".main-cover");
var makeMyBookButton = document.querySelector(".create-new-book-button");

var  savedCoversSection = document.querySelector(".saved-covers-section");

var coverImage = document.querySelector(".cover-image");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener("load", generateRandomCover);

newRandomCoverButton.addEventListener("click", generateRandomCover);

makeYourOwnCoverButton.addEventListener("click", goToMakeYourOwnPage);

viewSavedCoversButton.addEventListener("click", showButtonsInSavedCoversView);
homeButton.addEventListener("click", showButtonsInHomeView);

makeMyBookButton.addEventListener("click", goToHomeView);
makeMyBookButton.addEventListener("click", displayUserCover);

saveCoverButton.addEventListener("click", saveCover);

coverImage.addEventListener("dblclick", removeCover());


// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
};

function getRandomCover() {
	var randomCoverImageIndex = getRandomIndex(covers);
  return coverImage.src = covers[randomCoverImageIndex];
}

function getRandomTitle() {
	var randomTitleImageIndex = getRandomIndex(titles);
	return mainTitle.innerText = titles[randomTitleImageIndex];
}

function getRandomDescriptor1() {
	var randomDescriptorImageIndex1 = getRandomIndex(descriptors);
	return descriptor1.innerText = descriptors[randomDescriptorImageIndex1];
}

function getRandomDescriptor2() {
	var randomDescriptorImageIndex2 = getRandomIndex(descriptors);
	return descriptor2.innerText = descriptors[randomDescriptorImageIndex2];
}


function goToMakeYourOwnPage() {
  formView.classList.remove("hidden");
  homeView.classList.add("hidden");
  savedCoversView.classList.add("hidden");
  showButtonsInFormView();
}

function showButtonsInFormView() {
   newRandomCoverButton.classList.add("hidden");
   saveCoverButton.classList.add("hidden");
   homeButton.classList.remove("hidden");
}

function showButtonsInSavedCoversView() {
  savedCoversView.classList.remove("hidden");
  formView.classList.add("hidden");
  homeView.classList.add("hidden");

  newRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  iterateSavedCovers();
}

function showButtonsInHomeView() {
  homeButton.classList.add("hidden");
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  newRandomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
}

function instantiateUserCover() {
  var newInstanceOfCover = new Cover(userInputCover.value, userInputTitle.value, userInputDescription1.value, userInputDescription2.value)
  return newInstanceOfCover;
}

function displayUserCover() {
  instantiateUserCover()
  pushSavedCoverInputs();
  mainTitle.innerText = titles[titles.length-1];
  coverImage.src = covers[covers.length-1];
  descriptor1.innerText = descriptors[descriptors.length-2];
  descriptor2.innerText = descriptors[descriptors.length-1];
}

function pushSavedCoverInputs() {
	covers.push(userInputCover.value)
	titles.push(userInputTitle.value)
	descriptors.push(userInputDescription1.value)
	descriptors.push(userInputDescription2.value)
}

function goToHomeView() {
  formView.classList.add("hidden");
  homeView.classList.remove("hidden");
  showButtonsInHomeView();
  preventDefault();
}

function preventDefault() {
  event.preventDefault()
}


function generateRandomCover() {
  var homeCover =  getRandomCover();
  var homeTitle = getRandomTitle();
  var homeDescriptor1 = getRandomDescriptor1();
  var homeDescriptor2 = getRandomDescriptor2();
  homeCover = new Cover(homeCover, homeTitle, homeDescriptor1, homeDescriptor2);
  currentCover = homeCover;
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function iterateSavedCovers() {
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
  savedCoversSection.innerHTML +=
      `<section class="main-cover">
      <img class="cover-image" id="${savedCovers[i].id}" src="${savedCovers[i].cover}"/>
      <h2 class="cover-title"> ${savedCovers[i].title} </h2>
      <h3 class="tagline"> A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
      </section>
       `
  }
}


function removeCover(event) {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === event.target.id) {
      savedCovers.splice(savedCovers[i], 1)
    }
  }
  iterateSavedCovers();
  return savedCovers;
}