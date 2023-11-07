// add style to move toggle right
let toggle = document.querySelector('.toggle');
let whiteSwitch = toggle.querySelector('span.white-switch');
console.log(whiteSwitch);

toggle.addEventListener('click', function() {
  whiteSwitch.classList.toggle('move-right');
  let allPrices = document.querySelectorAll('.price');
  allPrices.forEach(price => price.classList.toggle('hidden'));
});