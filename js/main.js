// When the user scrolls down, show the navbar, otherwise hide the navbar
var prevScrollpos = 400;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.background = "RGB(249, 219, 121, 0.7)";
    }
    else {
        document.getElementById("navbar").style.background = "RGB(249, 219, 121, 1)";
    }
}

