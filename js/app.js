const btnLogin = document.getElementById('btn-login');

iniciarApp();

function iniciarApp() {
    agregarEventListeners();
};

function agregarEventListeners() {
    if(btnLogin) {
        btnLogin.addEventListener('click', login);
    }
}

function login () {
    window.location.replace("login.html");
}