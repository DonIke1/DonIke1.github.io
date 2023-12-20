document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });
});
