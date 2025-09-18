
const carres = document.querySelectorAll('.carre');


carres.forEach(carres => {
    carres.addEventListener('click', () => {
        carres.classList.toggle('active');
    });
});

