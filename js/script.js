 // Retrieve clicked items from local storage or create an empty array
let clickedItems = JSON.parse(localStorage.getItem('clickedItems')) || [];


var hexagonData = [
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men" },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    { icon: 'favorite', content: "Being lied about, and blaming it on" },
    { icon: 'star', content: "If you can trust yourself when all men doubt you," },
    { icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    { icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    { icon: 'grade', content: "being lied about, don't deal in lies," },
    { icon: 'thumb_up', content: "being hated, don't give way to hating," },
    { icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
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
    var honeycombContainer = document.querySelector('.content');
    var ibwsFixContainer = document.createElement('div');
    ibwsFixContainer.className = 'skills';
    honeycombContainer.appendChild(ibwsFixContainer);

    var i = 0;
    hexagonData.forEach(function (data) {
        var skills = document.createElement('button');
        skills.className = 'skill-btn';
        skills.id = "skill" + i;
        skills.innerHTML = i + ". " + data.content;
        //skills.textContent = data.icon;
        i++;

        skills.addEventListener('click', toggleBackgroundColor);

        var iconElement = document.createElement('span');
        iconElement.className = 'material-symbols-outlined';
        iconElement.textContent = data.icon;

        skills.appendChild(iconElement);

        ibwsFixContainer.appendChild(skills);
    });

}

// Call the function to create honeycomb on page load
window.onload = createHoneycomb;

document.addEventListener('DOMContentLoaded', function () {

    // Add event listeners to each item
    let items = document.querySelectorAll('.skill-btn');
    items.forEach(item => {
        item.addEventListener('click', toggleBackgroundColor);
        // Check if item was previously clicked and update background color accordingly
        if (clickedItems.includes(item.id)) {
            item.classList.add('highlighted');
        }
    });
});
