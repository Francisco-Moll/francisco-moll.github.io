"use strct";

document.getElementById('car_rental').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Base rental cost per day
    const baseCostPerDay = 19.99;

    // Gather input values
    const days = parseInt(document.getElementById('days').value);
    const tollTag = document.getElementById('tolltag').checked;
    const gps = document.getElementById('gps').checked;
    const roadside = document.getElementById('roadside').checked;
    const under25 = document.querySelector('input[name="under25"]:checked').value;

    // Calculate additional costs
    let additionalCost = 0;
    if (tollTag) additionalCost += 3.95;
    if (gps) additionalCost += 2.95;
    if (roadside) additionalCost += 2.95;

    // Calculate total cost
    let totalCost = (baseCostPerDay + additionalCost) * days;

    // Apply surcharge if the driver is under 25
    if (under25 === "no") {
        totalCost *= 1.30; // 30% surcharge
    }

    // Display the quote
    document.getElementById('car_quote').textContent = `Your estimated rental cost is $${totalCost.toFixed(2)}.`;

});