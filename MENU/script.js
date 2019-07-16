var mainList = document.getElementById('mainList')
var shopList = document.getElementById('shopListRight')
var readList = document.getElementById('readListRight')
var searchSection = document.getElementById('searchSection')
var backBtn = document.getElementById('backBtn')
tl = new TimelineMax

//open shop sub-menu
function openShop() { 
  backBtn.style.setProperty('opacity', '1')

  TweenMax.to(mainList, .7, {x:-120, opacity:0})
  TweenMax.to(shopList, .7, {x: -100,delay:.6, opacity: 1, ease: Expo.easeOut})
  TweenMax.to(backBtn, .7, {opacity: 1})
}

//open read sub-menu
function openRead() {
  backBtn.style.setProperty('opacity', '1')

  TweenMax.to(mainList, .7, {x:-120, opacity:0})
  TweenMax.to(readList, 1.5, {x: -100,delay:.6, opacity: 1, ease: Expo.easeOut})
}

//open search sub-menu
function openSearch() {
  backBtn.style.setProperty('opacity', '1')

  TweenMax.to(mainList, .7, {x:-120, opacity:0})
  TweenMax.to(searchSection, 1, {x: -100,delay:.6, opacity: 1, ease: Expo.easeOut})
}
  
function back() {
  backBtn.style.setProperty('opacity', '0')
  
  
  TweenMax.to(searchSection, .6, {x: 100, opacity: 0})
  TweenMax.to(shopList, .6, {x: 50, opacity: 0})
  TweenMax.to(readList, .6, {x: 50, opacity: 0})
  TweenMax.to(mainList, 1, {x:0, delay:.5, opacity:1, ease:Power4.easeOut})
  // TweenMax.to(backBtn, 1, {opacity: 0})
}