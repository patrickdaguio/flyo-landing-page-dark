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

// Stick Header

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if (window.innerWidth > 475) {
        header.classList.toggle("sticky", window.scrollY > 100)
    }

})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 475) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})

