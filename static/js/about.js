document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  let aboutCounterStarted = false;
  const aboutCounter = document.getElementById("about-exp-counter");

  if (!aboutCounter) return;

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !aboutCounterStarted) {
        aboutCounterStarted = true;

        let count = 0;
        const target = 5;

        const interval = setInterval(() => {
          count++;
          aboutCounter.textContent = count;

          if (count >= target) {
            clearInterval(interval);
          }
        }, 200);
      }
    },
    { threshold: 0.5 }
  );

  // 🚨 THIS WAS MISSING
  aboutObserver.observe(aboutCounter);
});
