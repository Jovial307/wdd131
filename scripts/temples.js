const year = document.getElementById('currentyear');
const currentYear = new Date().getFullYear()
year.textContent = currentYear;

const lastModif = document.getElementById('lastModified')
const oLastModif = new Date(document.lastModified);
const formattedDate = oLastModif.toLocaleDateString();
const hours = oLastModif.getHours();
const minutes = oLastModif.getMinutes();
const seconds = oLastModif.getSeconds();
lastModif.textContent = `Last modification: ${formattedDate}, ${hours}:${minutes}:${seconds}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});