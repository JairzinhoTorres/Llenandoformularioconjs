/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let form = document.querySelector("form");

  function enviarDatos(e) {
    e.preventDefault();
    let Cosorojo = document.getElementById("Cosorojo");
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let postalCode = document.getElementById("postalCode");
    let textarea = document.getElementById("textarea");

    console.log(card.value);
    console.log(cvc.value);
    console.log(amount.value);
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(city.value);
    console.log(postalCode.value);
    console.log(textarea.value);

    let todobien = true;
    if (card.value === "") {
      alert("El campo Card # está vacio");
      card.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (card.value === "") {
      alert("El campo Card # está vacio");
      card.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (cvc.value === "") {
      alert("El campo cvc está vacio");
      cvc.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (amount.value === "") {
      alert("El campo amount está vacio");
      amount.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (firstName.value === "") {
      alert("El campo First Name está vacio");
      firstName.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (lastName.value === "") {
      alert("El campo lastName está vacio");
      lastName.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (city.value === "") {
      alert("El campo city está vacio");
      city.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (postalCode.value === "") {
      alert("El campo Postal Code está vacio");
      postalCode.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (textarea.value === "") {
      alert("El campo Example textarea está vacio");
      textarea.style.backgroundColor = "pink";
      Cosorojo.style.display = "block";
      todobien = false;
    }
    if (select.value === "Pick a state") {
      document.querySelector("select").style.background = "pink";
      todobien = false;
    }
    if (todobien === false);
  }

  function showAlert() {
    document.querySelector(".alert-danger").style.visibility = "visible";
  }
  form.addEventListener("submit", enviarDatos);

  //console.log("Hello Rigo from the console!");
};
