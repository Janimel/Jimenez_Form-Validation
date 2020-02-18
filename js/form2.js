function validation() {
    
    let login = logCheck();
    let pass = password();
    let confirm = confirmPassword();
    let email = emailC();
    
    if (login == true && pass == true && confirm == true && email == true) {
        alert ("Login Credentials sent for processing...");
    } else {
        alert("Failed to submit form");
    }  
}

function logCheck() {
    let login = document.getElementById("login");
    if (login.value == "") {
        login.style.backgroundColor = "red";
        return false;
    } else {
        login.style.backgroundColor = "green";
        return true;
    }
}

function password() {
    let pass = document.getElementById("pass");
    if (pass.value == "") {
        pass.style.backgroundColor = "red";
        return false;
    } else {
        pass.style.backgroundColor = "green";
        return true;
    }
}

function confirmPassword() {
    let confirm = document.getElementById("confirm");
    if (samePassword() == false) {
        document.getElementById("samePass").innerHTML = "Passwords are not the same";
        confirm.style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById("samePass").innerHTML = "";
        confirm.style.backgroundColor = "green";
        return true;
    }
}

function emailC() {
    let email = document.getElementById("email");
    if (email.value == "") {
        document.getElementById("emailWrong").innerHTML = "Mail is wrong";
        email.style.backgroundColor = "red";
        return false;
     } else {
        document.getElementById("emailWrong").innerHTML = "";
        email.style.backgroundColor = "green";
        return true;
    }
}

function passCheck() {
    
    let password = document.getElementById("pass").value;
    let strength = document.getElementById("passStrength");
    
    if (password.length == 0) {
        strength.innerHTML = "";
    } else if (password.length >= 1 && password.length < 4) {
        strength.innerHTML = "Weak";
    } else if (password.length >= 4 && password.length < 8) {
        strength.innerHTML = "Medium";
    } else if (password.length >= 8) {
        strength.innerHTML = "Strong";
    }
}

function samePassword() {

    let password = document.getElementById("pass").value;
    let confirm = document.getElementById("confirm").value;

    if (password == "" && confirm == "") {
        return false;
    } else if (password != confirm) {
        return false;
    } else {
        return true;
    }

}

function submit() {
    
    let comparePass = samePassword();
    let correct = emailC();
    
    if (comparePass == true) {
        if (correct == true) {
            alert ("Login Credentials sent for processing...");
            document.getElementsByClassName("logForm").reset();
        } else {
            document.getElementById("emailWrong").innerHTML = "Mail is wrong";
            document.getElementsByClassName("logForm").reset();
        }
    } else {
        document.getElementById("samePass").innerHTML = "Passwords are not the same";
        document.getElementsByClassName("logForm").reset();
    }
}