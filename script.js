function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed(".typing", {
    strings:["Software Engineer","Software Developer", "Web Designer", "Web Developer", "Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
