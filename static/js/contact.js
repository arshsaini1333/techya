
  // Google Sheets submit
  const contactForm = document.getElementById("contactForm");
  const scriptURLContact =
    "https://script.google.com/macros/s/AKfycbxRtsUHeRzkWaYqUCVJDy2P7S_sgxNY1TOlBXKnd2LF7eHJwojZQPzgCBg3v_3TrqLzhA/exec";
  
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const contactFormData = new FormData(contactForm);
  
    fetch(scriptURLContact, {
      method: "POST",
      body: contactFormData,
    })
      .then(() => {
        contactForm.reset();
        
      })
      .catch((err) => {
        
      });
  });