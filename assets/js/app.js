
function checkResumeAccess() {
  const password = prompt("Enter access code to download resume:");
  if (password === "shagun@resume") {
    window.location.href = "assets/resume/Shagun_Goel_Resume.pdf";
  } else {
    alert("Access denied");
  }
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: this[0].value,
      email: this[1].value,
      message: this[2].value
    };

    await fetch("PASTE_GOOGLE_SCRIPT_URL_HERE", {
      method: "POST",
      body: JSON.stringify(data)
    });

    alert("Message sent successfully!");
    this.reset();
  });
}

// ================= SCROLL ANIMATION (OLD LOGIC - KEEP SAFE) =================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight * 0.85) {
      sec.classList.add("show");
    }
  });
});

// ================= CUSTOM CURSOR (NEW - FIXED & SAFE) =================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline) {
  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";
  });

  function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.left = outlineX + "px";
    cursorOutline.style.top = outlineY + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}
