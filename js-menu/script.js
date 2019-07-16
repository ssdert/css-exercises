var mainList = document.getElementById('mainList')
var shopList = document.getElementById('shopListR')
var readList = document.getElementById('readListR')
var logoImg = document.getElementById('homeBtn')
var backImg = document.getElementById('bcBtn')

function openShop() { 
  TweenMax.to(mainList, .7, {x:-120})
  TweenMax.to(shopList, .7, {x:100, delay:.6, display: "block", ease: Expo.easeOut})
  TweenMax.to(logoImg, .2, {display: "none", ease: Expo.easeOut})
  TweenMax.to(backImg, 1, {delay:.6, visibility: "visible", ease: Expo.easeOut})
}

function openRead() {
  TweenMax.to(mainList, .7, {x:-120,})
  TweenMax.to(readList, .7, {x:100, delay:.6, display: "block", ease: Expo.easeOut})
  TweenMax.to(logoImg, .2, {display: "none", ease: Expo.easeOut})
  TweenMax.to(backImg, 1, {delay:.6, visibility: "visible", ease: Expo.easeOut})
}

function backMenu() {
  TweenMax.to(mainList, .7, {x: 0, display: "block"})
  TweenMax.to(shopList, 0, {display: "none", ease: Expo.easeOut})
  TweenMax.to(readList, 0, {display: "none", ease: Expo.easeOut})
  TweenMax.to(logoImg, .5, {display: "block", ease: Expo.easeOut})
  TweenMax.to(backImg, 0, {visibility: "hidden", ease: Expo.easeOut})
}