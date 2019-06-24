var toNextSlideTwo = document.getElementById('nextSlideTwo');
toNextSlideTwo.addEventListener('click', nextSlideTwo);

function nextSlideTwo() {
  console.log('A');

  document.getElementById('island').style.display = 'grid';
  document.getElementById('dolphin').style.display = 'none';
  document.getElementById('earth').style.display = 'none';  

  TweenMax.from('#island .card__image', 2, { x: -1000, ease: Elastic.easeOut});
  TweenMax.from('#island .card__image--bg', 2, { y: 1000, ease: Elastic.easeOut});
  }

var toNextSlideThree = document.getElementById('nextSlideThree');
toNextSlideThree.addEventListener('click', nextSlideThree);

function nextSlideThree() {
  console.log('B');

  document.getElementById('earth').style.display = 'grid';
  document.getElementById('island').style.display = 'none';
  document.getElementById('dolphin').style.display = 'none';

  TweenMax.from('#earth .card__image', 2, { x: -1000, ease: Elastic.easeOut});
  TweenMax.from('#earth .card__image--bg', 2, { y: 1000, ease: Elastic.easeOut});
}

var toNextSlideOne = document.getElementById('nextSlideOne');
toNextSlideOne.addEventListener('click', nextSlideOne);

function nextSlideOne() {
  console.log('C');

  document.getElementById('earth').style.display = 'none';
  document.getElementById('island').style.display = 'none';
  document.getElementById('dolphin').style.display = 'grid';

  TweenMax.from('#dolphin .card__image', 2, { x: -1000, ease: Elastic.easeOut});
  TweenMax.from('#dolphin .card__image--bg', 2, { y: 1000, ease: Elastic.easeOut});
}
  