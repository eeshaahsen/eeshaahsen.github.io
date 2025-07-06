// Select elements
const popup = document.getElementById('popup');
const openButton = document.querySelector('.button-stack .icon-button:first-child');
const closeButton = document.getElementById('closePopup');

// Open popup on first button click
openButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

// Close popup on button click
closeButton.addEventListener('click', () => {
  popup.classList.add('hidden');
});

const panels = document.querySelectorAll('.panel');


const imageFiles = {
  '1imagespeople': ['Anastasiia.png', 'Daisy.png', 'Eduardo.png', 'Eesha.png', 'Gosia.png', 'Jafri.png', 'Lara.png', 'Lauren.png'
    , 'Mahalakshmi.png', 'Nadeen.png', 'Raven.png', 'Sara-Elena.png', 'Shehryaar.png', 'Sumair.png', 'Usaid.png', 'Valeria.png', 'Winona.png'],
  '2imagesfood': ['Anastasiia.png', 'Daisy.png', 'Eduardo.png', 'Eesha.png', 'Gosia.png', 'Jafri.png', 'Lara.png', 'Lauren.png'
    , 'Mahalakshmi.png', 'Nadeen.png', 'Raven.png', 'Sara-Elena.png', 'Shehryaar.png', 'Sumair.png', 'Usaid.png', 'Valeria.png', 'Winona.png'],
  '3imagesclothes': ['Anastasiia.png', 'Daisy.png', 'Eduardo.png', 'Eesha.png', 'Gosia.png', 'Jafri.png', 'Lara.png', 'Lauren.png'
    , 'Mahalakshmi.png', 'Nadeen.png', 'Raven.png', 'Sara-Elena.png', 'Shehryaar.png', 'Sumair.png', 'Usaid.png', 'Valeria.png', 'Winona.png'],
  '4imagessetting': ['Anastasiia.png', 'Daisy.png', 'Eduardo.png', 'Eesha.png', 'Gosia.png', 'Jafri.png', 'Lara.png', 'Lauren.png'
    , 'Mahalakshmi.png', 'Nadeen.png', 'Raven.png', 'Sara-Elena.png', 'Shehryaar.png', 'Sumair.png', 'Usaid.png', 'Valeria.png', 'Winona.png'],
};

const indices = {
  '1imagespeople': 0,
  '2imagesfood': 0,
  '3imagesclothes': 0,
  '4imagessetting': 0
};

panels.forEach(panel => {
  const category = panel.dataset.category;
  const centerImg = panel.querySelector('.panel-image'); // ← THIS is the key
  const leftBtn = panel.querySelector('.arrow.left');
  const rightBtn = panel.querySelector('.arrow.right');

  leftBtn.addEventListener('click', () => {
    indices[category] = (indices[category] - 1 + imageFiles[category].length) % imageFiles[category].length;
    centerImg.src = `${category}/${imageFiles[category][indices[category]]}`;
  });

  rightBtn.addEventListener('click', () => {
    indices[category] = (indices[category] + 1) % imageFiles[category].length;
    centerImg.src = `${category}/${imageFiles[category][indices[category]]}`;
  });
});


const shuffleBtn = document.getElementById('shuffleButton');

shuffleBtn.addEventListener('click', () => {
  panels.forEach(panel => {
    const category = panel.dataset.category;
    const centerImg = panel.querySelector('.panel-image');
    const max = imageFiles[category].length;

    // Pick a random index for this category
    indices[category] = Math.floor(Math.random() * max);

    // Update the image src
    centerImg.src = `${category}/${imageFiles[category][indices[category]]}`;
  });
});
