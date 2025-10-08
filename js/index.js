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

//------Message Form------
//helper function to toggle messages section visibility
function toggleMessagesSection(){
    const messageSection = document.getElementById("Messages");
    const messageList = messageSection.querySelector("ul");
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

toggleMessagesSection();

//select the leave_message form
const messageForm = document.querySelector("form[name=leave_messages]");

// add an event listener to handle submit
messageForm.addEventListener("submit", function(event) {
    //prevent default page reload
    event.preventDefault();

    //retrieve the form field values
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    //log values to log
    console.log("Name: ", userName);
    console.log("Email: ", userEmail);
    console.log("Message: ", userMessage);

    //select #Messages section
    const messageSection = document.getElementById("Messages");

    //select the ul list inside #Messages
    const messageList = messageSection.querySelector("ul");

    //create a new list item
    const newMessage = document.createElement("li");
    //set the inner html
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`

    //create remove button var
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.className = "remove-btn";
    removeButton.type = "button";

    //add an event listener to remove message
    removeButton.addEventListener("click", function(){
        //find the <li>
        const entry = removeButton.parentNode;
        //remove it
        entry.remove();
        //check if a message is removed
        toggleMessagesSection();
    });
    
    
    //append the remove button to the new message
    newMessage.appendChild(removeButton);

    //append the new message to the message list
    messageList.appendChild(newMessage);

   //toggle if exist a new message
    toggleMessagesSection();

    //clear form after submission
    messageForm.reset();
});