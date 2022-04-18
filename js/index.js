const btnHero = document.getElementById('btn-hero');

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
};

function agregarEventListeners() {    
    btnHero.addEventListener('click', consolas);
}

function consolas() {
    document.getElementById("consolas")
        .scrollIntoView({
            behavior: 'smooth'
        });
}