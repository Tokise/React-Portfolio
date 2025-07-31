export function setupSectionAnimations() {
  if (!window.IntersectionObserver) return;
  const observer = new window.IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('pre-animate');
    observer.observe(section);
  });
}