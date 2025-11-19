// Form Validation
 Form = document.getElementById("frm").addEventListener("submit", (event) =>{
event.preventDefault();
let Fullname = document.getElementById("NameInput").value.trim();
let Email = document.getElementById("mail").value.trim();
let Password = document.getElementById("password").value;
let ConfirmPassword = document.getElementById("confirmPassword").value;
let Age = document.getElementById("age").value.trim(); 
let message = document.getElementById("message");

if(Fullname.length < 3 ){
    message.textContent = "Fullname should have at least 3 characters "
    return;
 } 


 if(Email ===""){
    message.textContent = "Email required";
    message.style.color = "red";
    return;
}

 if(Password === "" || ConfirmPassword === ""){
    message.textContent = "Password not entered";
    message.style.color = "red";
    return;
}

if (Password !== ConfirmPassword){
    message.textContent = "Password don't match at all";
    message.style.color = "red";
}
// if(Password.length < 8 ){
//     message.textContent = "Password should be at least 8 characters"
//     return;
// }

if (Age === "" || isNaN(Age) || Age < 18){
    message.textContent = "Age is required and must be 18 and above";
    message.style.color = "red"
    return;
}

message.textContent = "Registration Successful";
message.style.color ="green"
 })
 

 