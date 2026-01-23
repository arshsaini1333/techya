document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heroVideo");
    const control = document.getElementById("videoControl");
    const icon = control.querySelector(".icon i");
    const label = control.querySelector(".label");
  
    if (!video || !control) {
      console.error("Video or control button not found");
      return;
    }
  
    function updateButton() {
      if (video.paused || video.ended) {
        icon.className = "fas fa-play";
        label.textContent = "Play video";
      } else {
        icon.className = "fas fa-pause";
        label.textContent = "Pause video";
      }
    }
  
    control.addEventListener("click", async (e) => {
      e.preventDefault();
  
      console.log("Play button clicked");
  
      try {
        if (video.paused || video.ended) {
          video.muted = false;     // 🔊 allow sound
          video.volume = 1;
          await video.play();     // MUST be inside click
        } else {
          video.pause();
        }
        updateButton();
      } catch (err) {
        console.error("Video play failed:", err);
      }
    });
  
    // Pause on scroll
    let lastScroll = window.scrollY;
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > lastScroll + 6 && !video.paused) {
          video.pause();
          updateButton();
        }
        lastScroll = window.scrollY;
      },
      { passive: true }
    );
  
    video.addEventListener("ended", updateButton);
    video.addEventListener("pause", updateButton);
    video.addEventListener("play", updateButton);
  });
  

  const items = document.querySelectorAll(".rotator-item");
let current = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove("enter", "show", "exit");
    if (i === index) {
      item.classList.add("enter");
      setTimeout(() => {
        item.classList.remove("enter");
        item.classList.add("show");
      }, 700);
    }
  });
}
showItem(current);
function nextItem() {
  const currentItem = items[current];
  currentItem.classList.remove("show");
  currentItem.classList.add("exit");

  setTimeout(() => {
    currentItem.classList.remove("exit");
    current = (current + 1) % items.length;
    showItem(current);
  }, 600);
}

/* Initial */


/* Rotate */
setInterval(nextItem, 3000);


// Problems we Solved for Others 
const cards = document.querySelectorAll(".problem-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach(card => card.classList.remove("active"));
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  cards.forEach(card => observer.observe(card));


  // Why TEchya VErse

  const counters = document.querySelectorAll(".counter");
  let hasAnimated = false;

  const startCounters = () => {
    if (hasAnimated) return;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const increment = target / 80;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCounter();
    });

    hasAnimated = true;
  };

  const observerWhy = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounters();
        }
      });
    },
    { threshold: 0.4 }
  );

  observerWhy.observe(document.getElementById("why-techyaverse"));


  // Services

  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const cardWidth = document.querySelector(".service-card").offsetWidth + 30;
  const totalCards = document.querySelectorAll(".service-card").length;
  let index = 0;

  function moveCarousel() {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < totalCards - 3) {
      index++;
      moveCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      moveCarousel();
    }
  });

  setInterval(() => {
    if (index >= totalCards - 3) {
      index = 0;
    } else {
      index++;
    }
    moveCarousel();
  }, 4000);

  // Testimonials

  document.querySelectorAll('.testimonials-column').forEach(column => {
    column.addEventListener('mouseenter', () => {
      column.style.animationPlayState = 'paused';
    });
    column.addEventListener('mouseleave', () => {
      column.style.animationPlayState = 'running';
    });
  });

  const faqItems = document.querySelectorAll('.tv-faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.tv-faq-question');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(i => i.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });