let carouselWidth = 1440; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let imageNum= 0;

function showNextImage() {
	imageNum++;
	checkControls() ;
	let imageRowLeft = -carouselWidth * imageNum ;
	imageRow.style.left= imageRowLeft + "px";

}

nextButton.onclick = showNextImage;

function showPrevImage() {
	imageNum--;
    checkControls() ;
	let imageRowLeft = -carouselWidth * imageNum ;
	imageRow.style.left= imageRowLeft + "px";
}

prevButton.onclick = showPrevImage;

let totalImages = document.getElementsByClassName("carousel-image").length;

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 0) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == totalImages - 1) {
		// What should happen it's the last image?
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.remove("hidden");
	}
}