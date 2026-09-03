// console.log("hello world");

// const queryString = window.Location.search;
// const urlParams = new URLSearchParams(queryString);
// const userRole = urlParams.get('role');
// console.log(userRole);

const button = document.querySelector(".login-btn-farmer");
const popupBlack = document.querySelector(".login-popup");
button.addEventListener("click", ()=>{
    console.log("clicked!!");
    popupBlack.style.display = "flex";
    document.body.classList.toggle("no-scroll");
})