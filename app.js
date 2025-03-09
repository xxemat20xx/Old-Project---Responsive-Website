let swiper = new  Swiper(".mySwiper", {
	loop: true,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPaus: true,
	
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 2,
		slideShadows: false,
	},
	pagination:{
	el: ".swiper-pagination",
	},
});


const navbarMenu = document.querySelector(".menu_toggler-btn");

const navlinkContainer = document.querySelector(".nav-links");
navbarMenu.addEventListener("click", menubarToggler);


function menubarToggler(){
		navlinkContainer.classList.toggle("active");

}