// Jquery smooth scroll
$('.main-menu li a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
        },
        800
        );
    }
});

// const hamburger = document.getElementById('hamburger');
// const navUl = document.getElementById('nav-ul');

// hamburger.addEventListener('click', () => {
//     navUl.classList.toggle('show');
// });