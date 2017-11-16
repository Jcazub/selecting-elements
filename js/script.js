document.querySelector('#header').textContent += "Hello World"; //document.querySelector will return a single element that is the first in matching the criteria within the ()
//Use += to add the above text to text already present in the html. Use = to replace the html content with the above

// document.querySelector('.p-styles').textContent = "Bahuh?";
//This only selects the first p element.

var pStyles = document.querySelectorAll('.p-styles');

console.log(pStyles.length);

console.log(pStyles);

for (i = 0; i < pStyles.length; i++){
  pStyles[i].textContent = "I'm p-styles " + (i + 1);
}

var liText = document.querySelectorAll('ul li');

for (i = 0; i < liText.length; i++) {
  liText[i].textContent = (i + 1);
}


document.getElementById('second-header').textContent = "Something";

var awesomes = document.getElementsByClassName('awesome');

console.log(awesomes);

for (i = 0; i < awesomes.length; i++) {
  awesomes[i].textContent = "I'm header " + (i+1);
}

var hThrees = document.getElementsByTagName('h3');

var k = '';
for (i = 0; i < hThrees.length; i++) {
  // hThrees[i].textContent = 'This is tag ' + (i+1);
  hThrees[i].textContent = 'Kurt is '+k+'nice';
  k = k + ' really ';

}
