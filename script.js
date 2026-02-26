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
        // Evaluates the math string
        display.value = eval(display.value); 
    } catch {
        display.value = "Error";
    }
}

/* ---------- Keyboard Support ---------- */

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key)) {
        appendValue(key);
        return;
    }

    if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
        return;
    }

    if (key === ".") {
        appendValue(".");
        return;
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
        return;
    }

    if (key === "Backspace") {
        deleteLast();
        return;
    }

    if (key === "Escape") {
        clearDisplay();
        return;
    }
});