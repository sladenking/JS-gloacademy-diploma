const togglePopUp = () => {
  const popupCall = document.querySelector('.popup-call'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupCheck = document.querySelector('.popup-check'),
    popupContent = document.querySelector('.popup-content');

  document.body.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('call-btn')) {
      popupCall.style.display = 'block';
      popupContent.style.top = '10%';
    } else if (target.classList.contains('popup-close') || target.classList.contains('popup-call')) {
      popupCall.style.display = 'none';
    } 

    if (target.classList.contains('discount-btn')) {
      popupDiscount.style.display = 'block';
      popupContent.style.top = '10%';
    } else if (target.classList.contains('popup-close') || target.classList.contains('popup-discount')) {
      popupDiscount.style.display = 'none';
    } 

    if (target.classList.contains('check-btn')) {
      popupCheck.style.display = 'block';
      popupContent.style.top = '10%';
    } else if (target.classList.contains('popup-close') || target.classList.contains('popup-check')) {
      popupCheck.style.display = 'none';
    }

  });
};


export default togglePopUp;
