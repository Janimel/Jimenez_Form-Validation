function validation(p) {
    
    var login = document.getElementById("login");
    var pass = document.getElementById("pass");
    var confirm = document.getElementById("confirm");
    var gender = document.getElementById("genderChoice");
    var email = document.getElementById("email");
    
    if (login.value == "") {
        style.backgroundColor = "red";
    } 
    
    if (pass.value == "") {
        alert("Missing Password");
    } 
    
    if (confirm.value == "" || confirm.value != pass.value) {
        document.getElementById("samePass").innerHTML = "Passwords are not the same";
    } 
    
    if (confirm.value == pass.value) {
        document.getElementById("samePass").innerHTML = "";
    } 
    
    if (gender.value == "") {
        alert("Missing Gender");
    } 
    
    if (email.value == "") {
        document.getElementById("emailWrong").innerHTML = "Mail is wrong";
    } 
    
    if (email.value != "") {
        document.getElementById("emailWrong").innerHTML = "";
    }
    
    if (login.value != "" && pass.value != "" && pass.value != "" && confirm.value == pass.value && gender.value != "" && email.value != "") {
        document.getElementsByClassName("logForm").submit();
        alert ("Login Credentials sent for processing...");
        document.getElementsByClassName("logForm").reset();
    }
}

function passCheck() {
    
    var password = document.getElementById("pass").value;
    var strength = document.getElementById("passStrength");
    
    if (password.length = 8) {
        strength.innerHTML = "Strong";
    } else if (password.length = 5) {
        strength.innerHTML = "Medium";
    } else if (password.length = 3) {
        strength.innerHTML = "Weak";
    } else if (password.length = 0) {
        strength.innerHTML = "";
    }
}