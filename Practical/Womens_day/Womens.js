const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

let x = (window.innerWidth / 2 - e.pageX) / 25;
let y = (window.innerHeight / 2 - e.pageY) / 25;

card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});


window.addEventListener("scroll", function(){

let scroll = window.scrollY;

document.querySelector(".layer-back").style.transform =
`translateY(${scroll * 0.2}px)`;

document.querySelector(".layer-mid").style.transform =
`translateY(${scroll * 0.4}px)`;

document.querySelector(".layer-front").style.transform =
`translateY(${scroll * 0.7}px)`;

});