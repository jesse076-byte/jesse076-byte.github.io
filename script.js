// PITCH — Jesse Escolastico Portfolio
// Basic interactivity stub
document.addEventListener('DOMContentLoaded', function () {
// Auto-fill current year in footer
var yearEl = document.getElementById('year');
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}
// Workflow diagram demo — placeholder for future clickable interaction
var workflowDiagram = document.getElementById('workflow-diagram');
if (workflowDiagram) {
workflowDiagram.addEventListener('click', function () {
// [FILL IN: workflow steps]
// This will eventually render a clickable, step-by-step diagram of an
// automation pipeline (e.g. Trigger -> Data Enrichment -> AI Agent
// Decision -> Action -> Notification). Each step should be clickable
// to reveal a short description of what happens at that stage.
console.log('Workflow diagram clicked — interactive demo coming soon.');
});
}
});
