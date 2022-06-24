

//event listeners


//header DOM objects
const myName = document.getElementById("my-name");
console.log(myName)
const aboutMe = document.getElementById("directory-item-aboutme");
const rowing = document.getElementById("directory-item-rowing");
const firefighting = document.getElementById("directory-item-firefighting");
const books = document.getElementById("directory-item-books");
const resume = document.getElementById("directory-item-resume");
const projects = document.getElementById("directory-item-projects");



//header event listeners
myName.addEventListener("click", function(){sameWindow("home.html")});
aboutMe.addEventListener("click", function(){newWindow("aboutme.html")});
rowing.addEventListener("click", function(){newWindow("https://wikipedia.org")});
firefighting.addEventListener("click", function(){newWindow("https://wikipedia.org")});
books.addEventListener("click", function(){newWindow("https://wikipedia.org")});
resume.addEventListener("click", function(){newWindow("https://wikipedia.org")});
projects.addEventListener("click", function(){newWindow("https://wikipedia.org")});



//footer DOM objects
const linkedinLogo = document.getElementById("linkedin-logo");
const githubLogo = document.getElementById("github-logo");
const spotifyLogo = document.getElementById("spotify-logo");
const sciHub = document.getElementById("sci-hub")

//footer event listeners
linkedinLogo.addEventListener("click", function(){newWindow("https://wikipedia.org")});
githubLogo.addEventListener("click", function(){newWindow("https://wikipedia.org")});
spotifyLogo.addEventListener("click", function(){newWindow("https://open.spotify.com/user/eightplusandunder?si=dae3dc688bf34480")});


//functions for footer event listeners
function sayHello() {
    console.log("hello from sayHello!");
    return null;
}

function sameWindow(link){
    window.open(link);
}

function newWindow(link) {
    window.open(link, '_blank')
}













