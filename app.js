const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-uot');
     
}

function fadeUot() {
    setInterval(loader, 1500)
}

window.onload = fadeUot();