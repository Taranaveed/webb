// navbar scroll effect
const header = document.querySelector(".navbar");

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
};

// scroll animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
        } else {
            entry.target.classList.remove("scroll-animate");
        }
    });
}, { threshold: 0.3 });

// Add #education to the list of sections to observe
document.querySelectorAll("#skills, #projects, #about, #contact, #portfolio, #education").forEach(section => {
    observer.observe(section);
});

// typewriting effect for hero text
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".hero_text");
    const text = "Hi, I'm Sitara Naveed\nAn AI Student, Developer, and Content Writer";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            if (text[index] === "\n") {
                textElement.innerHTML += "<br>";
            } else {
                textElement.innerHTML += text[index];
            }
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    textElement.innerHTML = "";
    typeWriter();
});