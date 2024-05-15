"use strict";

// grab all inputs from HTML
const pInput = document.getElementById("initLoan");
const rateInput = document.getElementById("invRate");
const yearsInput = document.getElementById("years");
const outputElement = document.getElementById("output");

// function to claculate the mortgage
function monthly_payment() {
    // calc
    const MONTHLY = 12;

    const p = parseFloat(pInput.value);
    const rate = parseFloat(rateInput.value);
    const years = parseFloat(yearsInput.value);

    const r = rate / MONTHLY;
    const n = years * MONTHLY;

    // M = P*((r*(1+r)^n)/(((1+r)^n)-1))
    const m = p * ((r * (1 + r) ** n) / (((1 + r) ** n) - 1));

    const totalInterestPaid = m * n - p;

    outputElement.textContent = `Your monthly payment will be $${m.toFixed(2)}\n
    and you will pay $${totalInterestPaid.toFixed(2)}\n
    in interest over the life of the loan.`;
}

// trigger the html on button click
document.getElementById("calcBtn");
document.addEventListener("click", monthly_payment);

/*
// inputs
let p = 53000; // initial loan
let rate = 0.07625; // %
let years = 15;

function init() {
    const calcBtn = document.getElementById("calcBtn");

    calcBtn.addEventListener("click", monthly_payment);
}

function monthly_payment(p, rate, years) {
    // calc
    const MONTHLY = 12;
    let r = rate / MONTHLY;
    let n = years * MONTHLY;

    // M = P*((r*(1+r)^n)/(((1+r)^n)-1))
    let m = p * ((r * (1 + r) ** n) / (((1 + r) ** n) - 1));

    return m;
}

let m = monthly_payment(p, rate, years);
console.log(m.toFixed(2));*/