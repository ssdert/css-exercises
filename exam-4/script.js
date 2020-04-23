var elements = document.getElementsByClassName("column");
var line = document.getElementById("line");
var line1 = document.getElementById("line1");
var line1 = document.getElementById("line2");
var line1 = document.getElementById("line3");
var line1 = document.getElementById("line4");
var line1 = document.getElementById("line5");
    
var i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
    document.getElementById("line").style.visibility = "visible";
    document.getElementById("line1").style.visibility = "visible";
    document.getElementById("line2").style.visibility = "visible";
    document.getElementById("line3").style.visibility = "visible";
    document.getElementById("line4").style.visibility = "visible";
    document.getElementById("line5").style.visibility = "visible";
  }
}

function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
    document.getElementById("line").style.visibility = "hidden";
    document.getElementById("line1").style.visibility = "hidden";
    document.getElementById("line2").style.visibility = "hidden";
    document.getElementById("line3").style.visibility = "hidden";
    document.getElementById("line4").style.visibility = "hidden";
    document.getElementById("line5").style.visibility = "hidden";
  }
}

var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var btnAbout = document.getElementById('btnMenu');
var btnBack = document.getElementById('btnBack');
var sectionMenu = document.getElementById('sectionMenu');

btnMenu.addEventListener('click', toggleAboutMenu);
btnBack.addEventListener('click', toggleAboutMenu);

function toggleAboutMenu() {
  sectionMenu.classList.toggle('visible');
}