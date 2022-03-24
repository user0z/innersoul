// for navbar 

var navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// for manubar
var element = document.getElementById("menu");
function openManu() {
    element.classList.toggle("menu-active");
}

function closeManu() {
    element.classList.remove("menu-active");
}

function productviewer(smallimg){
    var fullimg = document.getElementById('full-img');
    fullimg.src = smallimg.src
}

//for search input

var search = document.getElementById("search-txt-input");
function openSearch() {
    search.classList.toggle("search-input-active");
}