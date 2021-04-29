function setOn(myDivId) {
    document.getElementById(myDivId).style.display='block';
}

function setOff(myDivId) {
    document.getElementById(myDivId).style.display='none';
}

//let staticVid = "https://player.vimeo.com/video/227149526?&autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0s&controls=0&muted=1#t=14s";
//let x = "https://player.vimeo.com/video/441412618?&autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0s&controls=0&muted=1";

let defaultVid ="vids/food-home.mp4#t=5"
let y = "vids/Coffee_Friends.mp4#t=4"
function updateVid() {
    document.getElementById('vid-static').src = y;
}
function restoreVid(temp=defaultVid) {
    document.getElementById('vid-static').src = temp;
}

function clickedOn(myDivId) {
    let icon = document.getElementById(myDivId);
    let ab = document.querySelector(".mobile-nav-icon");
    if (icon.style.display === "none") {
        icon.style.display = "block";
        ab.classList.add("active");
    } else {
        icon.style.display = "none";
        ab.classList.remove("active");
    }
}
