var constants = {
	headerDescription: "I am an Architecture graduate from NJIT with a passion for interior design, architecture, and urban design. Skilled with design-forward thinking, I want to utilize it to help those in need.",
	programs: {
		sketches: {
			fullName: "",
			projects: []
		},
		interior: {
			fullName: "Interior Design",
			projects: [
				{
					title: "The MCMC Hub",
					link: "thehub.html",
					description: "Redesigned existing basement that converted the space from storage to multipurpose room intended to provide lounge space, media center, and conference room.",
					image: "Project Images/Interior/The Hub/portfolio.png"
				}
			]
		},
		commercial: {
			fullName: "Commercial Architecture",
			projects: [
				{
					title: "Astoria Pool Complex",
					link: "asbury.html",
					description: "A pool complex designed for the community of Astoria provided an enclosed space for the community as well as outdoor region. The architecture was designed by using parametric software to design structural systems.",
					image: "Project Images/Commercial/AsburyPoolComplex/Interior 2-min.jpg"
				},
				{
					title: "Harrison Health Clinic",
					link: "harrison.html",
					description: "Designing clinics provide the challenge to incorporate spaces where medicine as well as social interaction can provide an to heal a patient's health. Harrison Health provides the site as well as the community to build such a health clinic.",
					image: "Project Images/Commercial/HarrisonHealthClinic/Render 1-2.jpg"
				}
			]

		},
		communal: {
			fullName: "",
			projects: []
		},
		residential: {
			fullName: "Residential Architecture",
			projects: [
				{
					title: "MicroUnit LiveWork",
					link: "micro.html",
					description: "A 600sqft micro-unit designed by creating living spacing in voids to allow for the minimal amount of room possible yet still able to provide the space for living as well as work.The ribbons of light through out the unit gives the room a spacious feel.",
					image: "Project Images/Residential/LiveWork MicroUnit/Interior 1-1.jpg"
				},
				{
					title: "Horizontal LiveWork",
					link: "horizontal.html",
					description: "Horizontally aggregating 600sqft of micro-units to open up the possibility of micro-units with capability of shared work environments.To establish the use of community office space with living spaces.",
					image: "Project Images/Residential/Horizontal LiveWork/Exterior render 1-2.jpg"
				},
				{
					title: "Vertical LiveWork",
					link: "vertical.html",
					description: "Vertically aggregating micro-units to establish community residence for high-rise architecture.Experimenting with joint - work space in residential buildings; this is bringing a new typology of residential buildings for cities.",
					image: "Project Images/Residential/Vertical LiveWork/Open Space Render 1-2.jpg"
				},
				{
					title: "Queens Residential",
					link: "queens.html",
					description: "A different method to integrate micro-units to urban areas are by adapting existing buildings to the new typology.Here, an abandoned school in Newark, NJ was used to draw designs of how to integrate live- work micro units in the building. ",
					image: "Project Images/Residential/Queens Residential/portfolio.png"
				}
			]

		},
		urban: {
			fullName: "Commercial Architecture",
			projects: [
				{
					title: "Higland Park Resettlement",
					link: "highland.html",
					description: "A pool complex designed for the community of Astoria provided an enclosed space for the community as well as outdoor region.The architecture was designed by using parametric software to design structural systems.",
					image: "Project Images/Urban/Highland/portfolio.png"
				},
				{
					title: "Hydrohoods of Tomorrow",
					link: "hydrohoods.html",
					description: "Designing clinics provide the challenge to incorporate spaces where medicine as well as social interaction can provide an to heal a patient's health. Harrison Health provides the site as well as the community to build such a health clinic.",
					image: "Project Images/Urban/Hydrohoods/portfolio.png"
				}
			]

		}
	},
	slideShowContent: [
		{
			link: "asbury.html",
			image: "Project Images/Commercial/AsburyPoolComplex/index image.png",
			title: "Asbury Pool Complex",
			description: "Experimenting with grasshopper as a tool to design a parametric structural system, the design ended up creating an enclosed space for a pool complex."
		},
		{
			link: "harrison.html",
			image: "Project Images/Commercial/HarrisonHealthClinic/Index image.png",
			title: "Harrison Health Clinic",
			description: "Medicine as well as social interaction and the outside environment can provide an impact on a patient's health. A site that provides the need for patients and staff members to heal and treat is known as an opportunity site for a health clinic."
		},
		{
			link: "queens.html",
			image: "Project Images/Residential/Queens Residential/index image.png",
			title: "Queens Residential",
			description: "Housing is changing, and with city population on the rise, units are becoming more compact.With the rise of technology, working remotely has been easier than before. A collection of projects have been designed to foresee what a live- work micro - unit might achieve.Three different designs help visualize different solutions to advance or urbaneness."
		},
		{
			link: "micro.html",
			image: "Project Images/Interior/The Hub/index image.png",
			title: "The Hub",
			description: "Test Description"
		},
	]
};

/*Shrink Header*/
var shrunk = 0;
// var initialHeaderHeight
window.addEventListener('load', function () {
	this.document.getElementById("objective").innerHTML = constants.headerDescription
	// 	initialHeaderHeight = window.getComputedStyle(document.getElementsByTagName('header')[0]).height
	// 	// document.getElementsByTagName('header')[0].get

})

window.onscroll = function () {
	var headerAnimationShrink = [
		{ height: '25vh' },
		{ height: '15vh' },
	];
	var headerAnimationGrow = [
		{ height: '15vh' },
		{ height: '25vh' },
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
		// {
		// 	right: '20%',
		// 	top: '50%'
		// },
		// {
		// 	right: '23%',
		// 	top: 'initial'
		// }
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
		// document.getElementById("objective").style.display = "none";
		shrunk = 1;
		document.getElementsByTagName("header")[0].animate(headerAnimationShrink, timing);
		document.getElementById("image").animate(imageAnimationShrink, timing);
		document.getElementById("name").animate(nameAnimationShrink, timing);
		document.getElementById("objective").innerHTML = "";
	}
	else if (window.scrollY < window.innerHeight * .1 && shrunk == 1) {
		document.getElementsByTagName("header")[0].animate(headerAnimationGrow, timing);
		document.getElementById("image").animate(imageAnimationGrow, timing);
		document.getElementById("name").animate(nameAnimationGrow, timing);
		// this.innerHTML()
		setTimeout(innerHTML, 250);
		shrunk = 0;
	}
}

function innerHTML() {
	// document.getElementById("objective").style.display = "block";
	// document.getElementById("objective").innerHTML = "I am an Architecture graduate from NJIT with a passion for interior design, architecture, and urban design. Skilled with design-forward thinking, I want to utilize it to help those in need."
	document.getElementById("objective").innerHTML = constants.headerDescription
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


function getConstants() {
	return constants;
}