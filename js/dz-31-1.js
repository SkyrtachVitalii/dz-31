let authButton = document.getElementById("login");
// console.log(authButton);

if(authButton){
authButton.addEventListener("click", logIn);
}

function logIn(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = {
        username,
        password,
        role: "admin",
        token: "Baerer dsofjsdoijfsdiofjsdiofjsdoigjsdo"
    }
    // console.log(user);

    localStorage.setItem("user", JSON.stringify(user));
    // console.log(localStorage.getItem("user"));
    window.location.href = "index.html"
}

document.addEventListener("DOMContentLoaded", function() {
    let userElem = document.getElementById("user");
    if(userElem){
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
    }
  });



document.addEventListener("DOMContentLoaded", () => {
    let userElem = document.getElementById("user");
    console.log(localStorage.getItem("user"));
    if(userElem){
        
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        userElem.innerText = "Привіт " + user.username;
    }
});