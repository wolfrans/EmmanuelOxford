  const panel = document.getElementById('info-panel');
  const button = document.querySelector('.buttons button');

  function togglePanel() {
    panel.classList.toggle('visible');
  }

  // Hide panel only when clicking outside
  document.addEventListener('click', (event) => {
    const clickedInsidePanel = panel.contains(event.target);
    const clickedButton = button.contains(event.target);

    if (!clickedInsidePanel && !clickedButton) {
      panel.classList.remove('visible');
    }
  });