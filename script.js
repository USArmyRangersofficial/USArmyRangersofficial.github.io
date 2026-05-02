// fade IN
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// fade OUT navigace
function navigate(event, url) {
  event.preventDefault();

  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = url;
  }, 300);
}

// popup
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}