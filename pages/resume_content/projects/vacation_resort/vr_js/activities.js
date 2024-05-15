"using strict";

const activities = {
    'Arts/Crafts': [
        { title: 'Candle Making', description: 'Spend two hours learning to make scented candles. All supplies are included.', cost: '7.99' }
    ],
    'Adventure': [
        { title: 'Ziplining the Canyon', description: 'Spend 2 hours ziplining across canyons and through treetops.', cost: '119.99' }
    ],
    'Museums/Culture': [
        { title: 'Amazing Science', description: 'Visit our own science museum with its world-class exhibit of magician tricks.', cost: '9.99' }
    ]
};

function showActivities(category) {
    const list = document.getElementById('activity_list');
    list.innerHTML = ''; // Clear previous entries

    if (!activities[category]) {
        return; // No category selected or category is not defined
    }

    const categoryActivities = activities[category];
    categoryActivities.forEach(activity => {
        const entry = document.createElement('div');
        entry.innerHTML = `
            <h4>${activity.title}</h4>
            <p>${activity.description}</p>
            <p>Cost: $${activity.cost}</p>
        `;
        list.appendChild(entry);
    });
}
