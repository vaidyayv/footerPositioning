function footerPositioning() {
    var documentHeight = document.scrollingElement.offsetHeight;
    var windowHeight = window.innerHeight;
    var footer = document.getElementsByClassName("footer")[0];
    if (documentHeight < windowHeight) {
        footer.classList.add("bottom");
    }else{
        footer.classList.remove("bottom");
    }
}

document.addEventListener("DOMContentLoaded", function (){
    footerPositioning();
});

window.onresize = footerPositioning;

