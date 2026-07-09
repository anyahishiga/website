renderHome();
renderBrowse();

$('#featuredStrip').innerHTML = restaurants.filter(r => r.featured).map(renderCard).join('');

function scrollFeatured(direction) {
  const strip = document.getElementById('featuredStrip');
  const scrollAmount = 340;
  if (direction === 'left') {
    strip.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    strip.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}