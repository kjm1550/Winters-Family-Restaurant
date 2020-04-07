let slideIndex = 1;
let timer;

showSlides(slideIndex);
timerSlides();

function plusSlides(n) {
	clearTimeout(timer);
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	clearTimeout(timer);
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('slide');
	if (n > slides.length) slideIndex = 1;
	if (n < 1) slideIndex = slides.length;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[slideIndex - 1].style.display = 'block';
}

function timerSlides() {
	timer = setTimeout(() => {
		plusSlides(1);
		timerSlides();
	}, 5000);
}
