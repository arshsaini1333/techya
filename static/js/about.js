
  lucide.createIcons();
  let aboutCounterStarted = false;
  const aboutCounter = document.getElementById("about-exp-counter");

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !aboutCounterStarted) {
        aboutCounterStarted = true;
        let count = 1;
        const interval = setInterval(() => {
          count++;
          aboutCounter.textContent = count;
          if (count === 5) clearInterval(interval);
        }, 200);
      }
    },
    { threshold: 0.5 }
  );

  aboutObserver.observe(document.getElementById("about-section"));

