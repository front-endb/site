//MENU-BURGER
$(document).ready(function() {
	$('.mainblock__burger').click(function(event){
		$('.mainblock__burger,.menu__body').toggleClass('active');
		$('body, .mainblock ').toggleClass('lock');
	});
});
//IBG
function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}
ibg();
$(window).resize(function(event){
	mainblock();
});

function mainblock(){
	var h=$(window).outerHeight();
	$(".mainblock").css("min-height",h);
}
mainblock();
//ZOOM
if ($(".gallery").length>0) {
	baguetteBox.run(".gallery",{
		buttons:true,
	});
}

//SLIDER
$(function (argument) {
	$('.slider').slick({
		arrows:false,
		dots:true,
		speed: 1000,
		infinite:false,
	}),
	$('.main-slider').slick({
		arrows:true,
		speed: 1000,
		infinite:false,
		responsive:[
		{
			breakpoint:700,
			settings: {
				arrows:false,
			}
		}
		]
	});

});

function viewdiv(id) {
	var el = document.getElementById(id);
	if (el.style.display == "block") {
		el.style.display = "none";
	} else {
		el.style.display = "block";
	}
}