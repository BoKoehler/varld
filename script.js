const shopButton = document.querySelector('.shop-button');
const shopSection = document.querySelector('.clothing-section');

shopButton.addEventListener('click', () => {
  shopSection.scrollIntoView({ behavior: 'smooth' });
});