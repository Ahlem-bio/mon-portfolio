const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.2s";
    });

    buttonn.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

document.querySelectorAll('a[href^="#]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"  
        }); 
    });
});

const cvlink = document.querySelectorAll('a[download="cv_Ahlem"]');
cvlink.addEventListener("click", () => {
    alert("Merci d'avoir téléchargé mon CV")
});

const fadeElements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("visible");
        }
    });
});

document.querySelectorAll(".nav-links a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smmoth"
    });
  });
}):