
const spring = [
    "spring0.jpg",
    "spring1.jpg",
    "spring2.jpg",
]
const summer = [
    "summer0.jpg",
    "summer1.jpg",
    "summer2.jpg",
]
const fall = [
    "fall0.jpg",
    "fall1.jpg",
    "fall2.jpg",
]
const winter = [
    "winter0.jpg",
    "winter1.jpg",
    "winter2.jpg",
]

const today = new Date();
const month = today.getMonth() + 1;

let images = [];
let weather = "";

if(month <= 3){
    images = spring;
    weather = "spring";
} else if(month <= 6){
    images = summer;
    weather = "summer";
} else if(month <=9){
    images = fall;
    weather = "fall";
} else if(month <= 12){
    images = winter;
    weather = "winter";
}

const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.body.style;

body.backgroundImage = `url('img/${weather}/${chosenImage}')`;
body.backgroundPosition = "center";
body.backgroundSize = "cover";


