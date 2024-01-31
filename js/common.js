document.addEventListener('DOMContentLoaded', () => {
	var slider = new Swiper(".slider.swiper", {
		navigation: {
		  nextEl: ".arrow.next",
		  prevEl: ".arrow.prev",
		},
		slidesPerView: 'auto',
		spaceBetween: 23,
		loop: true,
		centeredSlides: true,
	});
})
