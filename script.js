// PITCH — Jesse Escolastico Portfolio
// Basic interactivity stub
document.addEventListener('DOMContentLoaded', function () {
// Auto-fill current year in footer
var yearEl = document.getElementById('year');
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}
// Real pipeline demo — static step descriptions, no live calls
var pipelineDetails = [
'Runs automatically every morning at 9 AM — no manual step, no one has to remember to start it.',
'Queries the federal FMCSA carrier census — public government data, not scraped or purchased from a list broker.',
'Strips out competitor dispatch services by name and drops any record missing a usable federal ID before it goes any further.',
'Cross-checks each carrier’s FMCSA authority status and out-of-service history, dedupes against every lead already contacted, and drops anyone without a working phone or email.',
'An AI model scores each carrier’s fit and drafts a one-line, lead-specific outreach angle — not a template line, a real one referencing that carrier’s cargo and location.',
'Verified leads are written straight to the database and a same-day summary lands in Telegram — zero manual steps from federal registry to inbox.'
];
var pipelineSteps = document.querySelectorAll('.pipeline-step');
var pipelineDetailText = document.getElementById('pipeline-detail-text');
if (pipelineSteps.length && pipelineDetailText) {
for (var i = 0; i < pipelineSteps.length; i++) {
(function (btn, index) {
btn.addEventListener('click', function () {
for (var j = 0; j < pipelineSteps.length; j++) {
pipelineSteps[j].classList.remove('active');
pipelineSteps[j].setAttribute('aria-pressed', 'false');
}
btn.classList.add('active');
btn.setAttribute('aria-pressed', 'true');
pipelineDetailText.textContent = pipelineDetails[index];
});
})(pipelineSteps[i], i);
}
}
});
