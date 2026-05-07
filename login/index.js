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
    else {
        user_package = [true, "token"]; //this should = the return from server check
        if (user_package[0]) {
            pfp = "../favicon.ico" //query the server for user pfp
            if (pfp) {
                var reader = new FileReader();

                reader.readAsDataURL(pfp)

                reader.onload = async function (evt) {
                    data = evt.target.result;
                    localStorage.setItem("pfp", data)
                }
            }
            localStorage.setItem("pfp", pfp)
            localStorage.setItem("token", user_package[1])
            localStorage.setItem("username", username)
            window.location.href = "../dashboard"
        }
        else {
            msger = document.getElementById("login_msger")
            msger.textContent = "Username or Password is incorect"
            msger.style.display = "block"
            msger.style.color = "red"
        }
    }
})

window.onload = function () {
    if (localStorage.getItem("token")) {
        window.location.href = "../dashboard"
    }
}
