 // Retrieve clicked items from local storage or create an empty array
let clickedItems = JSON.parse(localStorage.getItem('clickedItems')) || [];


var hexagonData = [
    { icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men" },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "4. But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
    //{ icon: 'memory_alt', content: "IF you can keep your head when all about you" },
    //{ icon: 'favorite', content: "Being lied about, and blaming it on" },
    //{ icon: 'star', content: "If you can trust yourself when all men doubt you," },
    //{ icon: 'favorite_border', content: "But make allowance for their doubting too;" },
    //{ icon: 'star_border', content: "If you can wait and not be tired by waiting," },
    //{ icon: 'grade', content: "being lied about, don't deal in lies," },
    //{ icon: 'thumb_up', content: "being hated, don't give way to hating," },
    //{ icon: 'thumb_down', content: "And yet don't look too good, nor talk too wise:" },
];

// Configuración
const rows = 5; // Número de filas
const hexPerRow = 5; // Número de hexágonos por fila (en filas no desplazadas)

// Contenedor principal
const grid = document.getElementById('hex-grid');

// Registro de clics
const clickedHexes = new Set();


// Generar filas y hexágonos
for (let i = 0; i < rows; i++) {
  // Crear una fila
  const row = document.createElement('div');
  row.className = 'hex-row';

  // Aplicar desplazamiento en filas alternas
  if (i % 2 !== 0) {
    row.classList.add('offset');
  }

  // Generar hexágonos en la fila
  const hexCount = i % 2 === 0 ? hexPerRow : hexPerRow + 1; // Más hexágonos en filas desplazadas
  for (let j = 0; j < hexCount; j++) {
    const hex = document.createElement('div');
    hex.className = 'hex';
    row.appendChild(hex);


      // Agregar contenido al hexágono
      const hexContent = document.createElement('div');
      hexContent.className = 'hex-content';
      hexContent.textContent = `Hex ${i}-${j}`; // Texto dinámico
      hex.appendChild(hexContent);


          // Manejar clics en el hexágono
        hex.addEventListener('click', () => {
        hex.classList.toggle('clicked');
        const key = `${i}-${j}`;
  
        if (clickedHexes.has(key)) {
          clickedHexes.delete(key); // Eliminar si ya estaba clicado
        } else {
          clickedHexes.add(key); // Añadir al registro de clics
        }
  
        console.log('Hexágonos clicados:', Array.from(clickedHexes));
      });
      row.appendChild(hex);
    }
  // Agregar la fila al contenedor principal
  grid.appendChild(row);
}