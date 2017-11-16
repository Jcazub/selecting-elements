var changeBg = document.querySelector('#change-bg');
var colors = ['pink', 'green', 'blue', 'purple', 'red'];
var clicks = 0;
var bClicks = 0;

// changeBg.addEventListener('click', function () {changeBg.style.backgroundColor = colors[0];}); //addEventListener must take 2 arguements, an event to listen for and something to do when that event is triggered.

changeBg.addEventListener('click', function() {
  changeBg.style.backgroundColor = colors[clicks];
  clicks++;
  if (clicks === colors.length) {
    clicks = 0;
  }
});


function changeBodyColor () {
  document.body.style.backgroundColor = colors[bClicks];
  bClicks++;
  if (bClicks === colors.length) {
    bClicks = 0;
  }
}

changeBg.addEventListener('click', changeBodyColor);


//randomize the background color

// changeBg.addEventListener('click', function () {
// changeBg.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
// });
