// TODO: Which element is the following line of code selecting? 
//interactive picture screen where you can move fowards and backwards with arrow keys 
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
//adding the interactive buttons to the carousel. making it interactive 
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0; // ray of images use 
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";//current background of the carasoul

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//cling the arrow keys 
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//moves to the next slide. assigning feature 
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  //prevents further propagation of the current even in the capturing and bubbling phase
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//moves to the previous slide.assigning feature 
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    //???
  event.stopPropagation();

  navigate(-1);
});

navigate(0);


//what is life 