
let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title =document.getElementById("title");
const myEmail=document.getElementById("myEmail");
const myPassowrd=document.getElementById("myPassword");

signinBtn.onclick=function(){
    nameField.style.maxHeight="0";
    title.innerHTML="Sign In"
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick=function(){
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign up"
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}
const form=document.getElementById("login");
const users = [
    { email: 'user1@gmail.com', password: 'password1', name: 'User 1' },
    { email: 'user2@gmail.com', password: 'password2', name: 'User 2' },
    { email: 'user3@gmail.com', password: 'password3', name: 'User 3' },
    { email: 'user4@gmail.com', password: 'password4', name: 'User 4' },
    { email: 'user5@gmail.com', password: 'password5', name: 'User 5' }
];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('myEmail');
    const passwordInput = document.getElementById('myPassword');
    
    const emailInputValue = emailInput.value;
    const passwordInputValue = passwordInput.value;
    let user = users.find(u => u.email === emailInputValue && u.password === passwordInputValue);
    if (user) {
         const data = {
             email: emailInputValue,
             name: user.name,
         };
         localStorage.setItem('login_to_localstorage', JSON.stringify(data));
         alert('Credentials saved!');
         window.location.href='main.html';

     } else {
         alert('Invalid User');
     }
});

