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

function createHoneycomb() {
    var honeycombContainer = document.querySelector('.honeycomb');
    var container = document.createElement('div');
    container.className = 'container';
    honeycombContainer.appendChild(container);

    hexagonData.forEach(function (data) {
        var hexagonContainer = document.createElement('div');
        hexagonContainer.className = 'hexagon';

        // var hexagonContent = document.createElement('div');
        // hexagonContent.className = 'hexagontent';

        var iconElement = document.createElement('span');
        iconElement.className = 'material-symbols-outlined';
        iconElement.textContent = data.icon;

        var textElement = document.createElement('span');
        textElement.textContent = data.content;

        // hexagonContent.appendChild(textElement);
        // hexagonContent.appendChild(iconElement);

        // hexagonContainer.appendChild(hexagonContent);
        container.appendChild(hexagonContainer);
    });
}

// Call the function to create honeycomb on page load
window.onload = createHoneycomb;
