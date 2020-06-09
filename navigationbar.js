/*Shrink Header*/
var shrunk = 0;
window.onscroll = function () {
	var headerAnimationShrink = [
		{ height: '30%' },
		{ height: '15%' },
	];
	var headerAnimationGrow = [
		{ height: '15%' },
		{ height: '30%' },
	];
	var imageAnimationShrink = [
		{ right: '75%' },
		{ right: '65%' },
	]
	var imageAnimationGrow = [
		{ right: '65%' },
		{ right: '75%' },
	]
	var nameAnimationShrink = [
		{
			right: '20%',
			top: '15px'
		},
		{
			right: '23%',
			top: '10px'
		}
	]
	var nameAnimationGrow = [
		{
			right: '23%',
			top: '10px'
		},
		{
			right: '20%',
			top: '15px'
		}
	]
	var timing = {
		duration: 300,
		iterations: 1,
		fill: "forwards"
	};
	if (window.scrollY > window.innerHeight * .1 && shrunk == 0) {
		document.getElementsByTagName("header")[0].animate(headerAnimationShrink, timing);
		document.getElementById("image").animate(imageAnimationShrink, timing);
		document.getElementById("name").animate(nameAnimationShrink, timing);
		document.getElementById("objective").innerHTML = "";
		shrunk = 1;
	}
	else if (window.scrollY < window.innerHeight * .1 && shrunk == 1) {
		document.getElementsByTagName("header")[0].animate(headerAnimationGrow, timing);
		document.getElementById("image").animate(imageAnimationGrow, timing);
		document.getElementById("name").animate(nameAnimationGrow, timing);
		setTimeout(innerHTML, 250);
		shrunk = 0;
	}
}

function innerHTML() {
	document.getElementById("objective").innerHTML = "I am an Architecture graduate from NJIT with a passion for interior design, architecture, and urban design. Skilled with design-forward thinking, I want to utilize it to help those in need."
}

/*Automatic SlideShow*/
var imagenumber = 0;
window.onload = function () {
	this.innerHTML()
	// Slideshow 1
	slideshow();
	function slideshow() {
		var pictures = document.getElementsByClassName("slides");
		var descriptions = document.getElementsByClassName("slideshowDescriptions");
		var titles = document.getElementsByClassName("slideshowTitles");
		for (i = 0; i < pictures.length; i++) {
			pictures[i].style.display = "none";
			if (descriptions.length != 0) descriptions[i].style.display = "none";
			if (titles.length != 0) titles[i].style.display = "none";


		}
		imagenumber++;
		if (imagenumber > pictures.length) {
			imagenumber = 1;
		}
		pictures[imagenumber - 1].style.display = "block";
		if (descriptions.length != 0) descriptions[imagenumber - 1].style.display = "block";
		if (titles.length != 0) titles[imagenumber - 1].style.display = "block";
		setTimeout(slideshow, 5000);
	}

}


/*Portfolio Page*/
function portfolioPage() {
	console.log("Portfolio is working");
	var titles = document.getElementsByClassName("title");
	for (let i = 0; i < titles.length; i++) {
		var height = titles[i].clientHeight;
		titles[i].style.transform = "translateX(" + (height) + "px) rotate(90deg)";
		titles[i].style.transformOrigin = "top left";
	}

}



function manualslideshow(buttonid, slideshowclass) {
	var pictures = document.getElementsByClassName(slideshowclass);
	for (i = 0; i < pictures.length; i++) {
		pictures[i].style.display = "none";
	}
	if (buttonid == "rightButton") {
		imagenumber++;
	}
	else if (buttonid == "leftButton") {
		imagenumber--;
	}
	if (imagenumber > pictures.length) {
		imagenumber = 1;
	}
	if (imagenumber < 1) {
		imagenumber = pictures.length;
	}
	pictures[imagenumber - 1].style.display = "block";
}

