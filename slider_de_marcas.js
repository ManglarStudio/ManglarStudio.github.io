const slider = document.querySelector('.slider');
let count = 1;

function slide() {
    const slideWidth = slider.querySelector('.slide').clientWidth;
    slider.style.transform = `translateX(${-slideWidth * count}px)`;
    count++;

    // Si el contador es igual al número de diapositivas / 2, vuelve al inicio sin transición
    if (count === slider.children.length / 2) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            count = 1;
        }, 0);
    }
}

setInterval(slide, 2000); // Cambiar imagen cada 2 segundos (2000 ms)
