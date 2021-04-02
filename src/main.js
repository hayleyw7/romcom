//iteration1

var mainTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var newRandomCoverButton = document.querySelector(".random-cover-button");

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

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
