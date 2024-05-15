"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("estimateForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        calculateCost();
    });
});

function calculateCost() {
    const checkInDate = new Date(document.getElementById("check_in").value);
    const nights = parseInt(document.getElementById("nights").value);
    const adults = parseInt(document.getElementById("adults").value);
    const children = parseInt(document.getElementById("children").value);
    const roomType = document.querySelector('input[name="room"]:checked').id;
    const discountType = document.querySelector('input[name="discount"]:checked').id;

    if (!validateGuests(roomType, adults, children)) {
        displayMessage("The room type selected cannot accommodate the number of guests.");
        return;
    }

    const rates = getRoomRate(checkInDate, roomType);
    let baseCost = rates * nights;
    let discount = calculateDiscount(baseCost, discountType);
    let discountedCost = baseCost - discount;
    let tax = discountedCost * 0.12;
    let totalCost = discountedCost + tax;

    displayResults(baseCost, discount, discountedCost, tax, totalCost);
}

function validateGuests(roomType, adults, children) {
    const capacity = {
        "queen": 5,
        "king": 2,
        "double": 6
    };
    return adults + children <= capacity[roomType];
}

function getRoomRate(checkInDate, roomType) {
    const month = checkInDate.getMonth() + 1;
    const isPeakSeason = month >= 6 && month <= 8;
    const rates = {
        "queen": isPeakSeason ? 250 : 150,
        "king": isPeakSeason ? 250 : 150,
        "double": isPeakSeason ? 350 : 210
    };
    return rates[roomType];
}

function calculateDiscount(cost, type) {
    if (type === "senior") return cost * 0.1;
    if (type === "military") return cost * 0.2;
    return 0;
}

function displayResults(baseCost, discount, discountedCost, tax, totalCost) {
    const quoteDiv = document.getElementById("gen_quote");
    quoteDiv.textContent = `Base Cost: $${baseCost.toFixed(2)}
                          Discount: $${discount.toFixed(2)}
                          Discounted Cost: $${discountedCost.toFixed(2)}
                          Tax: $${tax.toFixed(2)}
                          Total Cost: $${totalCost.toFixed(2)}`;
}

function displayMessage(message) {
    const quoteDiv = document.getElementById("gen_quote");
    quoteDiv.textContent = `${message}`;
}