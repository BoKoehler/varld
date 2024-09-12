const shopButton = document.querySelector('button');
const shopSection = document.querySelector('.clothing-section');

shopButton.addEventListener('click', () => {
  shopSection.scrollIntoView({ behavior: 'smooth' });
});