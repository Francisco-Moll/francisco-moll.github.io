"use strict";

const pInput = document.getElementById("initInv");
const rInput = document.getElementById("invRate");
const tInput = document.getElementById("years");
const outputElement = document.getElementById("output");

function compound_interest () {
    // calc
    const MONTHLY = 12;

    const p = parseFloat(pInput.value);
    const r = parseFloat(rInput.value);
    const t = parseFloat(tInput.value);

    const a = p * (1 + (r / MONTHLY)) ** (MONTHLY * t);

    const interest_earned = a - p;
    const int_percent = r * 100;

    outputElement.textContent = `If you deposit $${p.toFixed(2)} in a CD that\n
    earns ${int_percent.toFixed(2)}% interest and matures in ${t} years, your\n
    CD's ending balance will be $${a.toFixed(2)} and you would have earned\n
    $${interest_earned.toFixed(2)} in interest.`;
}

document.getElementById("calcBtn");
document.addEventListener("click", compound_interest);
/*
// inputs
let p = 1000; // intitial investment
let r = 0.0175; // %
let t = 5; // years

function compound_interest(p, r, t) {
    // calc
    const MONTHLY = 12;

    let a = p * (1 + (r / MONTHLY)) ** (MONTHLY * t);

    return a;
}

let a = compound_interest(p, r, t);
console.log(a.toFixed(2));
*/