"use strict";

const cInput = document.getElementById("payout");
const interestInput = document.getElementById("intRate");
const yearsInput = document.getElementById("years");
const outputElement = document.getElementById("output");

function annuity() {
    const MONTHLY = 12;

    const c = parseFloat(cInput.value);
    const interest = parseFloat(interestInput.value);
    const years = parseFloat(yearsInput.value);

    const i = interest / MONTHLY;
    const n = years * MONTHLY;

    const int_adj = interest * 100;

    const pv = c * ((1 - ((1 + i) ** (-n))) / (i));

    outputElement.textContent = `To fund an annuity that pays $${c.toFixed(2)}\n
    for ${years.toFixed(2)} years and earns an expected ${int_adj.toFixed(2)}%\n
    interest, you would need to invest $${pv.toFixed(2)} today.`;
}

document.getElementById("calcBtn");
document.addEventListener("click", annuity);

/*
// inputs
let c = 3000; // payout
let interest = 0.025; // %
let years = 20;

function annuity(c, interest, years) {
    // calc
    const MONTHLY = 12;
    let n = years * MONTHLY;
    let i = interest / MONTHLY;
    
    let pv = c * ((1 - ((1 + i) ** (-n))) / (i));

    return pv;
}

let pv = annuity(c, interest, years);
console.log(pv.toFixed(2));
*/