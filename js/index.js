//Body element
const body = document.body;

//------Footer------

//create footer element
let footer = document.createElement("footer");
//append footer to body
body.appendChild(footer);

// create a new date object
const today = new Date();
//get current year
const thisYear = today.getFullYear();
//get the current footer element
footer = document.querySelector("footer");
//create new <p> element
const copyright = document.createElement("p");
//set the inner html with copyright symbol, name, and year
copyright.innerHTML = `\u00A9 Angelica Cervantes ${thisYear}`
//append <p> to the footer
footer.appendChild(copyright);
//center footer
footer.style.textAlign = "center";

//------Skills------
//list technical skills
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "SQL"];

//select the skills section by id
const skillsSection = document.getElementById("Skills");
//select empty <ul> inside the skills section
const skillsList = skillsSection.querySelector("ul");

//Loop through the skill array
for (let i = 0; i < skills.length; i++){
    //creeate a new <li> element
    const skill = document.createElement("li");
    //set the text of each li to the current skills
    skill.innerText = skills[i];
    //append the <li> to the skill list
    skillsList.appendChild(skill);
}
