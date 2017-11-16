var changeBg = document.querySelector('#change-bg');
var colors = ['pink', 'green', 'blue', 'purple', 'red'];
var clicks = 0;
var bClicks = 0;

// changeBg.addEventListener('click', function () {changeBg.style.backgroundColor = colors[0];});

changeBg.addEventListener('click', function() { //addEventListener must take 2 arguements, an event to listen for and something to do when that event is triggered.
  changeBg.style.backgroundColor = colors[clicks];
  clicks++;
  if (clicks === colors.length) {
    clicks = 0;
  }
});


function changeBodyColor () { //a seperate function that can be referrenced throughout the document, unlike the function impelmented in the listnener event above
  document.body.style.backgroundColor = colors[bClicks];
  bClicks++;
  if (bClicks === colors.length) {
    bClicks = 0;
  }
}

changeBg.addEventListener('click', changeBodyColor); //makes use of the above function instead of defining the function in the event listener


//randomize the background color

// changeBg.addEventListener('click', function () {
// changeBg.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
// });
