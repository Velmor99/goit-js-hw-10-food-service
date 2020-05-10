import menu from './storage/menu.json';
import templateMenuItem from './templates/menu-item.hbs';

import './styles.css';

const menuMarcup = document.querySelector('.js-menu');
const themeCheckbox = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme'
};
localStorage.setItem('settings', JSON.stringify(Theme));
const localData = localStorage.getItem('settings')
const parceData = JSON.parse(localData);


console.log(localStorage);
console.log(parceData);



buildMenu(menu);

function buildMenu(menu) {
	const marcup = menu.map((menu) => templateMenuItem(menu)).join('');
	menuMarcup.insertAdjacentHTML('beforeend', marcup);
}

if(localStorage.theme === 'dark-theme') {
    themeCheckbox.checked = true;
    body.classList.add(parceData.DARK)
} else if(localStorage.theme === 'light-theme') {
    themeCheckbox.checked = false;
    body.classList.add(parceData.LIGHT)
}

themeCheckbox.addEventListener('click', e => {
    if(themeCheckbox.checked === false) {
        localStorage.setItem('theme', 'light-theme');
        body.classList.add(parceData.LIGHT)
        body.classList.remove('dark-theme')
    } else if(themeCheckbox.checked === true) {
        localStorage.setItem('theme', 'dark-theme');
        body.classList.add(parceData.DARK)
        body.classList.remove('light-theme');
    }
})