
// Update the footer year automatically
const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} My Portfolio. All rights reserved.`;

// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
