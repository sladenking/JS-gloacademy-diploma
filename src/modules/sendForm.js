import { data } from './calc';

const sendForm = () => {
	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const forms = document.querySelectorAll('form'),
		bodyHtml = document.querySelector('body'),
		inputConsult = document.querySelector('input[name="user_quest"]'),
		btns = document.querySelectorAll('button[name="submit"]');
	const loader = () => `
		<style>
		.preloader__container {
			position: fixed;
			background-color: rgba(0, 0, 0, .8);
			height: 100%;
			width: 100%;
			z-index: 10;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: space-around;
			top: 0;
		}
		.sk-rotating-plane {
			width: 4em;
			height: 4em;
			margin: auto;
			background-color: #f28c07;
			animation: sk-rotating-plane 1.2s infinite ease-in-out;
		}
		@keyframes sk-rotating-plane {
			0% {
				transform: perspective(120px) rotateX(0deg) rotateY(0deg);
			}
			50% {
				transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
			}
			100% {
				transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
			}
		}		 
		</style>
		<section></section>
		<div class="preloader">
			<div class="preloader__container">
				<div class='sk-rotating-plane'></div>
			</div>
		</div>
	`;

	const statusMessage = document.createElement('div');
	statusMessage.classList.add('status-message');
	statusMessage.style.cssText = 'font-size: 2rem; color: #000';

	const removeStatusMessage = () => {
		const status = document.querySelector('.status-message');
		if (!status) return;
		setTimeout(() => {
			status.remove();
		}, 5000);
	};

	const postData = body => fetch('./server.php', {
		method: 'POST',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	forms.forEach(form => {
		form.addEventListener('input', event => {
			const target = event.target;
			if (target.name === 'user_phone') {
				target.value = target.value.replace(/[^+\d]/g, '');
			}
			if (target.name === 'user_name') {
				target.value = target.value.replace(/[^а-я ]/gi, '');
			}
			btns.forEach(elem => {
				if (target.name === 'user_phone' && target.value.length < 10) {
					elem.setAttribute("disabled", "true");
					target.style.cssText = 'border: 2px solid red';
				} else {
					elem.removeAttribute('disabled');
					target.style.cssText = 'border: none';
				}
			});
		});

		form.addEventListener('submit', event => {
			event.preventDefault();

			if (!form.classList.contains('director-form')) {
				form.insertAdjacentElement('beforeend', statusMessage);
				statusMessage.textContent = loadMessage;

				bodyHtml.insertAdjacentHTML('beforeend', loader());
				const loaderHtml = document.querySelector('.preloader');

				const formData = new FormData(form);
				let body = {};
				for (const val of formData.entries()) {
					body[val[0]] = val[1];
				}
				if (form.classList.contains('consultation-form')) {
					body.quest = inputConsult.value;
					inputConsult.value = '';
				} else if (form.classList.contains('discount-form')) {
					body = Object.assign(body, data);
				}

				const outputData = response => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}
					removeStatusMessage();
					statusMessage.textContent = successMessage;
					form.reset();
					loaderHtml.remove();
				};

				const error = error => {
					removeStatusMessage();
					statusMessage.textContent = errorMessage;
					console.error(error);
					loaderHtml.remove();
				};

				postData(body)
					.then(outputData)
					.catch(error);
			}
		});
	});
};

export default sendForm;
