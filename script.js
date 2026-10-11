const outputBox = document.querySelector(".output-box");
const fullStop = document.querySelector("#fullstop");

// state
let firstValue = "";
let secondValue = "";
let sign = "";
let pressOperator = false;
let justEvaluated = false; // true right after "=" so the next digit starts fresh
let answer = 0;

// math
function add(a, b) { return Number(a) + Number(b); }
function subtraction(a, b) { return Number(a) - Number(b); }
function multiplication(a, b) { return Number(a) * Number(b); }
function division(a, b) { return Number(a) / Number(b); }
function exponent(a, b) { return Number(a) ** Number(b); }

function calculate(a, op, b) {
    switch (op) {
        case "+": return add(a, b);
        case "-": return subtraction(a, b);
        case "x": return multiplication(a, b);
        case "/": return division(a, b);
        case "^": return exponent(a, b);
    }
}

// a number that is empty or just a minus sign isn't a real number yet
function isIncomplete(v) {
    return v === "" || v === "-";
}

// display
function render() {
    const text = pressOperator
        ? `${firstValue} ${sign} ${secondValue}`
        : firstValue;
    outputBox.textContent = text || "0";
}

function resetAll() {
    firstValue = "";
    secondValue = "";
    sign = "";
    pressOperator = false;
    justEvaluated = false;
    render();
}

function showError(message) {
    resetAll();
    outputBox.textContent = message;
}

// if the last action was "=", typing a new number starts a new calculation
function startFreshIfNeeded() {
    if (justEvaluated && !pressOperator) {
        firstValue = "";
        justEvaluated = false;
    }
}

// digits
function appendDigit(value, d) {
    if (value === "0") return d;          // no leading zeros
    if (value === "-0") return "-" + d;
    return value + d;
}

function addDigit(d) {
    startFreshIfNeeded();
    if (!pressOperator) {
        firstValue = appendDigit(firstValue, d);
    } else {
        secondValue = appendDigit(secondValue, d);
    }
    render();
}

function addDot() {
    startFreshIfNeeded();
    if (pressOperator == false) {
        if (!firstValue.includes(".")) {
            if (isIncomplete(firstValue)) firstValue += "0";
            firstValue += ".";
            render();
        }
    } else {
        if (!secondValue.includes(".")) {
            if (isIncomplete(secondValue)) secondValue += "0";
            secondValue += ".";
            render();
        }
    }
}

function elstop() {
    fullStop.addEventListener("click", addDot);
}

// evaluates firstValue sign secondValue. Returns the result, or null on error.
function evaluate() {
    const result = calculate(firstValue, sign, secondValue);
    if (!Number.isFinite(result)) return null; // division by zero, overflow
    return parseFloat(result.toPrecision(12)); // 0.1 + 0.2 -> 0.3
}

// operators
function setOperator(op) {
    // "-" at the very start (or after an operator) begins a negative number
    if (op === "-" && firstValue === "" ) {
        firstValue = "-";
        return render();
    }
    if (op === "-" && pressOperator && secondValue === "") {
        secondValue = "-";
        return render();
    }

    if (isIncomplete(firstValue)) return;

    if (pressOperator && isIncomplete(secondValue)) {
        secondValue = "";        // changed my mind: swap the operator
        sign = op;
    } else if (pressOperator) {
        const result = evaluate(); // chain: 1 + 2 + -> 3 +
        if (result === null) return showError("Can't divide by 0");
        answer = result;
        firstValue = String(result);
        secondValue = "";
        sign = op;
    } else {
        sign = op;
        pressOperator = true;
    }
    justEvaluated = false;
    render();
}

function elequal() {
    if (!pressOperator || isIncomplete(secondValue)) return;
    const result = evaluate();
    if (result === null) return showError("Can't divide by 0");
    answer = result;
    firstValue = String(result);
    secondValue = "";
    sign = "";
    pressOperator = false;
    justEvaluated = true;
    render();
}

function eldelete() {
    if (justEvaluated) return;
    if (!pressOperator) {
        firstValue = firstValue.slice(0, -1);
    } else if (secondValue === "") {
        sign = "";
        pressOperator = false;   // deleting the operator
    } else {
        secondValue = secondValue.slice(0, -1);
    }
    render();
}

function elanswer() {
    startFreshIfNeeded();
    if (!pressOperator) firstValue = String(answer);
    else secondValue = String(answer);
    render();
}

// wiring: buttons
const digitIds = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
digitIds.forEach((id, i) => {
    document.querySelector("#" + id).addEventListener("click", () => addDigit(String(i)));
});

elstop();

document.querySelector("#addition").addEventListener("click", () => setOperator("+"));
document.querySelector("#subtract").addEventListener("click", () => setOperator("-"));
document.querySelector("#multiply").addEventListener("click", () => setOperator("x"));
document.querySelector("#divided").addEventListener("click", () => setOperator("/"));
document.querySelector("#exponent").addEventListener("click", () => setOperator("^"));
document.querySelector("#equal").addEventListener("click", elequal);
document.querySelector("#delete").addEventListener("click", eldelete);
document.querySelector("#AC").addEventListener("click", resetAll);
document.querySelector("#answer").addEventListener("click", elanswer);

// wiring: keyboard
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key >= "0" && key <= "9") addDigit(key);
    else if (key === ".") addDot();
    else if (key === "+") setOperator("+");
    else if (key === "-") setOperator("-");
    else if (key === "*" || key === "x") setOperator("x");
    else if (key === "/") { event.preventDefault(); setOperator("/"); }
    else if (key === "^") setOperator("^");
    else if (key === "=" || key === "Enter") { event.preventDefault(); elequal(); }
    else if (key === "Backspace") eldelete();
    else if (key === "Escape") resetAll();
});

render();
