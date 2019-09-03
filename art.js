"use sctrict";
window.addEventListener("DOMContentLoaded", init());

function init() {
  artworkOne();
  artworkTwo();
  artworkThree();
  artworkFour();
  artworkFive();
  artworkSix();
  artworkSeven();
  artworkEight();
  artworkNine();
}

function artworkOne() {
  for (let i = 100; i <= 300; i += 20) {
    const box = document.createElement("div");
    box.style.height = i + "px";
    box.style.width = i + "px";
    box.classList.add("box");
    document.querySelector("#artwork1").append(box);
  }
}

function artworkTwo() {
  for (let i = 0; i <= 90; i += 10) {
    const box = document.createElement("div");
    box.style.transform = "rotate(" + i + "deg)";
    box.classList.add("box");
    document.querySelector("#artwork2").append(box);
  }
}

function artworkThree() {
  for (let i = 0; i <= 200; i += 10) {
    const circle = document.createElement("div");
    circle.style.height = i + "px";
    circle.style.width = i + "px";
    circle.classList.add("circle");
    document.querySelector("#artwork3").append(circle);
  }
}

function artworkFour() {
  for (let i = -90; i <= 90; i += 20) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.transform = "translate(" + i + "px," + i + "px)";
    document.querySelector("#artwork4").append(box);
  }
}

function artworkFive() {
  for (let i = 1; i <= 256; i *= 2) {
    const circle = document.createElement("div");
    circle.style.height = i + "px";
    circle.style.width = i + "px";
    circle.classList.add("circle");
    document.querySelector("#artwork5").append(circle);
  }
}

function artworkSix() {
  for (let i = -20; i <= 45; i += 5) {
    const circle = document.createElement("div");
    circle.style.transform = `translateX(${i - 50}px) rotate(${i * 4}deg)`;
    circle.classList.add("circle");
    document.querySelector("#artwork6").append(circle);
  }
}

function artworkSeven() {
  for (let i = 0; i <= 200; i += 10) {
    const circle = document.createElement("div");
    circle.style.height = i + "px";
    circle.style.width = i + "px";
    circle.style.transform = `translateX(${i}px) translateY(${-i / 2}px)`;
    circle.classList.add("circle");
    document.querySelector("#artwork7").append(circle);
  }
}

function artworkEight() {
  for (let i = 50; i <= 200; i += 10) {
    const box = document.createElement("div");
    box.style.height = i + "px";
    box.style.width = i + "px";
    box.style.transform = `translateX(${i / 2}px) rotate(${i}deg)`;
    box.classList.add("box");
    document.querySelector("#artwork8").append(box);
  }
}

function artworkNine() {
  for (let i = 50; i <= 200; i += 30) {
    const box = document.createElement("div");
    const circle = document.createElement("div");
    box.style.width = i + "px";
    box.style.height = i + "px";
    circle.style.height = i + "px";
    circle.style.width = i + "px";
    box.classList.add("box");
    circle.classList.add("circle");
    document.querySelector("#artwork9").append(box);
    document.querySelector("#artwork9").append(circle);
  }
}
