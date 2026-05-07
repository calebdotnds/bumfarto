// script.js

window.onload = function () {
    if (localStorage.getItem("token")) {
        document.getElementById("login_redirect").textContent = localStorage.getItem("username")
    }
}

function login_redirect() {
    if (!localStorage.getItem("token")) {
        window.location.href = "../login"
    }
    else {
        window.location.href = "../dashboard"
    }
}