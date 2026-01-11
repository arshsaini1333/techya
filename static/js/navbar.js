const navbar = document.getElementById("tvNavbar");
const drawer = document.getElementById("tvDrawer");
const openBtn = document.getElementById("tvHamburger");
const closeBtn = document.getElementById("tvCloseDrawer");

let lastScrollY = window.scrollY;
let isFloating = false;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  /* ===============================
     TOP OF PAGE
  ================================ */
  if (currentScrollY === 0) {
    navbar.classList.remove("floating", "hidden", "white");
    navbar.style.position = "relative";
    isFloating = false;
  }

  /* ===============================
     SCROLLING UP (SHOW)
  ================================ */
  else if (currentScrollY < lastScrollY) {
    navbar.classList.add("floating", "white");
    navbar.classList.remove("hidden");
    navbar.style.position = "fixed";
    isFloating = true;
  }

  /* ===============================
     SCROLLING DOWN (HIDE)
  ================================ */
  else if (currentScrollY > lastScrollY && isFloating) {
    navbar.classList.add("hidden");
  }

  lastScrollY = currentScrollY;
});

/* ===============================
   MOBILE DRAWER
================================ */
openBtn.addEventListener("click", () => {
  drawer.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  drawer.classList.remove("active");
  document.body.style.overflow = "";
});

drawer.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    drawer.classList.remove("active");
    document.body.style.overflow = "";
  });
});
