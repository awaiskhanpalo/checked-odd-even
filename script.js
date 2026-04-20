 function checkNumber() {
        let number = document.getElementById('numberInput').value;
        let result = document.getElementById('result');

        
        if (number === "") {
            result.innerText = "Please enter a number!";
            result.style.color = "red";
            return;
        }

        number = Number(number);

        if (number % 2 === 0) {
            result.innerText = `${number} is Even`;
            result.style.color = "green";
        } else {
            result.innerText = `${number} is Odd`;
            result.style.color = "orange";
        }
    }
