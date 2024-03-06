let cursor = document.querySelector('.cursor');
let cursorSm = document.querySelector ('.cursorSm');

function customMousePointer(event){
    let left = event.pageX;
    let top = event.pageY;

    cursor.style.top = top+'px';
    cursor.style.left = left+'px';

    cursorSm.style.top = top+'px';
    cursorSm.style.left = left+'px';

}
window.addEventListener('mousemove',customMousePointer);

//sidebar

let sidebar = document.querySelector('.sidebar');
let toggleBtn = document.querySelector('header nav .toggler');

function showSideBar(){
    sidebar.classList.add('active');
}
toggleBtn.addEventListener('click',showSideBar);

let cancelBtn = document.querySelector('.cancel_btn');

function hideSideBar(){
    sidebar.classList.remove('active');
}

cancelBtn.addEventListener('click',hideSideBar);
sidebar.addEventListener('click',hideSideBar);


let passwordField = document.querySelector("#password");
let togglePassword = document.querySelector(".password-toggle-icon");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.innerHTML = '<i class="bi bi-eye"></i>';
  } else {
    passwordField.type = "password";
    togglePassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
  }
});