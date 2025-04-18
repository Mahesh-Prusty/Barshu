// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const surpriseBtn = document.getElementById("surpriseBtn");
  const surpriseButtonContainer = document.getElementById("surpriseButton");
  const content = document.getElementById("content");
  const birthdayMusic = document.getElementById("birthdayMusic");

  // Function to show the surprise content
  surpriseBtn.addEventListener("click", function () {
    // Hide the surprise button
    surpriseButtonContainer.style.display = "none";

    // Show the content with a fade-in animation
    content.classList.remove("hidden");

    // Play the music
    birthdayMusic.play();
  });
});
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createHeart() {
  const x = Math.random() * canvas.width;
  const size = Math.random() * 20 + 10;
  hearts.push({
    x,
    y: canvas.height,
    size,
    speed: Math.random() * 1 + 0.5,
    alpha: 1,
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, i) => {
    ctx.globalAlpha = h.alpha;
    ctx.font = `${h.size}px Arial`;
    ctx.fillStyle = "rgba(255, 105, 180, 1)";
    ctx.fillText("💖", h.x, h.y);
    h.y -= h.speed;
    h.alpha -= 0.002;
    if (h.alpha <= 0) hearts.splice(i, 1);
  });
  ctx.globalAlpha = 1;
}

setInterval(() => {
  createHeart();
}, 300);

function animateHearts() {
  drawHearts();
  requestAnimationFrame(animateHearts);
}
animateHearts();
window.addEventListener("load", () => {
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, 1000);
});
