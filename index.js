document.querySelectorAll('section a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer'); // Security best practice
});
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const offset = 80; // Adjust this based on your fixed navbar height
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    });
});
