 // Retrieve clicked items from local storage or create an empty array
let clickedItems = JSON.parse(localStorage.getItem('clickedItems')) || [];


var hexagonData = [
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "1. IF you can keep your head when all about you" },
    { icon: 'favorite', content: "2. Being lied about, and blaming it on" },
    { icon: 'star', content: "3. If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "5. If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "6. being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "7. being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "8. And yet don't look too good, nor talk too wise:" },
];

// Function to toggle background color and update clicked items
function toggleBackgroundColor(event) {
    let item = event.target;
    let itemId = item.id;

    // Toggle background color by adding or removing CSS class
    item.classList.toggle('highlighted');

    // Update clicked items array
    let index = clickedItems.indexOf(itemId);
    if (index === -1) {
        clickedItems.push(itemId); // Add to clicked items array if not already present
    } else {
        clickedItems.splice(index, 1); // Remove from clicked items array if already present
    }

    // Store updated clicked items array in local storage
    localStorage.setItem('clickedItems', JSON.stringify(clickedItems));
}


function createHoneycomb() {
    var honeycombContainer = document.querySelector('.hexagons');
    var ibwsFixContainer = document.createElement('div');
    ibwsFixContainer.className = 'ibws-fix';
    honeycombContainer.appendChild(ibwsFixContainer);

    var i = 0;
    hexagonData.forEach(function (data) {
        var hexagonContainer = document.createElement('div');
        hexagonContainer.className = 'hexagon';
        hexagonContainer.id = "hexagon" + i;
        i++;

        hexagonContainer.addEventListener('click', toggleBackgroundColor);

        var hexagonContent = document.createElement('div');
        hexagonContent.className = 'hexagontent';

        var iconElement = document.createElement('span');
        iconElement.className = 'material-symbols-outlined';
        iconElement.textContent = data.icon;

        var textElement = document.createElement('span');
        textElement.textContent = data.content;

        hexagonContent.appendChild(textElement);
        hexagonContent.appendChild(iconElement);

        hexagonContainer.appendChild(hexagonContent);
        ibwsFixContainer.appendChild(hexagonContainer);
    });

}

// Call the function to create honeycomb on page load
window.onload = createHoneycomb;

document.addEventListener('DOMContentLoaded', function () {

    // Add event listeners to each item
    let items = document.querySelectorAll('.hexagon');
    items.forEach(item => {
        item.addEventListener('click', toggleBackgroundColor);
        // Check if item was previously clicked and update background color accordingly
        if (clickedItems.includes(item.id)) {
            item.classList.add('highlighted');
        }
    });
});
