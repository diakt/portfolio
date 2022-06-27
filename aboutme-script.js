//footer! footer!


//footer DOM objects
const gitHubLogo = document.getElementById("github-logo");
const linkedinLogo = document.getElementById("linkedin-logo");
const twitterLogo = document.getElementById("twitter-logo")
const spotifyLogo = document.getElementById("spotify-logo");
const sciHubLogo = document.getElementById("scihub-logo")

//footer event listeners
gitHubLogo.addEventListener("click", function(){newWindow("https://github.com/diakt")});
linkedinLogo.addEventListener("click", function(){newWindow("https://www.linkedin.com/in/gavin-southerland-756838176/")});
twitterLogo.addEventListener("click", function(){newWindow("https://twitter.com/diaktyl")});
spotifyLogo.addEventListener("click", function(){newWindow("https://open.spotify.com/user/eightplusandunder?si=dae3dc688bf34480")});
sciHubLogo.addEventListener("click", function(){newWindow("https://sci-hub.se/donate")});


//functions for footer event listeners
function sayHello() {
    console.log("hello from sayHello!");
    return null;
}

function sameWindow(link){
    window.location.href = link;
}

function newWindow(link) {
    window.open(link, '_blank')
}













