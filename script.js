const display = document.getElementById("display");

/* ---------- Button Functions ---------- */

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
<<<<<<< HEAD
        display.value = eval(display.value);
=======
        // Evaluates the math string
        display.value = eval(display.value); 
>>>>>>> 48675d6 (finalized version)
    } catch {
        display.value = "Error";
    }
}

/* ---------- Keyboard Support ---------- */

document.addEventListener("keydown", function (event) {
<<<<<<< HEAD

    const key = event.key;

    // Allow numbers
=======
    const key = event.key;

>>>>>>> 48675d6 (finalized version)
    if (!isNaN(key)) {
        appendValue(key);
        return;
    }

<<<<<<< HEAD
    // Allow operators
=======
>>>>>>> 48675d6 (finalized version)
    if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
        return;
    }

<<<<<<< HEAD
    // Decimal point
=======
>>>>>>> 48675d6 (finalized version)
    if (key === ".") {
        appendValue(".");
        return;
    }

<<<<<<< HEAD
    // Enter = calculate
=======
>>>>>>> 48675d6 (finalized version)
    if (key === "Enter") {
        event.preventDefault();
        calculate();
        return;
    }

<<<<<<< HEAD
    // Backspace = delete
=======
>>>>>>> 48675d6 (finalized version)
    if (key === "Backspace") {
        deleteLast();
        return;
    }

<<<<<<< HEAD
    // Escape = clear
=======
>>>>>>> 48675d6 (finalized version)
    if (key === "Escape") {
        clearDisplay();
        return;
    }
});