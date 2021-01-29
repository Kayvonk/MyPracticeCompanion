var headingArray = [
    {
        heading: "Scale Practice - A modal approach to playing",
        instructions: "Using the buttons below, you can practice the different modes associated with the C Major scale. Clicking the play button will play the scale for you. Next, you can have some fun by playing along with any of the available backing tracks. Lastly, check out some music that makes use of each scale.Hope you enjoy your practice!"
    },
    {
        heading: "Let's Play the Blues",

        instructions: "Time to practice some blues! Clicking \"Blues Backing Track\" will dynamically pull a C blues backing track from Youtube."
    }
]

var keyArray = [
    {
        key: "C Major",
        steps: "W-W-h-W-W-W-h",
        intervals: "1-2-3-4-5-6-7-1",
        figure: "./assets/C-major.PNG",
        sound: "./assets/C-major-audio.mp3",
        backingText: "Backing Track in C major:",
        popularText: "C Major in popular music:",
        backingUrl: "https://www.youtube.com/embed/Rk72m9bLrBo",
        popularUrl: "https://www.youtube.com/embed/QxTBtHsh408",
    },
    {
        key: "D Dorian",
        steps: "W-h-W-W-W-h-W",
        intervals: "1-2-b3-4-5-6-b7-1",
        figure: "./assets/D-dorian.PNG",
        sound: "./assets/D-dorian-audio.mp3",
        backingText: "Backing Track in D Dorian:",
        popularText: "D Dorian in popular music:",
        backingUrl: "https://www.youtube.com/embed/ldIlMNRSUok",
        popularUrl: "https://www.youtube.com/embed/zz8frWcmthA"
    },
    {
        key: "E Phrygian",
        steps: "h-W-W-W-h-W-W",
        intervals: "1-b2-b3-4-5-b6-b7-1",
        figure: "./assets/E-phrygian.PNG",
        sound: "./assets/E-phrygian-audio.mp3",
        backingText: "Backing Track in E Phrygian:",
        popularText: "E Phrygian in popular music:",
        backingUrl: "https://www.youtube.com/embed/i_YV8uxzFac",
        popularUrl: "https://www.youtube.com/embed/nXrygUZPrII"
    },
    {
        key: "F Lydian",
        steps: "W-W-W-h-W-W-h",
        intervals: "1-2-3-#4-5-6-7-1",
        figure: "./assets/F-lydian.PNG",
        sound: "./assets/F-lydian-audio.mp3",
        backingText: "Backing Track in F Lydian:",
        popularText: "F Lydian in popular music:",
        backingUrl: "https://www.youtube.com/embed/NE6wOVqBpEs",
        popularUrl: "https://www.youtube.com/embed/OnxkfLe4G74"
    },
    {
        key: "G Mixolydian",
        steps: "W-W-h-W-W-h-W",
        intervals: "1-2-3-4-5-6-b7-1",
        figure: "./assets/G-mixolydian.PNG",
        sound: "./assets/G-mixolydian-audio.mp3",
        backingText: "Backing Track in G Mixolydian:",
        popularText: "G Mixolydian in popular music:",
        backingUrl: "https://www.youtube.com/embed/RW5T_OgjJ3k",
        popularUrl: "https://www.youtube.com/embed/-488UORrfJ0"
    },
    {
        key: "A Aeolian",
        steps: "W-h-W-W-h-W-W",
        intervals: "1-2-b3-4-5-b6-b7-1",
        figure: "./assets/A-aeolian.PNG",
        sound: "./assets/A-aeolian-audio.mp3",
        backingText: "Backing Track in A Aeolian:",
        popularText: "A Aeolian in popular music:",
        backingUrl: "https://www.youtube.com/embed/z-nad4pCGus",
        popularUrl: "https://www.youtube.com/embed/jvRumkRr6Nc"
    },
    {
        key: "B Locrian",
        steps: "h-W-W-h-W-W-W",
        intervals: "1-b2-b3-4-b5-b6-b7-1",
        figure: "./assets/B-locrian.PNG",
        sound: "./assets/B-locrian-audio.mp3",
        backingText: "Backing Track in B Locrian:",
        popularText: "B Locrian in popular music:",
        backingUrl: "https://www.youtube.com/embed/aDwr_R5bWY0",
        popularUrl: "https://www.youtube.com/embed/vjAIZ9wQAnc"
    }
]

//Display function
function bluesChart() {
    var chart = document.createElement("img");
    chart.className = "image";
    chart.src = "./assets/basic-blues.PNG";
    var bluesChart = document.getElementById("bluesChart");
    bluesChart.appendChild(chart);
}
bluesChart()

function pageLoad() {
    document.getElementById("heading").textContent = headingArray[0].heading;
    document.getElementById("instructions").textContent = headingArray[0].instructions;
    $("#bluesChart").hide();
    $('#bluesVideo').hide();
}

pageLoad();

function displayEl(index) {
    var image = document.createElement("img")
    image.src = keyArray[index].figure
    document.getElementById("figureImage").append(image)
    document.getElementById("appendKey").textContent = keyArray[index].key;
    document.getElementById("appendSteps").textContent = keyArray[index].steps;
    document.getElementById("appendIntervals").textContent = keyArray[index].intervals;
    document.getElementById("backingText").textContent = keyArray[index].backingText;
    document.getElementById("popularText").textContent = keyArray[index].popularText;
    var playButton = document.createElement("a");
    playButton.className = "button is-primary"
    var playField = document.getElementById("play")
    playField.append(playButton)
    playButton.innerHTML = "Play";
    playButton.addEventListener('click', myPlay);
    function myPlay() {
        var audio = new Audio(keyArray[index].sound);
        audio.play()
    }
}

// navigation tabs
document.getElementById("bluesTab").onclick = function () {
    playVideo();
    document.getElementById("heading").textContent = headingArray[1].heading;
    document.getElementById("instructions").textContent = headingArray[1].instructions;
    $("#btnCol").hide();
    $("#figureImage").hide();
    $("#appendKey").hide();
    $("#appendSteps").hide();
    $("#appendIntervals").hide();
    $("#backingText").hide();
    $("#popularText").hide();
    $("#bluesChart").show();
    $("#blues-backing").show();
    $("#backing-track").hide();
    $("#popular-song").hide();
    $('bluesVideo').show()
    $("#play").hide();
}

var playBlues = document.getElementById("playBlues")
function playVideo() {
    var bluesBtn = document.createElement("a");
    bluesBtn.className = "button is-info is-rounded";
    bluesBtn.innerHTML = 'C Blues Backing Track';
    bluesBtn.id = 'playMe';
    playBlues.append(bluesBtn);
    $('#bluesVideo').show();
    document.getElementById('popular-song').innerHTML = ''
    document.getElementById('backing-track').innerHTML = ''
    document.getElementById("playMe").addEventListener("click", getVideo);
}

document.getElementById("scalesTab").onclick = function () {
    document.getElementById("heading").textContent = headingArray[0].heading;
    document.getElementById("instructions").textContent = headingArray[0].instructions;
    $("#btnCol").show();
    $("#figureImage").show();
    $("#appendKey").show();
    $("#appendSteps").show();
    $("#appendIntervals").show();
    $("#backingText").show();
    $("#popularText").show();
    $("#bluesChart").hide();
    $("#backing-track").show();
    $("#popular-song").show();
    $("#youtubeVideo").empty();
    $("#playMe").empty();
    $('#bluesVideo').hide();
    $('#playMe').hide();
    $("#play").show();
}

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
        document.getElementById('play').innerHTML = "";
        document.getElementById('figureImage').innerHTML = "";
        displayEl(index);
        backingVideo(keyArray[index].backingUrl);
        popularVideo(keyArray[index].popularUrl);
    })
}

for (let b = 0; b < 7; b++) {
    addButtons(b)
}

//Counter
function counterButtons(index) {
    var counterBtns = document.getElementById("counterBtns")
    var upBtn = document.createElement("button");
    upBtn.className = "button is-small is-danger upBtn mx-1";
    var downBtn = document.createElement("button");
    downBtn.className = "button is-small is-danger downBtn";
    var clearBtn = document.createElement("button");
    clearBtn.className = "button is-small is-danger clearBtn";
    var spanUp = document.createElement("span");
    spanUp.className = "icon";
    var spanDown = document.createElement("span");
    spanDown.className = "icon";
    var spanClear = document.createElement("span");
    spanClear.className = "icon";
    var upIcon = document.createElement("i")
    upIcon.className = "fas fa-arrow-up fa-lg";
    var downIcon = document.createElement("i")
    downIcon.className = "fas fa-arrow-down fa-lg";
    var clearIcon = document.createElement("i")
    clearIcon.className = "fas fa-eraser";
    spanUp.append(upIcon)
    spanDown.append(downIcon)
    spanClear.append(clearIcon)
    downBtn.append(spanDown);
    upBtn.append(spanUp);
    clearBtn.append(spanClear);
    counterBtns.append(downBtn, upBtn, clearBtn);

    var counter = document.getElementById("counter")
    var count = localStorage.getItem("count");
    $(window).on('load', function () {
        count = parseInt(localStorage.getItem("count") || 0);
        counter.innerHTML = count;
    });

    upBtn.addEventListener("click", function () {
        count += 30;
        counter.innerHTML = count;

        localStorage.setItem("count", count);
    });
    downBtn.addEventListener("click", function () {
        if (count > 0) {
            count -= 30;
            counter.innerHTML = count;

            localStorage.setItem("count", count);
        }
    });
    clearBtn.addEventListener("click", function () {
        localStorage.clear();
        count = 0;
        counter.innerHTML = count;
    });
}
counterButtons();

// Video Embeds
function backingVideo(backingSrc) {
    //clear container element to get ready for new video
    document.getElementById('backing-track').innerHTML = ''
    // creates iframe
    let backingVideo = document.createElement('iframe')
    // create a src attribute on the iframe
    backingVideo.setAttribute('src', backingSrc)
    backingVideo.setAttribute('height', '315')
    backingVideo.setAttribute('width', '560')
    backingVideo.setAttribute('frameborder', '0')
    backingVideo.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
    backingVideo.setAttribute('allowfullscreen', '')
    // Inject dynamically created video into the DOM container
    document.getElementById('backing-track').appendChild(backingVideo)
}

function popularVideo(popularSrc) {
    //clear container element to get ready for new video
    document.getElementById('popular-song').innerHTML = ''
    // creates iframe
    let popularVideo = document.createElement('iframe')
    // create a src attribute on the iframe
    popularVideo.setAttribute('src', popularSrc)
    popularVideo.setAttribute('height', '315')
    popularVideo.setAttribute('width', '560')
    popularVideo.setAttribute('frameborder', '0')
    popularVideo.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
    popularVideo.setAttribute('allowfullscreen', '')
    // Inject dynamically created video into the DOM container
    document.getElementById('popular-song').appendChild(popularVideo)
}

function bluesBacking(bluesSrc) {
    //clear container element to get ready for new video
    document.getElementById('bluesVideo').innerHTML = ''
    // creates iframe
    let bluesVideo = document.createElement('iframe')
    // create a src attribute on the iframe
    popularVideo.setAttribute('src', bluesSrc)
    popularVideo.setAttribute('height', '315')
    popularVideo.setAttribute('width', '560')
    popularVideo.setAttribute('frameborder', '0')
    popularVideo.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
    popularVideo.setAttribute('allowfullscreen', '')
    // Inject dynamically created video into the DOM container
    document.getElementById('bluesVideo').appendChild(bluesVideo)
}

// Youtube API call to get videos for C blues backing track. The function will pull 5 results if successful
// the embed function video will be ran, which will put the video into an iframe.

function getVideo() {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyAFKENpfagXiiMiXbcuNBpelI8r3l8VcvU',
            q: "c blues backing",
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            videoEmbeddable: true,

        },
        success: function (data) {
            embedVideo(data);
            console.log(data)

        },
        error: function (response) {
            console.log("Request Failed");
        },
    });

}

function embedVideo(data) {
    $('#bluesVideo').attr({ 'src': 'https://www.youtube.com/embed/' + data.items[Math.floor(Math.random() * 4) + 1].id.videoId, 'height': '315', 'width': '560' })
}

