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
var mainCover = document.querySelector(".main-cover");
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

saveCoverButton.addEventListener("click", pushSavedCoverInputs);
saveCoverButton.addEventListener("click", instantiateUserCover);
saveCoverButton.addEventListener("click", showButtonsInHomeView);
//we were using the wrong button before, I updated it to be the purple
//make my book button instead (added event listener, did not overwrite)
//we will need to resolve these event listeners based on that alone
makeMyBookButton.addEventListener("click", function(event) {
  event.preventDefault();
  displayUserCover()
});

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
	descriptor2.innerText = descriptors[randomDescriptorImageIndex2];
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
  newRandomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
}

function pushSavedCoverInputs() {
	covers.push(userInputCover.value)
	titles.push(userInputTitle.value)
	descriptors.push(userInputDescription1.value)
	descriptors.push(userInputDescription2.value)
}

function instantiateUserCover() {
  var newInstanceOfCover = new Cover(userInputCover.value, userInputTitle.value, userInputDescription1.value, userInputDescription2.value)
  return newInstanceOfCover;
  displayUserCover();
}

// function displayUserCover() {
//   //event.prevent.default();
//   //console.log("working");
//   mainTitle.innerText = userInputTitle.value;
//   coverImage.innerText = userInputCover.value;
//   descriptor1.innerText = userInputDescription1.value;
//   descriptor2.innerText = userInputDescription2.value;
// }

function displayUserCover() {
  pushSavedCoverInputs();
  mainTitle.innerText = titles[titles.length-1];
  coverImage.innerText = covers[covers.length-1];
  descriptor1.innerText = descriptors[descriptors.length-2];
  descriptor2.innerText = descriptors[descriptors.length-1];
}

//in formView (goToMakeYourOwnPage i think?)
//when saveCoverButton clicked:
////saveCoverButton.addEventListener("click", pushSavedCoverInputs);
////add strings in respective arrays:
////function pushSavedCoverInputs() {
////	covers.push(userInputCover)
////	covers.push(userInputTitle)
////	covers.push(userInputDescription1)
////	covers.push(userInputDescription2)
////}
////create new instance of Cover class
//////var newInstanceOfCover = new Cover(userInputCover, userInputTitle, userInputDescription1, userInputDescription2)

//in formView (goToMakeYourOwnPage i think?)
//when saveCoverButton clicked:

////add strings in respective arrays:
////function pushSavedCoverInputs() {
////	covers.push(userInputCover)
////	titles.push(userInputTitle)
////	descriptors.push(userInputDescription1)
////	descriptors.push(userInputDescription2)
////}
////create new instance of Cover class
//////var newInstanceOfCover = new Cover(userInputCover, userInputTitle, userInputDescription1, userInputDescription2)


// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
