// Header:To define the header space	
var headerID = document.getElementsByTagName("header")[0];

// Header:To insert intro div to header
	var intro = document.createElement ("div");
	intro.setAttribute ("id", "intro");
	headerID.appendChild(intro);


// Header:To insert Melissa Thompson to intro div
	var headerName = document.createElement ("div"); 						
	headerName.setAttribute("id", "name");
	headerName.textContent = "MELISSA THOMPSON";
	intro.appendChild(headerName);


// Header:to insert Designer. Manager. Planner. to intro div
	var headerTag = document.createElement ("div");
	headerTag.setAttribute("id", "tag");
	headerTag.textContent = "Designer. Manager. Planner.";
	intro.appendChild(headerTag);


// Header:to insert Logo div to header
	var headerLogo = document.createElement ("div");
	headerLogo.setAttribute("id", "tag");
	headerID.appendChild(headerLogo);


// Header:to insert Logo img into Logo div 
	var imgLogo = new Image;
	imgLogo.src = "images/beeVertical100px.png";
	headerLogo.appendChild(imgLogo);


// Header:to insert nav div to header
	var headerNav = document.createElement ("nav");
	headerID.appendChild(headerNav);

// Header:to insert nav links into nav
	var a1 = document.createElement('a');
	var linkText1 = document.createTextNode("AM. ");
	a1.appendChild(linkText1);
	a1.title = "AM";
	a1.href = "index.html";
	headerNav.appendChild(a1);

	var a2 = document.createElement('a');
	var linkText2 = document.createTextNode("THINK. ");
	a2.appendChild(linkText2);
	a2.title = "THINK";
	a2.href = "blog.html";
	headerNav.appendChild(a2);

	var a3 = document.createElement('a');
	var linkText3 = document.createTextNode("DO. ");
	a3.appendChild(linkText3);
	a3.title = "DO";
	a3.href = "resume.html";
	headerNav.appendChild(a3);

	var a4 = document.createElement('a');
	var linkText4 = document.createTextNode("CONTACT. ");
	a4.appendChild(linkText4);
	a4.title = "CONTACT";
	a4.href = "index.html#contact";
	headerNav.appendChild(a4);


// Footer: To define the footer space
	var footerID = document.getElementsByTagName("footer")[0]


// Footer: to insert text into footer
	var footerText = document.createElement("p");
	footerText.setAttribute("id", "footerText");
	footerText.textContent = "Melissa Thompson. All rights reserved. \xA9 2015.";
	footerID.appendChild(footerText);




// Resume: Collapsable Event Listener
// Resume: Collapse/Expand Summary 
	var collapseSummary = document.querySelector("body section#collapseSummary");
	var summaryButton = document.querySelector("button#summaryButton");
	var isVisible = true;
	
	summaryButton.addEventListener("click", function (evt) {
		console.log("clicked");

		if(isVisible) {
			collapseSummary.classList.add("hidden");
			summaryButton.textContent = "+";
			isVisible = false;
		}
		else {
			collapseSummary.classList.remove("hidden");
			summaryButton.textContent = "-";
			isVisible = true;
		}
	}
	)

// Resume: Collapse/Expand Skills 
	var collapseSkills = document.querySelector("body section#collapseSkills");
	var skillsButton = document.querySelector("button#skillsButton");
	var isVisible = true;
	
	skillsButton.addEventListener("click", function (evt) {
		console.log("clicked");

		if(isVisible) {
			collapseSkills.classList.add("hidden");
			skillsButton.textContent = "+";
			isVisible = false;
		}
		else {
			collapseSkills.classList.remove("hidden");
			skillsButton.textContent = "-";
			isVisible = true;
		}
	}
	)

// Resume: Collapse/Expand Experience 
	var collapseExperience = document.querySelector("body section#collapseExperience");
	var experienceButton = document.querySelector("button#experienceButton");
	var isVisible = true;
	
	experienceButton.addEventListener("click", function (evt) {
		console.log("clicked");

		if(isVisible) {
			collapseExperience.classList.add("hidden");
			experienceButton.textContent = "+";
			isVisible = false;
		}
		else {
			collapseExperience.classList.remove("hidden");
			experienceButton.textContent = "-";
			isVisible = true;
		}
	}
	)

// Resume: Collapse/Expand Portfolio 
	var collapsePortfolio = document.querySelector("body section#collapsePortfolio");
	var portfolioButton = document.querySelector("button#portfolioButton");
	var isVisible = true;
	
	portfolioButton.addEventListener("click", function (evt) {
		console.log("clicked");

		if(isVisible) {
			collapsePortfolio.classList.add("hidden");
			portfolioButton.textContent = "+";
			isVisible = false;
		}
		else {
			collapsePortfolio.classList.remove("hidden");
			portfolioButton.te = "-";
			isVisible = true;
		}
	}
	)

// Resume: Collapse/Expand Education 
	var collapseEducation = document.querySelector("body section#collapseEducation");
	var educationButton = document.querySelector("button#educationButton");
	var isVisible = true;
	
	educationButton.addEventListener("click", function (evt) {
		console.log("clicked");

		if(isVisible) {
			collapseEducation.classList.add("hidden");
			educationButton.textContent = "+";
			isVisible = false;
		}
		else {
			collapseEducation.classList.remove("hidden");
			educationButton.textContent = "-";
			isVisible = true;
		}
	}
	)

