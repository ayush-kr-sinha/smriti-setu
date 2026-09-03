const button = document.querySelector(".login-btn-farmer");
const popupBlack = document.querySelector(".login-popup");
button.addEventListener("click", ()=>{
    popupBlack.style.display = "flex";
    document.body.classList.toggle("no-scroll");
})

const finalLogin = document.querySelector(".final-login-btn");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
finalLogin.addEventListener("click", ()=>{
    console.log("Clicked");
    emailInputvalue = emailInput.value
    passwordInputvalue = passwordInput.value
    if (emailInputvalue == "test@gmail.com" && passwordInputvalue==1234) {
        console.log("logged in");
        window.location.href = "index1.html";
    }
    else{
        alert("Please enter correct credentials");
    }
})