var keyArray = [
    {
        key: "C Major",
        steps: "W-W-h-W-W-W-h",
        intervals: "1-2-3-4-5-6-7-1",
        figure: "./assets/C-major.PNG",
        backingText: "Backing Track in C major:",
        popularText: "C Major in popular music:",
    },
    {
        key: "D Dorian",
        steps: "W-h-W-W-W-h-W",
        intervals: "1-2-b3-4-5-6-b7-1",
        figure: "./assets/D-dorian.PNG",
        backingText: "Backing Track in D Dorian:",
        popularText: "D Dorian in popular music:"

    },
    {
        key: "E Phrygian",
        steps: "h-W-W-W-h-W-W",
        intervals: "1-b2-b3-4-5-b6-b7-1",
        figure: "./assets/E-phrygian.PNG",
        backingText: "Backing Track in E Phrygian:",
        popularText: "E Phrygian in popular music:"

    },
    {
        key: "F Lydian",
        steps: "W-W-W-h-W-W-h",
        intervals: "1-2-3-#4-5-6-7-1",
        figure: "./assets/F-lydian.PNG",
        backingText: "Backing Track in F Lydian:",
        popularText: "F Lydian in popular music:"

    },
    {
        key: "G Mixolydian",
        steps: "W-W-h-W-W-h-W",
        intervals: "1-2-3-4-5-6-b7-1",
        figure: "./assets/G-mixolydian.PNG",
        backingText: "Backing Track in G Mixolydian:",
        popularText: "G Mixolydian in popular music:"

    },
    {
        key: "A Aeolian",
        steps: "W-h-W-W-h-W-W",
        intervals: "1-2-b3-4-5-b6-b7-1",
        figure: "./assets/A-aeolian.PNG",
        backingText: "Backing Track in A Aeolian:",
        popularText: "A Aeolian in popular music:"

    },
    {
        key: "B Locrian",
        steps: "h-W-W-h-W-W-W",
        intervals: "1-b2-b3-4-b5-b6-b7-1",
        figure: "./assets/B-locrian.PNG",
        backingText: "Backing Track in B Locrian:",
        popularText: "B Locrian in popular music:"

    }
]

//Counter
var counter = document.querySelector("#counter");
var upButton = document.querySelector("#upBtn");
var downButton = document.querySelector("#downBtn");
var count = localStorage.getItem("count");

$(window).on('load', function () {
    count = parseInt(localStorage.getItem("count") || 0);
    counter.innerHTML = count;
});

upButton.addEventListener("click", function () {
    count += 15;
    counter.innerHTML = count;

    localStorage.setItem("count", count);
});
downButton.addEventListener("click", function () {
    count -= 15;
    counter.innerHTML = count;

    localStorage.setItem("count", count);
});
document.getElementById("clearBtn").onclick = function () {
    localStorage.clear();
    count = 0;
    counter.innerHTML = count;
}
//Display function
function displayEl(index) {
    var image = document.createElement("img")
    image.src = keyArray[index].figure
    document.getElementById("figureImage").append(image)
    document.getElementById("appendKey").textContent = keyArray[index].key;
    document.getElementById("appendSteps").textContent = keyArray[index].steps;
    document.getElementById("appendIntervals").textContent = keyArray[index].intervals;
    document.getElementById("backingText").textContent = keyArray[index].backingText;
    document.getElementById("popularText").textContent = keyArray[index].popularText;
}
//Button Clicks
document.getElementById("CBtn").onclick = function () {
    document.getElementById('figureImage').innerHTML = "";
    displayEl(0);
}
document.getElementById("DBtn").onclick = function () {
    document.getElementById('figureImage').innerHTML = "";
    displayEl(1);
}
document.getElementById("EBtn").onclick = function () {
    document.getElementById('figureImage').innerHTML = "";
    displayEl(2);
}
document.getElementById("FBtn").onclick = function () {
    document.getElementById('figureImage').innerHTML = "";
    displayEl(3);
}
document.getElementById("GBtn").onclick = function () {
    document.getElementById('figureImage').innerHTML = "";
    displayEl(4);
}
document.getElementById("ABtn").onclick = function () {
    document.getElementById('figureImage').innerHTML = "";
    displayEl(5);
}
document.getElementById("BBtn").onclick = function () {
    document.getElementById('figureImage').innerHTML = "";
    displayEl(6);
}
// embedded video and clearing after a different button click


document.getElementById('CBtn').addEventListener('click', function(){
	console.log('works');
	showVideo('https://www.youtube.com/embed/QxTBtHsh408')
})
document.getElementById('DBtn').addEventListener('click', function(){
	console.log('works');
	showVideo('https://www.youtube.com/embed/zz8frWcmthA')
})
document.getElementById('EBtn').addEventListener('click', function(){
	console.log('works');
	showVideo('https://www.youtube.com/embed/nXrygUZPrII')
})
document.getElementById('FBtn').addEventListener('click', function(){
	console.log('works');
	showVideo('https://www.youtube.com/embed/OnxkfLe4G74')
})
document.getElementById('GBtn').addEventListener('click', function(){
	console.log('works');
	showVideo('https://www.youtube.com/embed/-488UORrfJ0')
})
document.getElementById('ABtn').addEventListener('click', function(){
	console.log('works');
	showVideo('https://www.youtube.com/embed/jvRumkRr6Nc')
})
document.getElementById('BBtn').addEventListener('click', function(){
	console.log('works');
	showVideo('https://www.youtube.com/embed/vjAIZ9wQAnc"')
})

function showVideo(srcValue){
	//clear container element to get ready for new video
	document.getElementById('popular-song').innerHTML = ''
	// creates iframe
	let myVideo = document.createElement('iframe')
	// create a src attribute on the iframe
	myVideo.setAttribute('src', srcValue)
	myVideo.setAttribute('height', '315')
	myVideo.setAttribute('width', '560')
	myVideo.setAttribute('frameborder', '0')
	myVideo.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
	myVideo.setAttribute('allowfullscreen', '')
	console.log(myVideo);
	// Inject dynamically created video into the DOM container
	document.getElementById('popular-song').appendChild(myVideo)
}