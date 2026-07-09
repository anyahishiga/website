function showPage(name) {
  $$('.page').forEach(page => page.classList.remove('active'));
  $(`#page-${name}`).classList.add('active');
  window.scrollTo(0, 0);

  if (name === 'addReview') populateReviewSelect();
}

function setActiveNav(btn) {
  $$('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function goBack() {
  showPage('home');
}
