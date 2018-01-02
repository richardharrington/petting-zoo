function nearestAncestorWithClass(el, klass) {
  function recur(el) {
    return el && (el.classList.contains(klass) ? el : recur(el.parentNode));
  }
  return recur(el);
}

var container = document.querySelector('.container');

// Set the animals to display and play music when clicked
container.addEventListener('click', function(event) {
  var animal = nearestAncestorWithClass(event.target, 'animal');
  animal.classList.toggle('animated');

  var sound = animal.querySelector('audio');
  sound.currentTime = 0;
  sound.play();
});

// Init pics and sounds
['bel', 'bun-bun', 'fergie'].forEach(function(animal) {
  // Cache the pic
  new Image().src = 'images/' + animal + '.png';
  // Cache and load the sound
  var sound = new Audio('sounds/' + animal + '.mp3');
  var el = container.querySelector('.' + animal);
  el.appendChild(sound);
});

// Increase the size of the animal names
setTimeout(function() {
  container.classList.remove('start-out-small');
}, 0);
