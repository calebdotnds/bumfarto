// script.js

document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault()

    username = document.getElementById("username").value
    password = document.getElementById("password").value
    if (username == "" || password == "") {
        msger = document.getElementById("login_msger")
        msger.textContent = "Both a username and password are required"
        msger.style.display = "block"
        msger.style.color = "red"
    }
    else if (username) {
        change_title("Welcome " + username)
        document.getElementById("login").style.display = "none"
    }
    else {
        msger = document.getElementById("login_msger")
        msger.textContent = "Username or Password are incorect"
        msger.style.display = "block"
        msger.style.color = "red"
    }
})

function change_title(title) {
    let header = document.getElementById("title")
    header.textContent = title
}