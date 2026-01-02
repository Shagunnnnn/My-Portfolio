const words = [
  "Java Developer",
  "Backend Developer",
  "Learning Spring Boot",
  "Problem Solver"
];

let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const text = words[i];
  document.querySelector(".typing").textContent =
    isDeleting ? text.substring(0, j--) : text.substring(0, j++);

  if (!isDeleting && j === text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, 120);
}

typeEffect();
