/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "K"
  ];
  let palos = ["♦", "♥", "♠", "♣"];

  function cambiarCarta() {
    //write your code here

    function randomNumber(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const valorAleatorio = randomNumber(cardValues);
    const paloAleatorio = randomNumber(palos);

    let paloColor = document.querySelectorAll(".palo");
    paloColor.forEach(item => {
      paloAleatorio == "♥" || paloAleatorio == "♦"
        ? item.classList.add("red")
        : item.classList.remove("red");
    });

    document.querySelector(".cardValue").innerHTML = valorAleatorio;
    document.querySelector(".paloArriba").innerHTML = paloAleatorio;
    document.querySelector(".paloAbajo").innerHTML = paloAleatorio;
    console.log(paloAleatorio);
    console.log(paloAleatorio == "♥" || paloAleatorio == "♦");
  }
  const buttonElement = document.querySelector("#boton");
  const buttonElement2 = document.querySelector("#botonSize");

  function whatHappensOnClick() {
    cambiarCarta();
  }

  buttonElement.addEventListener("click", whatHappensOnClick);
  cambiarCarta();
  setInterval(cambiarCarta, 10000);

  function whatHappensOnClick2() {
    const width = document.querySelector("#inputWidth").value;
    const height = document.querySelector("#inputHeight").value;
    const card = document.querySelector("#carta");

    card.style.height = height ? `${height}px` : "500px";
    card.style.width = width ? `${width}px` : "380px";
  }

  buttonElement.addEventListener("click", whatHappensOnClick);
  buttonElement2.addEventListener("click", whatHappensOnClick2);
};
