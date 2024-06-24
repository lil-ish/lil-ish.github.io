
/* Main*/

document.getElementById('gButton').addEventListener('click', function() {
	window.location.href = 'gallery.html';
});

document.getElementById('aboutButton').addEventListener('click', function() {
	window.location.href = 'about.html';
});

document.getElementById('galleryButton').addEventListener('click', function() {
	window.location.href = 'gallery.html';
});

document.getElementById('contactButton').addEventListener('click', function() {
	window.location.href = 'contact.html';
});

const video = document.querySelector('.video-background')

const swiperText = new Swiper('.swiper', {
	speed: 1600,
	mousewheel: { },
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	}
})
swiperText.on('slideChange', function() {
	gsap.to(video, 1.6, {
		currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
		ease: Power2.easeOut
	})
})
swiperText.on('slideChangeTransitionStart', function() {
	video.classList.add('change')
}).on('slideChangeTransitionEnd', function() {
	video.classList.remove('change')
})
