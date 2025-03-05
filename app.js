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

    let total = document.getElementById("total");

    let errorMessage = document.getElementById("zero-message");

    const reset = document.getElementById('reset');

    const five = document.getElementById('five');
    const ten = document.getElementById('ten');
    const fifteen = document.getElementById('fifteen');
    const twentyfive = document.getElementById('twenty-five');
    const customInput = document.getElementById('custom');
    const custom = parseInt(customInput.value);

    // reset.addEventListener('click', function(){
    //     billInput = "";
    //     bill = 0;
    //     people = 0;
    //     return;
    // })

    if (isNaN(bill)) {
      alert(`"${billInput.value}" can't be empty`);
    }

    if (people === 0) {
      errorMessage.style.display = "block";
    } 

    five.addEventListener('click', function(){
        if (people === 0) {
            errorMessage.style.display = "block";
        } else if ( peopleNumberInput.textContent == "") {
            people = 1;
            total.textContent = ((bill / 100) * 0 + bill)/people;
        } else {
        tipAmount.textContent = (bill / 100) * 5;       
        total.textContent = ((bill / 100) * 5 + bill)/people;
        }
        return;
    },{once: true});


    

    console.log(tipAmount.value);
  });
