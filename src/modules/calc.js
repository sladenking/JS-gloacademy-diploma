const calc = () => {
	const calcBlock = document.getElementById('accordion'),
		checkBoxDiv = document.querySelectorAll('.onoffswitch'),
		checkBoxes = document.querySelectorAll('.onoffswitch-checkbox'),
		nextBtn = document.querySelectorAll('.construct-btn'),
		panels = document.querySelectorAll('.panel-collapse'),
		panelsHead = document.querySelectorAll('.panel-heading');

	const countSum = () => {
		console.log('event');
	};

	checkBoxDiv.forEach(item => {
		item.addEventListener('click', () => {
			checkBoxes.forEach(item => {
				if (item.checked === false) {
					item.checked = true;
				} else {
					item.checked = false;
				}
			});
		});
	});

	const togglePanels = index => {
		for (let i = 0; i < panels.length; i++) {
			if (index === i) {
				panels[i].classList.add('in');
			} else {
				panels[i].classList.remove('in');
			}
		}
	};

	calcBlock.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;
		console.log('target: ', target);

		if (target.classList.contains('construct-btn')) {
			switch (true) {
			case (target.getAttribute('href') === '#collapseTwo'):
				panels[0].classList.remove('in');
				panels[1].classList.add('in');
				break;
			case (target.getAttribute('href') === '#collapseThree'):
				panels[1].classList.remove('in');
				panels[2].classList.add('in');
				break;
			case (target.getAttribute('href') === '#collapseFour'):
				panels[2].classList.remove('in');
				panels[3].classList.add('in');
				break;
			}
		}

		target = target.closest('.panel-heading');
		if (target) {
			panelsHead.forEach((item, i) => {
				if (item === target) {
					togglePanels(i);
				}
			});
		}
	});

	calcBlock.addEventListener('change', event => {
		const target = event.target;

		if (target.matches('select') || target.matches('input')) {
			countSum();
		}
	});

};

export default calc;
