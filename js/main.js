function showAbout() {
	info.classList.remove('info--skills');
	info.classList.remove('info--edu');
	info.classList.add('info--about');
	info.innerHTML = about;
}
function showSkills() {
	info.classList.remove('info--about');
	info.classList.remove('info--edu');
	info.classList.add('info--skills');
	info.innerHTML = skills;
}
function showExp() {
	info.classList.remove('info--about');
	info.classList.remove('info--skills');
	info.classList.add('info--edu');
	info.innerHTML = exp;
}
function showImage() {
	info.classList.remove('info--skills');
	info.classList.remove('info--edu');
	info.classList.remove('info--about');
	info.innerHTML = img;
}

const info = document.querySelector('.info');

document.querySelector('#about').addEventListener('click', showAbout);
document.querySelector('#skills').addEventListener('click', showSkills);
document.querySelector('#exp').addEventListener('click', showExp);
document.querySelector('.header__logo').addEventListener('click', showImage);
