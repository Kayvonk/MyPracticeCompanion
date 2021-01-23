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
    count += .5;
    counter.innerHTML = count;

    localStorage.setItem("count", count);
});
downButton.addEventListener("click", function () {
    count += .5;
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