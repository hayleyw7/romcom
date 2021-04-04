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

//iteration 4
var  Section = document.querySelector(".saved-covers-section");

//iteration 5
//var coverImage = document.querySelector(".cover-image");
var overlay = document.querySelector(".overlay");

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

window.addEventListener("load", generateRandomCover);

// window.addEventListener("load", getRandomCover);
// window.addEventListener("load", getRandomTitle);
// window.addEventListener("load", getRandomDescriptor1);
// window.addEventListener("load", getRandomDescriptor2);
//Added April 3
newRandomCoverButton.addEventListener("click", generateRandomCover);
//

//newRandomCoverButton.addEventListener("click", getRandomCover);
// newRandomCoverButton.addEventListener("click", getRandomTitle);
// newRandomCoverButton.addEventListener("click", getRandomDescriptor1);
// newRandomCoverButton.addEventListener("click", getRandomDescriptor2);

makeYourOwnCoverButton.addEventListener("click", goToMakeYourOwnPage);
//added April 3
//makeYourOwnCoverButton.addEventListener("click", showButtonsInFormView);
//
viewSavedCoversButton.addEventListener("click", showButtonsInSavedCoversView);
homeButton.addEventListener("click", showButtonsInHomeView);

saveCoverButton.addEventListener("click", pushSavedCoverInputs);
saveCoverButton.addEventListener("click", instantiateUserCover);
saveCoverButton.addEventListener("click", showButtonsInHomeView);
//we were using the wrong button before, I updated it to be the purple
//make my book button instead (added event listener, did not overwrite)
//we will need to resolve these event listeners based on that alone
makeMyBookButton.addEventListener("click", goToHomeView);
makeMyBookButton.addEventListener("click", displayUserCover);
makeMyBookButton.addEventListener("click", preventDefault);

/// it 4 ash add
makeMyBookButton.addEventListener("click", pushSavedCoverInputs);
makeMyBookButton.addEventListener("click", instantiateUserCover);
saveCoverButton.addEventListener("click", saveCover);

//it 5
//coverImage.addEventListener("dblclick", removeCover);
mainCover.addEventListener("dblclick", removeCover);
//overlay.addEventListener("dblclick", removeCover);
//miniCover.addEventListener("dblclick", removeCover);



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
  preventDefault();
}

function preventDefault() {
  event.preventDefault()
}

//iteration 4
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
//write an event listener to respond to a double click, that will trigger the
// removeCoverFromArray, which will then trigger iteratedSavedCovers

//edit the function tied to the savedCoversButton to include the iterateSavedCovers
//function

//write a function that removes an element from an array as well
// and returns said array

//call this function in that function to trigger the view reload

function iterateSavedCovers() {
  //write a variable that will wipe the screen clean to "reset" the page clean
  // perhaps an empty array? ""?
  savedCoversSection.innerHTML = "";
//iterate through the array, element by element
  for (var i = 0; i < savedCovers.length; i++) {
  savedCoversSection.innerHTML +=
      `<section class="main-cover">
      <img class="cover-image" src="${savedCovers[i].cover}"/>
      <h2 class="cover-title"> ${savedCovers[i].title} </h2>
      <h3 class="tagline"> A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
      </section>
       `
  }
  //for each iteration, reassign and add to the variable declared at the beginning
  // of the function and inject the requisite html code into the savedCoversView section.
  //when injecting, use interpolation to specify which array element
  //is assigned to which html element
  //return variable?
}

//iteration 5

//write an event listener for the double click on the mainCover variable
//second argument should be this function below

//write a function that will update the savedCovers array
function removeCover() {
  console.log("working")
  var coverIndex = savedCovers.indexOf(mainCover);
  savedCovers.splice(coverIndex, 1);
  iterateSavedCovers();
  return savedCovers;
}
//declare a variable named mainCoverIndex
// use indexOf to find the index of mainCover
//store this index in the variable stated above
  //use .splice to remove that index from the array
  //return savedCovers array (mutated)
//at the end of function, add the iterateSavedCovers function to update the
//page load

// store this index in the variable stated
//or use a return statement to bust out of the loop?
//or target the id # with an if statement?
// if savedCovers[i].id === mainCover.id
