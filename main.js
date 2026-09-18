const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const items = document.querySelectorAll(".reveal");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });
  items.forEach(item => observer.observe(item));
} else {
  items.forEach(item => item.classList.add("is-visible"));
}

const hero = document.querySelector(".hero");
const subject = document.querySelector(".hero-subject");
if (hero && subject && !reduced) {
  hero.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5);
    const y = (event.clientY / window.innerHeight - 0.5);
    subject.style.transform = `translateX(calc(-50% + ${x * 14}px)) translateY(${y * 8}px)`;
  }, { passive: true });
  hero.addEventListener("pointerleave", () => {
    subject.style.transform = "translateX(-50%)";
  });
}
