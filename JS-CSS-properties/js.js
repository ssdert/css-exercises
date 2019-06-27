var links = document.getElementsByClassName('navigation__link');
var numberOfLinks = links.length;
var lastLinkClicked;
for ( var n = 0; n < numberOfLinks; n++) {
  console.log(links[n]);
  links[n].addEventListener('click', colorMeBlue);
}
function colorMeBlue() {

  if ( lastLinkClicked ) {
    lastLinkClicked.classList.remove('navigation__link-active');
  }
  this.classList.add('navigation__link-active');

  lastLinkClicked = this;

  console.log(this.dataset.color);
/*   document.body.style.backgroundColor = this.dataset.color; */

/*   var backgroundCard = document.getElementById('dolphin');
  backgroundCard.style.backgroundColor = this.dataset.color; */

  var backgroundCard = document.getElementById('island');
  backgroundCard.style.backgroundColor = this.dataset.color;

  var backgroundCard = document.getElementById('earth');
  backgroundCard.style.backgroundColor = this.dataset.color;

/*   var backgroundCard = document.getElementsByClassName('card');
  backgroundCard.style.backgroundColor = this.dataset.color; */
} 

var toNextSlideOne = document.getElementById('nextSlideOne');
toNextSlideOne.addEventListener('click', nextSlideOne);

function nextSlideOne() {

  document.getElementById('earth').style.display = 'none';
  document.getElementById('island').style.display = 'none';
  document.getElementById('dolphin').style.display = 'grid';
  


  /* TweenMax.from('#dolphin .card__image', 2, { x: -1000, ease: Elastic.easeOut});
  TweenMax.from('#dolphin .card__image--bg', 2, { y: 1000, ease: Elastic.easeOut}); */
}

var toNextSlideTwo = document.getElementById('nextSlideTwo');
toNextSlideTwo.addEventListener('click', nextSlideTwo);

function nextSlideTwo() {

  document.getElementById('island').style.display = 'grid';
  document.getElementById('dolphin').style.display = 'none';
  document.getElementById('earth').style.display = 'none';
  

  /* TweenMax.from('#island .card__image', 2, { x: -1000, ease: Elastic.easeOut});
  TweenMax.from('#island .card__image--bg', 2, { y: 1000, ease: Elastic.easeOut}); */
  }

var toNextSlideThree = document.getElementById('nextSlideThree');
toNextSlideThree.addEventListener('click', nextSlideThree);

function nextSlideThree() {

  document.getElementById('earth').style.display = 'grid';
  document.getElementById('island').style.display = 'none';
  document.getElementById('dolphin').style.display = 'none';


 /*  TweenMax.from('#earth .card__image', 2, { x: -1000, ease: Elastic.easeOut});
  TweenMax.from('#earth .card__image--bg', 2, { y: 1000, ease: Elastic.easeOut}); */
}


  