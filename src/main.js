//iteration1

var mainTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");

//iteration2

var makeYourOwnCoverButton = document.querySelector(".make-new-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedCoversButton = document.querySelector(".view-saved-button")
var homeButton = document.querySelector(".home-button");
var newRandomCoverButton = document.querySelector(".random-cover-button");

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedCoversView = document.querySelector(".saved-view")


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

// Create your event handlers and other functions here 👇
// WHAT EXACTLY HAPPENS WHEN DO SOMETHING - THESE ARE ALL FUNCTIONS

//iteration 1

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
};

//iteration 1

////cover image

function getRandomCover() {
	var randomCoverImageIndex = getRandomIndex(covers);
  coverImage.src = covers[randomCoverImageIndex];
}

////title

function getRandomTitle() {
	var randomTitleImageIndex = getRandomIndex(titles);
	mainTitle.innerText = titles[randomTitleImageIndex];
}

////descriptor1

function getRandomDescriptor1() {
	var randomDescriptorImageIndex1 = getRandomIndex(descriptors);
	descriptor1.innerText = descriptors[randomDescriptorImageIndex1];
}

////descriptor2

function getRandomDescriptor2() {
	var randomDescriptorImageIndex2 = getRandomIndex(descriptors);
	descriptor2.innerText = descriptors[randomCoverImageIndex2];
}

//iteration2
function goToMakeYourOwnPage() {
  formView.classList.remove("hidden");
  //hide home page view
  homeView.classList.add("hidden");
  showButtonsInFormView();
}

function showButtonsInFormView() {
////hide newRandomCoverButton
   newRandomCoverButton.classList.add("hidden");
////hide saveCoverButton
   saveCoverButton.classList.add("hidden");
////show homeButton
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
  newRandomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
}

//iteration2 - saved covers

//when homeButton clicked:
////hide homeButton
homeButton.classList.add("hidden");
////show homeView
homeView.classList.remove("hidden");
////show newRandomCoverButton
newRandomCoverButton.classList.remove("hidden");
////show saveCoverButton
saveCoverButton.classList.remove("hidden");

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
