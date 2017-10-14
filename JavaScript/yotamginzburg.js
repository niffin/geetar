var currPage = "";
var currSong = "";

$(document).ready(function(){
	$("#main").fadeIn();
	$("#main").slideDown();
	$('body').css("display", "block");
	cb('tweet');
	bs();
	showOvers();
});
function homeOver(){
	document.getElementById("homeimage").src = "assets/images/home_over.png"
}
function homeOut(){
	document.getElementById("homeimage").src = "assets/images/home.png"
}
function overlay(song, bottom, right, image) {
	this.song = song;
	this.image = image;
	this.bottom = bottom;
	this.right = right;
}
overlay.prototype.toHTML = function(itemIndex) {
	var overHTML = "";
	
	overHTML += '<img src="assets/images/buttonOff.gif" class="selector"' + 'style="' + 'bottom:' + this.bottom + ';' + 'right:' + this.right + ';"' +  'onmouseover=' + '"this.style.background=' + "'url(assets/images/buttonOn" + this.image + ".jpg)'" + '"' + ' onmouseout=' + '"this.style.background=' + "'url(assets/images/buttonOff.gif)'" + '"' + ' onclick="playSong' + "('" + this.song + "')" + ';" />';
	
	return overHTML;
}
	var over = [ 
	new overlay("", "346px", "-596px", ""),
	new overlay("oriental", "346px", "-271px", "_ori"),
	new overlay("", "346px", "51px", ""),
	new overlay("recuerdo", "347px", "375px", "_rec"),
	new overlay("capricho", "191px", "36px", "_cap"),
	new overlay("", "341px", "-429px", ""),
	new overlay("asturias", "341px", "-107px", "_ast"),
	new overlay("", "341px", "217px", "")
];
function showOvers() {
	var overHTML = "";
	var i = 0;
	for(i=0; i < over.length; i++) {
		overHTML += over[i].toHTML(i);
}
document.getElementById("overs").innerHTML = overHTML;
}
function bs(){
	
	var scrollSpeed = 88;
    var step = 2;
    var current = 0;

	function scrollBg(){
		current -= step;
		if(current <= (-$(window).height())){
			sbu();			
        	current = 0;
    	}
    	$('body').css("background-position","center " + current + "px");
	}
	function sbu(){
		current += step;
		$('body').css("background-position","center " + current + "px");
		if(current == 0){
			scrollBg();
		}
	}
var init = setInterval(scrollBg, scrollSpeed);
}
function switchPage(page){
	if (currPage == ""){
		cb(page);		
	}
	else{
		$(currPage).fadeOut('fast', function(){
			cb(page);
		});	
	}
}
function cb(page){
	switch(page){
		case 'tweet': 
			$("#tweet").fadeIn('fast');
			center();
			currPage = '#tweet';
			break;
			case 'about': 
			$("#about").fadeIn('fast');
			center();
			currPage = '#about';
			break;
		case 'media': 
			$("#media").fadeIn('fast');
			center();
			currPage = '#media';
			break;
		case 'bookings': 
			$("#bookings").fadeIn('fast');
			center();
			currPage = '#bookings';
			break;
		case 'testimonials': 
			$('#testimonials').fadeIn('fast');
			center();
			currPage = '#testimonials';
			break;
		case 'lessons': 
			$("#lessons").fadeIn('fast');
			center();
			currPage = '#lessons';
			break;
	}
	if(currPage == '#tweet'){
		$("#homeimage").css("display", "none");
		$("#name").css("display", "block");
	}
	else{
		$("#homeimage").css("display", "block");
		$("#name").css("display", "none");
	}
	if(currPage == '#media'){
		$(".selector").css("display", "block");	
	}
	else{
		$(".selector").css("display", "none");				
	}
}
function center(){
	var contHeight = $('#cont').outerHeight();
	var clientHeight = $(window).height();
	$('#cont').css("margin-top", (clientHeight/2) - (contHeight/2) - 75 + "px");
}
function playSong(newSong){
	if(navigator.appName == 'Microsoft Internet Explorer'){
		alert('Audio is coming soon to IE. In the meantime, please use a different browser to hear the music');
	}
	else{
		if (newSong != ""){
			if(currSong != "" ) {
				document.getElementById(currSong).pause();
			}
			document.getElementById(newSong).currentTime = 0;
			document.getElementById(newSong).play();
			currSong = newSong;
		}
	}
}
Cufon.replace('p');
Cufon.replace('#tweet');