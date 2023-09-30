document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');
    const targetNumber = 43571974;
    const duration = 2000;

    const updateCounter = (start, end, duration, element) => {
        const startTime = Date.now();

        const update = () => {
            const currentTime = Date.now();
            const progress = Math.min(1, (currentTime - startTime) / duration);
            const value = Math.floor(progress * (end - start) + start);

            element.textContent = value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        update();
    };

    updateCounter(0, targetNumber, duration, counterElement);

    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav ul');

    mobileMenuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    const donateButton = document.getElementById('donate');
    donateButton.addEventListener('click', openPopup);
});

let popup = document.querySelector('.popup');

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}