

window.onload = function () {
    token = localStorage.getItem("token")
    if (token) {
        //add a server check here
        username = localStorage.getItem("username")
        pfp = localStorage.getItem("pfp")
        if (username == null) {
            localStorage.clear();
            window.location.href = "../login";
        }
        document.getElementById("username").textContent = username
        if (pfp) {
            document.getElementById("pfp").src = pfp
            document.getElementById("ico_pfp").src = pfp
        }
    }
    else {
        localStorage.clear()
        window.location.href = "../login"
    }
}


function pfp_page() {
    document.getElementById("content_title").textContent = "Change Profile"
    document.getElementById("pfp_changer").style.display = "block"
}

function change_pfp() {
    new_pfp = document.getElementById("pfp_file_drop").files[0]
    if (new_pfp) {
        var reader = new FileReader();

        reader.readAsDataURL(new_pfp)

        reader.onload = async function (evt) {
            data = evt.target.result;
            localStorage.setItem("pfp", data)
        }
    }
}


function logout() {
    localStorage.clear()
    window.location.href = "../home"
}