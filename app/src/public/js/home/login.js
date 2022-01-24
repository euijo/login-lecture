const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBTN = document.querySelector("button");

loginBTN.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        password : password.value,
    };
    
    fetch("/login",{
        method : "POST",
        headers:{"content-Type" : "application/json"},
        body : JSON.stringify(req),
    });
}
