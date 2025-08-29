function isOnlyLetters(str) {
    return /^[A-Za-z\s]+$/.test(str);
    /*check whether a string contains only letters 
    (no digits or special characters) and allow spaces 
    not like isNaN() that stands for is not an integer*/
}
function checkEmail(str){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
}
function checkPassword(str) {
    return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@.#$!%?&])[A-Za-z\d@.#$!%?&]{8,15}$/.test(str);
}
function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const today = new Date(); //saves current date

    let age = today.getFullYear() - birth.getFullYear();

    //To adjust the age if the person hasn’t had their birthday yet this year.
    const blewCandles =
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
        // today.getDate() >= birth.getDate() only compares the day of the month, not the month itself

    if (!blewCandles) {
        age--;
    }
    return age;
}


//return to default brown color whenever the user select an option
document.regForm.interest.addEventListener("change", function () {
    this.style.color = this.value === "" ? "#ff4b33" : "#4e2209";
});

function validation() {
    var valid = true;
    var formLabels = document.getElementsByTagName("label");
    var form = document.regForm;

    // Full Name
    var fullname = form.fullname.value;
    if (fullname == "") {
        formLabels[0].innerHTML = "Full Name required";
        formLabels[0].style.color = "#ff4b33";
        valid = false;
    }
    else if (!isOnlyLetters(fullname)) {
        formLabels[0].innerHTML = "Full Name must be letters only";
        formLabels[0].style.color = "#ff4b33";
        valid = false;
    }
    else if (fullname.length < 3) {
        formLabels[0].innerHTML = "Full Name must consists of at least 3 letters";
        formLabels[0].style.color = "#ff4b33";
        valid = false;
    }
    else {
        formLabels[0].innerHTML = "Full Name";
        formLabels[0].style.color = "#4e2209";
    }

    // Email
    var email = form.email.value;
    if (email === "") {
        formLabels[1].innerHTML = "Email Address required";
        formLabels[1].style.color = "#ff4b33";
        valid = false;
    }
    else if (!checkEmail(email)) {
        formLabels[1].innerHTML = "Enter a valid Email";
        formLabels[1].style.color = "#ff4b33";
        valid = false;
    }
    else {
        formLabels[1].innerHTML = "Email Address: ";
        formLabels[1].style.color = "#4e2209";
    }

    //Password
    var password = form.password.value;
    if (password === "") {
        formLabels[2].innerHTML = "Password required";
        formLabels[2].style.color = "#ff4b33";
        valid = false;
    }
    else if (!checkPassword(password)) {
        formLabels[2].innerHTML = "Enter a valid Password";
        formLabels[2].style.color = "#ff4b33";
        alert("For a password to be valid: At least 8 characters with 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and without spaces")
        valid = false;
    }
    else {
        formLabels[2].innerHTML = "Password";
        formLabels[2].style.color = "#4e2209";
    }

    // Confirm Password
    var confirmPassword = form.confirmPassword.value;
    if (confirmPassword === "") {
        formLabels[3].innerHTML = "Confirm Password required";
        formLabels[3].style.color = "#ff4b33";
        valid = false;
    }
    else if (confirmPassword !== password) {
        formLabels[3].innerHTML = "Passwords do not match";
        formLabels[3].style.color = "#ff4b33";
        valid = false;
    }
    else {
        formLabels[3].innerHTML = "Confirm Password";
        formLabels[3].style.color = "#4e2209";
    }

    // Gender
    if (!form.gender[0].checked && !form.gender[1].checked) {
        formLabels[4].innerHTML = "Gender required ";
        formLabels[4].style.color = "#ff4b33";
        valid = false;
    } else {
        formLabels[4].innerHTML = "Gender ";
        formLabels[4].style.color = "#4e2209";
    }

    // Birthdate
    var birthdate = form.birthdate.value;
    //Another more reliable way of accessing the label element
    var birthLabel = document.querySelector('label[for="birthdate"]');
    if (!birthdate) {  //birthdate === "" wrong since the value is often undefined or an empty string depending on the browser
        //!birthdate will catch null, undefined, or "" (empty string)
        birthLabel.innerHTML = "Date of Birth required";
        birthLabel.style.color = "#ff4b33";
        valid = false; //LABEL 7 since label 5 for "female" and 6 for "male"
    }
    else {
        var age = calculateAge(birthdate);
        if (age < 13 || age > 100) {
            birthLabel.innerHTML = "Age must be between 13 and 100 years";
            birthLabel.style.color = "#ff4b33";
            valid = false;
        } else {
            birthLabel.innerHTML = "Date of Birth ";
            birthLabel.style.color = "#4e2209";
        }
    }

    // Interest
    var interest = form.interest;
    var option = interest.value //gives you the selected value
    //var option1 = form.interest.options[0]; //gives you the option element itself
    if (option === "") {
        interest.style.color = "#ff4b33";
        valid = false;
    }
    else {
        interest.style.color = "#4e2209";
    }

    return valid;
}

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.regForm.password;
    const bar = document.getElementById("strengthValue");
    const text = document.getElementById("strengthText");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[@.#$!%*?&]/.test(password)) strength++;

        if (password === "") {
            bar.style.width = "0%";
            text.innerText = "";
            bar.style.backgroundColor = "#4E2209";
        } else if (strength <= 1) {
            bar.style.width = "20%";
            text.innerText = "Very Weak";
            bar.style.backgroundColor = "#4E2209";
        } else if (strength === 2) {
            bar.style.width = "40%";
            text.innerText = "Weak";
            bar.style.backgroundColor = "#4E2209";
        } else if (strength === 3) {
            bar.style.width = "60%";
            text.innerText = "Moderate";
            bar.style.backgroundColor = "#4E2209";
        } else if (strength === 4) {
            bar.style.width = "80%";
            text.innerText = "Strong";
            bar.style.backgroundColor = "#4E2209";
        } else if (strength === 5) {
            bar.style.width = "100%";
            text.innerText = "Very Strong";
            bar.style.backgroundColor = "#4E2209";
        }
    });
});

//Form Validation properties:
{ 
//  1)For the name:
//     1.1 Check that the user have entered a name
//     1.2 Check that the name is a String of letters ONLY
//     1.3 Check that the name is at least 3 letters
//  2)For the email:
//     2.1 Check that the user have entered an email
//     2.2 Check that the email is in a valid form text@text.com using regex.com
//  3)For the password:
//     3.1 Check that the user have entered a password
//     3.2 Check that the password is in a valid form using regex.com
//        >>for a password to be valid: At least 8 characters with 1 lowercase letter,
//           1 uppercase letter, 1 number, 1 special character and without spaces
//  4)For the confirm password:
//     4.1 Check that the user have entered a confirm password
//     4.2 Check that the confirm password is the same as password
//  5)For the gender:
//     5.1 Check that the user have chosen a gender
//  6)For the birthdate:
//     6.1 Check that the user have entered a birthdate
//     6.2 Check that his age is between 13 and 100 using the calculateAge() function
//  7)For the Favorite Self-Care Activity "Interest":
//     7.1 Check that the user have chosen one
//     7.2 return to default brown color whenever the user select an option
//         using the document.regForm.interest.addEventListener
}


//Check your past MISTAKES for better future coding experience!!
{
    //unwanted space in regex function code
    //commenting variables declaration while commenting the rest of the function code for tracing
    //Wrong order of the form's LABELS, also should use distinct label for="input type id"
    //remove REQUIRED attribute from all fields since it blocks submission before onsubmit="return validation()" runs
    //!! Cannot reliably change the text color of an individual <option> element
    //REVISE the part of interest!! + addEventListener}
}