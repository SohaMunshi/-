const sliders = document.querySelectorAll('.slider-warpper');


sliders.forEach(slider=>{
	
	slider.addEventListener('input', ()=>{
	slider.lastElementChild.innerHTML = slider.firstElementChild.value
	})	
})
