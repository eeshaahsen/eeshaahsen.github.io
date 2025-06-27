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
