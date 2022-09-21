const billAmount = document.getElementById("bill-input");
const numberOfPeople = document.getElementById("people-input");
const customInput = document.getElementById("custom-input");
const displayTotalTip = document.getElementById("show-tip");
const displayTotalPerson = document.getElementById("show-total");

let tipAmount = 0;
let totalPerPerson = 0;

document.getElementById("5%").addEventListener("click", function () {
  if (numberOfPeople.value === "") {
    document.getElementById("error").style.display = "inline";
    numberOfPeople.style.border = "2px solid salmon";
  } else {
    document.getElementById("error").style.display = "none";
    numberOfPeople.style.border = "";
    tipAmount = (billAmount.value / 100) * 5;
    totalPerPerson = tipAmount / numberOfPeople.value;

    displayTotalTip.textContent = `$${tipAmount.toFixed(2)}`;
    displayTotalPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
});

document.getElementById("10%").addEventListener("click", function () {
  if (numberOfPeople.value === "") {
    document.getElementById("error").style.display = "inline";
    numberOfPeople.style.border = "2px solid salmon";
  } else {
    document.getElementById("error").style.display = "none";
    numberOfPeople.style.border = "";
    tipAmount = (billAmount.value / 100) * 10;
    totalPerPerson = tipAmount / numberOfPeople.value;

    displayTotalTip.textContent = `$${tipAmount.toFixed(2)}`;
    displayTotalPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
});

document.getElementById("15%").addEventListener("click", function () {
  if (numberOfPeople.value === "") {
    document.getElementById("error").style.display = "inline";
    numberOfPeople.style.border = "2px solid salmon";
  } else {
    document.getElementById("error").style.display = "none";
    numberOfPeople.style.border = "";
    tipAmount = (billAmount.value / 100) * 15;
    totalPerPerson = tipAmount / numberOfPeople.value;

    displayTotalTip.textContent = `$${tipAmount.toFixed(2)}`;
    displayTotalPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
});

document.getElementById("25%").addEventListener("click", function () {
  if (numberOfPeople.value === "") {
    document.getElementById("error").style.display = "inline";
    numberOfPeople.style.border = "2px solid salmon";
  } else {
    document.getElementById("error").style.display = "none";
    numberOfPeople.style.border = "";
    tipAmount = (billAmount.value / 100) * 25;
    totalPerPerson = tipAmount / numberOfPeople.value;

    displayTotalTip.textContent = `$${tipAmount.toFixed(2)}`;
    displayTotalPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
});

document.getElementById("50%").addEventListener("click", function () {
  if (numberOfPeople.value === "") {
    document.getElementById("error").style.display = "inline";
    numberOfPeople.style.border = "2px solid salmon";
  } else {
    document.getElementById("error").style.display = "none";
    numberOfPeople.style.border = "";
    tipAmount = (billAmount.value / 100) * 50;
    totalPerPerson = tipAmount / numberOfPeople.value;

    displayTotalTip.textContent = `$${tipAmount.toFixed(2)}`;
    displayTotalPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
});

document.getElementById("custom-input").addEventListener("keyup", function () {
  if (numberOfPeople.value === "") {
    document.getElementById("error").style.display = "inline";
    numberOfPeople.style.border = "2px solid salmon";
  } else {
    document.getElementById("error").style.display = "none";
    numberOfPeople.style.border = "";
    tipAmount = (billAmount.value / 100) * customInput.value;
    totalPerPerson = tipAmount / numberOfPeople.value;

    displayTotalTip.textContent = `$${tipAmount.toFixed(2)}`;
    displayTotalPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  displayTotalTip.textContent = `$0.00`;
  displayTotalPerson.textContent = `$0.00`;
  numberOfPeople.style.border = "";
  billAmount.value = null;
  numberOfPeople.value = null;
  customInput.value = null;
  document.getElementById("error").style.display = "none";
});
