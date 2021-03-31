// Create variables targetting the relevant DOM elements here 👇
//Random Title Generator
var randomTitle = getRandomTitle(titles);
var mainTitle = document.querySelector(".cover-title");

function getRandomTitle(titles) {
	return titles[Math.floor(Math.random()*titles.length)];
}

mainTitle.innerText = randomTitle;

//Random Descriptor Generator
function getRandomDescriptor(descriptors) {
	return descriptors[Math.floor(Math.random()*descriptors.length)];
}
var randomDescriptor = getRandomDescriptor(descriptors);
var mainDescriptor = document.querySelector(".tagline-1");
mainDescriptor.innerText = randomDescriptor

var randomDescriptor = getRandomDescriptor(descriptors);
var mainDescriptor = document.querySelector(".tagline-2");
mainDescriptor.innerText = randomDescriptor

//Random Cover Generator
function getRandomCover(covers) {
  return covers[Math.floor(Math.random()*covers.length)];
};

var randomCover = getRandomCover(covers);
var coverImage = document.querySelector(".cover-image");
coverImage.src = randomCover;




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
