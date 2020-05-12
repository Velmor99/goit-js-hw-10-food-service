import menu from './storage/menu.json';
import templateMenuItem from './templates/menu-item.hbs';

import './styles.css';

const menuMarcup = document.querySelector('.js-menu');
const themeCheckbox = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
const theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme'
};

buildMenu(menu);

function buildMenu(menu) {
	const marcup = menu.map((menu) => templateMenuItem(menu)).join('');
	menuMarcup.insertAdjacentHTML('beforeend', marcup);
}

if (localStorage.theme === 'dark-theme') {
	themeCheckbox.checked = true;
	body.classList.add(theme.DARK);
} else if (localStorage.theme === 'light-theme') {
	themeCheckbox.checked = false;
	body.classList.add(theme.LIGHT);
}

themeCheckbox.addEventListener('click', (e) => {
	if (themeCheckbox.checked === false) {
		localStorage.setItem('theme', 'light-theme');
		body.classList.add(theme.LIGHT);
		body.classList.remove('dark-theme');
	} else if (themeCheckbox.checked === true) {
		localStorage.setItem('theme', 'dark-theme');
		body.classList.add(theme.DARK);
		body.classList.remove('light-theme');
	}
});
