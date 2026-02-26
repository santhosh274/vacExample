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
        // Evaluates the math expression entered in the display
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* ---------- Keyboard Support ---------- */

document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow numbers
    if (!isNaN(key)) {
        appendValue(key);
        return;
    }

    // Allow operators
    if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
        return;
    }

    // Decimal point
    if (key === ".") {
        appendValue(".");
        return;
    }

    // Enter = calculate
    if (key === "Enter") {
        event.preventDefault();
        calculate();
        return;
    }

    // Backspace = delete
    if (key === "Backspace") {
        deleteLast();
        return;
    }

    // Escape = clear
    if (key === "Escape") {
        clearDisplay();
        return;
    }
});