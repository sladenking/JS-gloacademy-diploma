const calc = () => {
	const calcBlock = document.getElementById('accordion'),
		checkBoxDiv = document.querySelectorAll('.onoffswitch'),
		checkBoxes = document.querySelectorAll('.onoffswitch-checkbox'),
		panels = document.querySelectorAll('.panel-collapse'),
		panelsHead = document.querySelectorAll('.panel-heading'),
		titleText = document.querySelectorAll('.title-text')[1],
		selectBox = document.querySelectorAll('.select-box'),
		calcResult = document.getElementById('calc-result');

	const data = {};

	const countSum = () => {
		const calcType = document.querySelectorAll('.form-control'),
			distance = document.getElementById('distance');
		const typeValue1 = parseFloat(calcType[0].options[calcType[0].selectedIndex].value),
			typeValue2 = parseFloat(calcType[1].options[calcType[1].selectedIndex].value),
			typeValue3 = parseFloat(calcType[2].options[calcType[2].selectedIndex].value),
			typeValue4 = parseFloat(calcType[3].options[calcType[3].selectedIndex].value);

		const checkBox1Checked = () => {
			if (typeValue1 === 2) {
				data.total *= 1.2;
			}
			data.diameter1 = typeValue1;


			switch (true) {
			case (typeValue2 === 2):
				data.total *= 1.3;
				break;
			case (typeValue2 === 3):
				data.total *= 1.5;
				break;
			}
			data.numberRings1 = typeValue2;
		};

		if (checkBoxes[0].checked) {
			titleText.style.display = 'none';
			selectBox[2].style.display = 'none';
			selectBox[3].style.display = 'none';

			data.total = 10000;

			checkBox1Checked();

			if (checkBoxes[1].checked) {
				data.total += 1000;
				data.bottom = 'yes, +1000';
			}

		} else if (!checkBoxes[0].checked) {
			titleText.style.display = '';
			selectBox[2].style.display = '';
			selectBox[3].style.display = '';

			data.total = 15000;

			checkBox1Checked();

			if (typeValue3 === 2) {
				data.total *= 1.2;
			}
			data.diameter2 = typeValue3;

			switch (true) {
			case (typeValue4 === 2):
				data.total *= 1.3;
				break;
			case (typeValue4 === 3):
				data.total *= 1.5;
				break;
			}
			data.numberRings2 = typeValue4;

			if (checkBoxes[1].checked) {
				data.total += 2000;
				data.bottom = 'yes, 2000';
			}
		}

		data.distance = +distance.value;
		calcResult.placeholder = `Примерная стоимость: ${data.total} руб.`;
	};

	for (let i = 0; i < checkBoxDiv.length; i++) {
		checkBoxDiv[i].addEventListener('click', () => {
			if (checkBoxes[i].checked) {
				checkBoxes[i].removeAttribute('checked');
			} else {
				checkBoxes[i].setAttribute('checked', 'checked');
			}
		});
	}

	const togglePanels = index => {
		countSum();
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

		if (target.classList.contains('construct-btn')  && !target.classList.contains('discount-btn')) {
			countSum();
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

		if (target.matches('select')) {
			countSum();
		}
	});

};

export default calc;
