const accord = () => {
	const slidesInDown = document.querySelector('.slideInDown'),
		slidesHead = slidesInDown.querySelectorAll('.panel-heading'),
		slidesBody = slidesInDown.querySelectorAll('.panel-collapse');

	const toggleSlides = index => {
		for (let i = 0; i < slidesBody.length; i++) {
			if (index === i) {
				slidesBody[i].style.display = 'block';
			} else {
				slidesBody[i].style.display = 'none';
			}
		}
	};


	slidesInDown.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;
		target = target.closest('.panel-heading');


		if (target) {
			slidesHead.forEach((item, i) => {
				if (item === target) {
					toggleSlides(i);
				}
			});
		}
	});
};

export default accord;
