//iteration1

var mainTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");

//iteration2

var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var homeButton = document.querySelector(".home-button");
var newRandomCoverButton = document.querySelector(".random-cover-button");

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedCoversView = document.querySelector(".saved-view");

//iteration 3

var userInputCover = document.querySelector(".user-cover");
var userInputTitle = document.querySelector(".user-title");
var userInputDescription1 = document.querySelector(".user-desc1");
var userInputDescription2 = document.querySelector(".user-desc2");
// var mainCover = document.querySelector(".main-cover");
var makeMyBookButton = document.querySelector(".create-new-book-button");


// We've provided a few variables below

////// DO NOT TOUCH THE 4 LINES BELOW THIS!
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
////// DO NOT TOUCH THE 4 LINES ABOVE THIS!


// Add your event listeners here 👇
// WHICH FUNCTIONS GO WHEN YOU DO SOMETHING

//iteration 1

window.addEventListener("load", getRandomCover);
window.addEventListener("load", getRandomTitle);
window.addEventListener("load", getRandomDescriptor1);
window.addEventListener("load", getRandomDescriptor2);
newRandomCoverButton.addEventListener("click", getRandomCover);
newRandomCoverButton.addEventListener("click", getRandomTitle);
newRandomCoverButton.addEventListener("click", getRandomDescriptor1);
newRandomCoverButton.addEventListener("click", getRandomDescriptor2);

makeYourOwnCoverButton.addEventListener("click", goToMakeYourOwnPage);
viewSavedCoversButton.addEventListener("click", showButtonsInSavedCoversView);
homeButton.addEventListener("click", showButtonsInHomeView);

makeMyBookButton.addEventListener("click", pushSavedCoverInputs);
makeMyBookButton.addEventListener("click", instantiateUserCover);
makeMyBookButton.addEventListener("click", showButtonsInHomeView);

makeMyBookButton.addEventListener("click", goToHomeView);
makeMyBookButton.addEventListener("click", displayUserCover);
makeMyBookButton.addEventListener("click", preventDefault);

saveCoverButton.addEventListener("click", showButtonsInSavedCoversView);

// Create your event handlers and other functions here 👇
// WHAT EXACTLY HAPPENS WHEN DO SOMETHING - THESE ARE ALL FUNCTIONS

//iteration 1

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

//iteration2

function goToMakeYourOwnPage() {
  formView.classList.remove("hidden");
  homeView.classList.add("hidden");
  showButtonsInFormView();
}

function showButtonsInFormView() {
   newRandomCoverButton.classList.add("hidden");
   saveCoverButton.classList.add("hidden");
   homeButton.classList.remove("hidden")
}

function showButtonsInSavedCoversView() {
  savedCoversView.classList.remove("hidden");
  formView.classList.add("hidden");
  homeView.classList.add("hidden");

  newRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
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
  displayUserCover();
}

function displayUserCover() {
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
  // preventDefault();
}

function preventDefault() {
  event.preventDefault()
}
