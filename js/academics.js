// academic.js

const showBtn = document.getElementById('showCurriculum');
const panel = document.getElementById('curriculumPanel');

showBtn.addEventListener('click', () => {
  panel.classList.toggle('visible');
});

// Optional: click outside to close
document.addEventListener('click', (e) => {
  if (!panel.contains(e.target) && e.target !== showBtn) {
    panel.classList.remove('visible');
  }
});