document
  .getElementById("tipsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let billInput = document.getElementById("bill-input");
    let bill = parseFloat(billInput.value);

    let peopleNumberInput = document.getElementById("people-number");
    let people = parseInt(peopleNumberInput.value);

    let tipAmount = document.getElementById("amount");
    let tip = parseInt(tipAmount.value);

    let errorMessage = document.getElementById("zero-message");


    if (isNaN(bill)) {
      alert(`can't be empty or whatever "${billInput.value}" is`);
    }

    if (people === 0) {
      errorMessage.style.display = "block";
      peopleNumberInput.style.outline = "1px solid hsl(11, 36%, 58%)"
    } 

  });


const billInput = document.getElementById("bill-input");
const peopleNumberInput = document.getElementById("people-number");
const tipAmount = document.getElementById("amount");
const total = document.getElementById("total");
const errorMessage = document.getElementById("zero-message");

const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twentyfive = document.getElementById('twenty-five');
const fifty = document.getElementById('fifty');
const customInput = document.getElementById('custom');
const custom = parseInt(customInput.value);

// 5% BUTTON

five.addEventListener('click', function() {
    const bill = parseFloat(billInput.value) || 0;
    let people = parseInt(peopleNumberInput.value) || 1;

    if (people === 0) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const tip = (bill / 100) * 5;
    tipAmount.textContent = tip.toFixed(2);
    total.textContent = ((bill + tip) / people).toFixed(2);
});

// 10% BUTTON

ten.addEventListener('click', function() {
    const bill = parseFloat(billInput.value) || 0;
    let people = parseInt(peopleNumberInput.value) || 1;

    if (people === 0) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const tip = (bill / 100) * 10;
    tipAmount.textContent = tip.toFixed(2);
    total.textContent = ((bill + tip) / people).toFixed(2);
});

// 15% BUTTON

fifteen.addEventListener('click', function() {
    const bill = parseFloat(billInput.value) || 0;
    let people = parseInt(peopleNumberInput.value) || 1;

    if (people === 0) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const tip = (bill / 100) * 15;
    tipAmount.textContent = tip.toFixed(2);
    total.textContent = ((bill + tip) / people).toFixed(2);
});

// 25% BUTTON

twentyfive.addEventListener('click', function() {
    const bill = parseFloat(billInput.value) || 0;
    let people = parseInt(peopleNumberInput.value) || 1;

    if (people === 0) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const tip = (bill / 100) * 25;
    tipAmount.textContent = tip.toFixed(2);
    total.textContent = ((bill + tip) / people).toFixed(2);
});

// 50% BUTTON

fifty.addEventListener('click', function() {
    const bill = parseFloat(billInput.value) || 0;
    let people = parseInt(peopleNumberInput.value) || 1;

    if (people === 0) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const tip = (bill / 100) * 50;
    tipAmount.textContent = tip.toFixed(2);
    total.textContent = ((bill + tip) / people).toFixed(2);
});

// CUSTOM BUTTON

customInput.addEventListener('click', function() {
    const bill = parseFloat(billInput.value) || 0;
    let people = parseInt(peopleNumberInput.value) || 1;

    if (people === 0) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const tip = (bill / 100) * parseInt(customInput.value);
    tipAmount.textContent = tip.toFixed(2);
    total.textContent = ((bill + tip) / people).toFixed(2);
});

// RESET BUTTON

reset.addEventListener('click', function(){
        billInput.value = 0;
        peopleNumberInput.value = 1;
        tipAmount.textContent = "$0.00";
        total.textContent = "$0.00"
        return;
    })
