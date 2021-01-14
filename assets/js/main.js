//// scrooling header


var navbar= document.querySelector(".navbar")

//// scroll katgolih ila lwindow bdat kathbet ltaht ikhdm la function fixe
function fixe(){
  navbar.classList.toggle('scrollactive' , window.scrollY > 0);
}

window.addEventListener('scroll', fixe)



///////////////////////////// change menu color onscroll


getComputedStyle(document.documentElement)
.getPropertyValue('--menu');

window.onscroll = function () { 
	scrollFunction(); 
}; 

function scrollFunction(){
  if (document.documentElement.scrollTop > 0) {
    document.documentElement.style
    .setProperty('--menu', 'grey');
  }
  else{
    document.documentElement.style
    .setProperty('--menu', 'white');
  }

}





//// close and open circle color
  
var circle_off= document.querySelector(".switch-color");

var seeting_off =document.querySelector(".setting-off");

var click_1 = true;

function switch_color() {

  if(click_1 == true){
    circle_off.id="circle_on";
    click_1 = false;
  }
 else{
    circle_off.id="circle_left";
    click_1 = true;
  }

}

seeting_off.onclick=switch_color;









///////////////////// switch color to another primary color


var color_1= document.querySelector(".color1");
var color_2= document.querySelector(".color2");
var color_3= document.querySelector(".color3");
var color_4= document.querySelector(".color4");


getComputedStyle(document.documentElement)
.getPropertyValue('--color1');

function switch_primary1(){
document.documentElement.style
    .setProperty('--color1', ' #c70039');
}
function switch_primary2(){
  document.documentElement.style
    .setProperty('--color1', '#df00cc');
}
function switch_primary3(){
  document.documentElement.style
    .setProperty('--color1', '#ffdc15');
}
function switch_primary4(){
  document.documentElement.style
    .setProperty('--color1', '#002fff');
}

color_1.onclick= switch_primary1;
color_2.onclick= switch_primary2;
color_3.onclick= switch_primary3;
color_4.onclick= switch_primary4;












$(() => {
	// ====== [BEGIN] Toggle the sidebar on mobile version ======
	const btnMenu = document.getElementById("menu-icon-trigger");
	btnMenu.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector('.menu-icon-wrapper').classList.toggle('open');
		document.querySelector('.nav-content').classList.toggle('is-active');
	});
	// ====== [END] Toggle the sidebar on mobile version ======

	// Enable bootstrap Tooltip
	$('[data-toggle="tooltip"]').tooltip();
});

















//////////////// our services


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 100) || 4000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #F26921 }";
  document.body.appendChild(css);
};




$('.card-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
  });



  



