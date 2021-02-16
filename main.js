// Email Validation
const input = document.querySelector('.subscribe__input');
const form = document.querySelector('.subscribe__form');
const error = document.querySelector('.subscribe__error');

form.addEventListener('submit', validateEmail)

function validateEmail(e) {
    const email = input.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLowerCase())) {
        error.classList.remove("subscribe__error--active");
    } else {
        error.classList.add("subscribe__error--active");
        e.preventDefault();
    }
}