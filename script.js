// PITCH — Jesse Escolastico Portfolio
// Basic interactivity stub
document.addEventListener('DOMContentLoaded', function () {
// Auto-fill current year in footer
var yearEl = document.getElementById('year');
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}
});
