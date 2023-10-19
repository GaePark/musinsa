// 메뉴
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("headertop").style.top = "0";
    } else {
        document.getElementById("headertop").style.top = "-60px";
    }
    prevScrollpos = currentScrollpos;
}