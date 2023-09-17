function animateSections() {
  const sections = document.querySelectorAll(".slide-in");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
      section.classList.add("slide-in");
    } else {
      section.classList.remove("slide-in");
    }
  });
}

// Call the animateSections function when the page loads and when the user scrolls
window.addEventListener("DOMContentLoaded", animateSections);
window.addEventListener("scroll", animateSections);
