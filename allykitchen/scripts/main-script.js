function setOn(myDivId) {
    document.getElementById(myDivId).style.display='block';
}

function setOff(myDivId) {
    document.getElementById(myDivId).style.display='none';
}

var staticVid = "https://player.vimeo.com/video/227149526?&autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0s&controls=0&muted=1#t=14s";
var x = "https://player.vimeo.com/video/441412618?&autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0s&controls=0&muted=1";
var defaultVid ="vids/food-home.mp4#t=5"
var y = "vids/Coffee_Friends.mp4#t=4"
function updateVid() {
    document.getElementById('vid-static').src = y;
}
function restoreVid(temp=defaultVid) {
    document.getElementById('vid-static').src = temp;
}

function hideThis(myElementId) {
    document.getElementById(myElementId).style.display= 'none';
}

function unhideThis(myElementId) {
    document.getElementById(myElementId).style.display= 'block';
}