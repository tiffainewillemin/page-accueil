//Dropdown
function myDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

}
//Sticky navbar


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Navbar gauche
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Disparition navbar
let fade = document.getElementById("navbar")
//let fade = document.querySelector("#nav")
    let minScrollValue = 15;

    document.addEventListener('scroll',() => {
		let scroll  = document.documentElement.scrollTop;
    if(scroll < minScrollValue) {
      fade.style.opacity = "1";
    } else {
    	fade.style.opacity = "0";
    }
    minScrollValue = scroll;
    });

//Faire apparaitre une image



//Position SECTIONS
var posSection2= document.getElementById("second").offsetTop;
var posSection3= document.getElementById("third").offsetTop;

// apparition sections


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > posSection2 || document.documentElement.scrollTop > 400) {
      document.getElementById("secondImg").className = "animation";
	  document.getElementById("secondTitre1").className = "animation";
	  document.getElementById("secondTitre2").className = "animation";
  }
	if (document.body.scrollTop > posSection3 || document.documentElement.scrollTop > 400) {
		document.getElementById("thirdTitre").className = "animation";	  
  }
}


//Apparition texte toutes les 2s

var mot0 = 'Maintenant';
var mot1 = 'à';
var mot2 = 'vous';
var mot3 = 'de';
var mot4 = 'jouer !';


for(var i = 0; i < 5; i++){
    (function(i){
        setTimeout(function(){
           	document.getElementById('anim').innerHTML = window['mot'+i];
        }, 2000 * (i + 1));
    })(i);
}

