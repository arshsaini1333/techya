document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const closeBtn = modal.querySelector(".modal-close");

  // Open / close modal
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("open-contact")) {
      e.preventDefault();
      modal.classList.add("active");
    }

    if (e.target === modal || e.target === closeBtn) {
      modal.classList.remove("active");
    }
  });
})

  // Google Sheets submit
  const form = document.getElementById("popupForm");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxRtsUHeRzkWaYqUCVJDy2P7S_sgxNY1TOlBXKnd2LF7eHJwojZQPzgCBg3v_3TrqLzhA/exec";
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const formData = new FormData(form);
  
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        form.reset();
        
      })
      .catch((err) => {
        
      });
  });
  