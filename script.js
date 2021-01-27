var headingArray = [
    {
        heading: "Scale Practice - A modal approach to playing",
        instructions: "Using the buttons below, you can practice the different modes associated with the C Major scale. Clicking the play button will play the scale for you. Next, you can have some fun by playing along with any of the available backing tracks. Lastly, check out some music that makes use of each scale.Hope you enjoy your practice!"
    },
    {
        heading: "Let's Play the Blues",
        instructions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dignissimos iste ut ab ex velit dolorum voluptate rem quibusdam quaerat, tenetur ad consequatur vitae veritatis odit expedita id officiis magni?"
    }
]

var keyArray = [
    {
        key: "C Major",
        steps: "W-W-h-W-W-W-h",
        intervals: "1-2-3-4-5-6-7-1",
        figure: "./assets/C-major.PNG",
        backingText: "Backing Track in C major:",
        popularText: "C Major in popular music:",
        popularUrl: "https://www.youtube.com/embed/QxTBtHsh408"
    },
    {
        key: "D Dorian",
        steps: "W-h-W-W-W-h-W",
        intervals: "1-2-b3-4-5-6-b7-1",
        figure: "./assets/D-dorian.PNG",
        backingText: "Backing Track in D Dorian:",
        popularText: "D Dorian in popular music:",
        popularUrl: "https://www.youtube.com/embed/zz8frWcmthA"

    },
    {
        key: "E Phrygian",
        steps: "h-W-W-W-h-W-W",
        intervals: "1-b2-b3-4-5-b6-b7-1",
        figure: "./assets/E-phrygian.PNG",
        backingText: "Backing Track in E Phrygian:",
        popularText: "E Phrygian in popular music:",
        popularUrl: "https://www.youtube.com/embed/nXrygUZPrII"

    },
    {
        key: "F Lydian",
        steps: "W-W-W-h-W-W-h",
        intervals: "1-2-3-#4-5-6-7-1",
        figure: "./assets/F-lydian.PNG",
        backingText: "Backing Track in F Lydian:",
        popularText: "F Lydian in popular music:",
        popularUrl: "https://www.youtube.com/embed/OnxkfLe4G74"

    },
    {
        key: "G Mixolydian",
        steps: "W-W-h-W-W-h-W",
        intervals: "1-2-3-4-5-6-b7-1",
        figure: "./assets/G-mixolydian.PNG",
        backingText: "Backing Track in G Mixolydian:",
        popularText: "G Mixolydian in popular music:",
        popularUrl: "https://www.youtube.com/embed/-488UORrfJ0"

    },
    {
        key: "A Aeolian",
        steps: "W-h-W-W-h-W-W",
        intervals: "1-2-b3-4-5-b6-b7-1",
        figure: "./assets/A-aeolian.PNG",
        backingText: "Backing Track in A Aeolian:",
        popularText: "A Aeolian in popular music:",
        popularUrl: "https://www.youtube.com/embed/jvRumkRr6Nc"

    },
    {
        key: "B Locrian",
        steps: "h-W-W-h-W-W-W",
        intervals: "1-b2-b3-4-b5-b6-b7-1",
        figure: "./assets/B-locrian.PNG",
        backingText: "Backing Track in B Locrian:",
        popularText: "B Locrian in popular music:",
        popularUrl: "https://www.youtube.com/embed/vjAIZ9wQAnc"

    }
]

//Display function
function pageLoad() {
    document.getElementById("heading").textContent = headingArray[0].heading;
    document.getElementById("instructions").textContent = headingArray[0].instructions;
    document.getElementById("bluesChart").style.display = "none";

}
pageLoad();

function bluesChart() {
    var chart = document.createElement("img");
    chart.className = "image";
    chart.src = "./assets/basic-blues.PNG";
    var src = document.getElementById("bluesChart");
    src.appendChild(chart);
}
bluesChart()

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

// show/hide
document.getElementById("bluesTab").onclick = function () {
    document.getElementById("heading").textContent = headingArray[1].heading;
    document.getElementById("instructions").textContent = headingArray[1].instructions;
}
document.getElementById("scalesTab").onclick = function () {
    document.getElementById("heading").textContent = headingArray[0].heading;
    document.getElementById("instructions").textContent = headingArray[0].instructions;
}

$("#scalesTab").click(function () {
    $("#btnCol").show();
    $("#figureImage").show();
    $("#appendKey").show();
    $("#appendSteps").show();
    $("#appendIntervals").show();
    $("#backingText").show();
    $("#popularText").show();
    $("#bluesChart").hide();
    $("#popular-song").show();
});


$("#bluesTab").click(function () {
    $("#btnCol").hide();
    $("#figureImage").hide();
    $("#appendKey").hide();
    $("#appendSteps").hide();
    $("#appendIntervals").hide();
    $("#backingText").hide();
    $("#popularText").hide();
    $("#bluesChart").show();
    $("#popular-song").hide();
});


// generate buttons
var buttons = document.getElementById("btnCol")
function addButtons(index) {
    var btnDiv = document.createElement("div");
    btnDiv.className = "field";
    var keyBtn = document.createElement("a");
    keyBtn.className = "button is-info is-rounded";
    keyBtn.innerHTML = keyArray[index].key;
    btnDiv.append(keyBtn);
    buttons.append(btnDiv);
    keyBtn.addEventListener("click", function () {
        document.getElementById('figureImage').innerHTML = "";
        displayEl(index);
    });
    keyBtn.addEventListener('click', function () {
        showVideo(keyArray[index].popularUrl);
    })
}

for (let b = 0; b < 7; b++) {
    addButtons(b)
}

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
    count += 30;
    counter.innerHTML = count;

    localStorage.setItem("count", count);
});
downButton.addEventListener("click", function () {
    count -= 30;
    counter.innerHTML = count;

    localStorage.setItem("count", count);
});
document.getElementById("clearBtn").onclick = function () {
    localStorage.clear();
    count = 0;
    counter.innerHTML = count;
}

function showVideo(srcValue) {
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