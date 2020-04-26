let el;

function experience(el) {
	el.classList.remove('info--about');
	el.classList.remove('info--skills');
	el.classList.add('info--edu');
}
function skills(el) {
	el.classList.remove('info--about');
	el.classList.remove('info--edu');
	el.classList.add('info--skills');
}
function about(el) {
	el.classList.remove('info--skills');
	el.classList.remove('info--edu');
	el.classList.add('info--about');
}
function image(el) {
	el.classList.remove('info--skills');
	el.classList.remove('info--edu');
	el.classList.remove('info--about');
}
function showExp() {
	el = document.getElementById('info');
	el.innerHTML =
		'<div><h2 class="heading-2">Edukacja:</h2><h3 class="heading-3"></h3><div class="info__date">12.2019 - 05.2020 Responsive Web Design</div><div class="info__bullet-point">Modern JavaScript bootcamp 2020 - W trakcie nauki</div><div class="info__bullet-point">Advanced CSS - SASS, Flexbox, GRID + animations basics</div><div class="info__bullet-point">Responsive Blog with bootstrap - podstawy budowy systemu CMS przy pomocy PHP, MySQLi oraz Bootstrapa</div><div class="info__bullet-point">Pasja informatyki - Podstawy HTML, CSS, PHP, MySQL, JavaScript i Bootstrap</div><br></div><div><h2 class="heading-2">Doświadczenie:</h2><h3 class="heading-3">TiGi Team Leader’s Support</h3><div class="info__date">01.2016-11.2019 Milton Keynes, Wielka Brytania</div><div class="info__bullet-point">organizacja pracy teamu goods in</div><div class="info__bullet-point">sprawdzanie nieścisłości produktów/raportowanie</div><div class="info__bullet-point">zarządzanie dostawami (inbound oraz outbound)</div><div class="info__bullet-point">szkolenie nowych pracowników</div><div class="info__bullet-point">przygotowywanie procedur</div></div></div>';
	experience(el);
}
function showSkills() {
	el = document.getElementById('info');
	el.innerHTML =
		'<div class="skill"> <!--  Empty div to create 1 row gap --></div><!-- HTML5 --><div class="skill"><div class="skill__info"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-html5"></use></svg>HTML5</div><div class="skill__rating"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-half"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg></div></div><!-- CSS3 --><div class="skill"><div class="skill__info"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-css3"></use></svg>CSS3</div><div class="skill__rating"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg></div></div><!-- SASS --><div class="skill"><div class="skill__info"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-sass"></use></svg>SASS</div><div class="skill__rating"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg></div></div><!-- Java Script --><div class="skill"><div class="skill__info"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-javascript"></use></svg>Java Script</div><div class="skill__rating"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg></div></div><!-- Bootstrap 4 --><div class="skill"><div class="skill__info"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-bootstrap"></use></svg>Bootstrap 4</div><div class="skill__rating"><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-full"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-half"></use></svg><svg class="skill__icon"><use xlink:href="img/symbols.svg#icon-star-empty"></use></svg></div></div><div class="skill"> <!--  Empty div to create 1 row gap --></div><div class="skill__others"><h2 class="heading-2">Podstawy:</h2><div class="info__bullet-point">PHP i MySQL</div><div class="info__bullet-point">Git VCS i Linux</div><div class="info__bullet-point">PSD to HTML</div><div class="info__bullet-point">Metodologia BEM</div><div class="info__bullet-point">CSS Grid + Flexbox</div><div class="info__bullet-point--language">Język angielski - poziom C1/C2</div></div>';
	skills(el);
}
function showAbout() {
	el = document.getElementById('info');
	el.innerHTML =
		'Jestem początkującym programistą webowym z ambicją stania się Full Stack Web Developer’em. Lubię uczyć się logiki i zasad działania języków programowania a także poznawać struktury zbudowanych na nich witryn. Uwielbiam także planować, analizować i optymalizować już istniejące systemy. Tak w życiu jak i w programowaniu cechuje mnie : minimalizm, dokładność, pracowitość oraz przywiązywanie uwagi do funkcjonalności.';
	about(el);
}
function showImage() {
	el = document.getElementById('info');
	el.innerHTML =
		'<picture class="info__img"><source srcset="img/responsivewebdesign-xs.jpg" media="(max-width: 30em)"><source srcset="img/responsivewebdesign-mobile.jpg" media="(max-width: 62.5em)"><source srcset="img/responsivewebdesign-large.jpg" media="(min-width: 112.5em)"><img src="img/responsivewebdesign.jpg" alt="responsywny web design"></picture>';
	image(el);
}
