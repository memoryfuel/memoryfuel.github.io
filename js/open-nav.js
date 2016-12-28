//inspired by http://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
//openNav is just for changing the hamburger symbol => x and back. Doesn't fade
function openNav() { 
    var hamburger = document.getElementById("hamburger");
    if(document.getElementById("mobile-nav").style.opacity == "0"){
        document.getElementById("mobile-nav").style.opacity = "0.9";
        document.getElementById("barID").style.opacity = "0";
        hamburger.innerHTML = "&times;";
        hamburger.style.fontSize = "50px";
        hamburger.style.top = "-9px";
    } else {
        hamburger.innerHTML = "&#9776;";
        hamburger.style.fontSize = "30px";
        hamburger.style.top = "0px";
        document.getElementById("barID").style.opacity = "1";
        document.getElementById("mobile-nav").style.opacity = "0";
    }
}

//This fades out the mobile nav fullscreen overlay
$('.hamburger-class').click(function() {
    document.getElementById("mobile-nav").style.zIndex = "21";
     $('.overlay').toggleClass('fadeOut');
});
$('.mobile-nav-a').click(function() {
    $('.overlay').toggleClass('fadeOut');
});