"use strict;"

// Populate mountain dropdown menu
function populateMountainDropdown() {
    const selectElement = document.getElementById('mtDropdown');

    mountainsArray.forEach(mountain => {
        const option = document.createElement('option');
        option.value = mountain.name;
        option.textContent = mountain.name;
        selectElement.appendChild(option);
    });
}

async function getSunsetForMountain(lat, lng) {
    try {
        const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
        const data = await response.json();
        if (data.status === "OK") {
            return {
                sunrise: data.results.sunrise,
                sunset: data.results.sunset
            };
        } else {
            throw new Error('Failed to fetch sunrise and sunset times');
        }
    } catch (error) {
        console.error('Error fetching sunrise and sunset times:', error);
        throw error;
    }
}

async function updateMountainDetails() {
    const selectElement = document.getElementById('mtDropdown');
    const selectedMountainName = selectElement.value;
    const mountainDetailsDiv = document.getElementById('mountain_details');
    const sunriseSunsetDetailsDiv = document.getElementById('sunrise_sunset_details');
    const mountain = mountainsArray.find(mountain => mountain.name === selectedMountainName);

    if (mountain) {
        mountainDetailsDiv.innerHTML = `
            <div class="container pillbox">
                <h3>${mountain.name}</h3>
                <p><strong>Elevation:</strong> ${mountain.elevation} feet</p>
                <p><strong>Effort:</strong> ${mountain.effort}</p>
                <img src="../images/${mountain.img}" alt="${mountain.name}">
                <p>${mountain.desc}</p>
                <p><strong>Coordinates:</strong> ${mountain.coords.lat}, ${mountain.coords.lng}</p>
            <div>
            `;

        try {
            const { sunrise, sunset } = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);
            sunriseSunsetDetailsDiv.innerHTML = `
                <div class="container pillbox">
                    <h3>Sunrise and Sunset Times</h3>
                    <p><strong>Sunrise:</strong> ${sunrise} UTC</p>
                    <p><strong>Sunset:</strong> ${sunset} UTC</p>
                </div>
                `;
        } catch (error) {
            sunriseSunsetDetailsDiv.innerHTML = `
                <div class="container pillbox">
                    <p>Could not fetch sunrise and sunset times.</p>
                </div>
                `;
        }
    } else {
        mountainDetailsDiv.innerHTML = `
            <div class="container pillbox">
                <br>
                <p>Please select a mountain to see the details.</p>
            </div>    
            `;
        sunriseSunsetDetailsDiv.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    populateMountainDropdown();
    updateMountainList();
});