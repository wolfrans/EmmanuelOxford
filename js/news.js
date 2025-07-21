document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.previousElementSibling;
    const isOpen = details.style.display === "block";

    details.style.display = isOpen ? "none" : "block";
    button.textContent = isOpen ? "Read More" : "Show Less";
  });
});
