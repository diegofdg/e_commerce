const btnLogin = document.getElementById('btn-login');
const btnHero = document.getElementById('btn-hero');

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
};

function agregarEventListeners() {
    if(btnLogin) {
        btnLogin.addEventListener('click', login);
    }
    
    if(btnHero) {
        btnHero.addEventListener('click', consolas);
    }
}

function login() {
    window.location.replace("login.html");
}

function consolas() {
    document.getElementById("consolas")
        .scrollIntoView({
            behavior: 'smooth'
        });
}