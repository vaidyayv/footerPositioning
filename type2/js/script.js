function footerPositioning() {
    var headerHeight = document.getElementsByClassName("header")[0].offsetHeight;
    var footerHeight = document.getElementsByClassName("footer")[0].offsetHeight;
    var content = document.getElementsByClassName("content")[0];
    var contentHeight =  window.innerHeight - (headerHeight + footerHeight) + "px";
    content.style.minHeight = contentHeight;
}

document.addEventListener("DOMContentLoaded", function (){
    footerPositioning();
});

window.onresize = footerPositioning;

