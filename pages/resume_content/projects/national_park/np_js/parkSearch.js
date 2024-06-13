"use strict;"

// Populate location dropdown
function populateLocationDropdown() {
    const locationSelect = document.getElementById('location');
    locationsArray.forEach(loc => {
        const option = document.createElement('option');
        option.value = loc;
        option.textContent = loc;
        locationSelect.appendChild(option);
    });
}

// Populate type dropdown
function populateTypeDropdown() {
    const typeSelect = document.getElementById('type');
    parkTypesArray.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
}

function updateLocationList() {
    const selectedValue = document.querySelector('input[name="search"]:checked').value;

    const parkDetails = document.getElementById('park_details');
    parkDetails.innerHTML = ''; // Clear previous results

    let matchingParks = [];

    if (selectedValue === 'loc') {
        const selectedLocation = document.getElementById('location').value;

        if (selectedLocation) {
            matchingParks = nationalParksArray.filter(park => park.State === selectedLocation);
        }
    } else if (selectedValue === 'type') {
        const selectedParkType = document.getElementById('type').value;

        if (selectedParkType) {
            matchingParks = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));
        }
    } else if (selectedValue === 'all') {
        matchingParks = nationalParksArray;
    }

    if (matchingParks.length > 0) {
        matchingParks.forEach(park => {
            const parkDiv = document.createElement('div');
            parkDiv.innerHTML = `
                <div class="pillbox" id="gen_div">
                    <h3>${park.LocationName}</h3>
                    <p>${park.Address}, ${park.City}, ${park.State} ${park.ZipCode}</p>
                    ${park.Phone ? `<p>Phone: ${park.Phone}</p>` : ''}
                    ${park.Fax ? `<p>Fax: ${park.Fax}</p>` : ''}
                    ${park.Visit ? `<p>Visit: <a href="${park.Visit}">${park.Visit}</a></p>` : ''}
                    <p>Latitude: ${park.Latitude}, Longitude: ${park.Longitude}</p>
                </div>
                <br>    
                `;
            parkDetails.appendChild(parkDiv);
        });
    } else {
        parkDetails.innerHTML = `
            <div class="pillbox">
                <br>
                <p>Select an attribute to search.</p>
            </div>
            `;
    }
}

/*
function updateLocationList() {
    const selectedState = document.getElementById('location').value;
    const parkDetails = document.getElementById('park_details');
    parkDetails.innerHTML = ''; // Clear previous results

    if (selectedState) {
        const matchingParks = nationalParksArray.filter(park => park.State === selectedState);

        if (matchingParks.length > 0) {
            matchingParks.forEach(park => {
                const parkDiv = document.createElement('div');
                parkDiv.innerHTML = `
                    <h3>${park.LocationName}</h3>
                    <p>${park.Address}, ${park.City}, ${park.State} ${park.ZipCode}</p>
                    <p>Phone: ${park.Phone}</p>
                    <p>Fax: ${park.Fax}</p>
                    <p>Latitude: ${park.Latitude}, Longitude: ${park.Longitude}</p>
                `;
                parkDetails.appendChild(parkDiv);
            });
        } else {
            parkDetails.innerHTML = '<p>No parks found for the selected state.</p>';
        }
    } else {
        parkDetails.innerHTML = '<p>Please select a state.</p>';
    }
}
*/

// Init.
document.addEventListener('DOMContentLoaded', function () {
    populateLocationDropdown();
    populateTypeDropdown();
    updateLocationList();

    // Attach event listeners
    document.getElementById('location').addEventListener('change', updateLocationList);
    document.getElementById('type').addEventListener('change', updateLocationList);
    document.querySelectorAll('input[name="search"]').forEach(radio => {
        radio.addEventListener('change', updateLocationList);
    });
});