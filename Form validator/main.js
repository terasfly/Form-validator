const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

// Show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email

function checkEmail(input) {
    const re = /\S+@\S+\.\S+/;
    // return re.test(email);
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Email not valid`);
    }
}
// Check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}
// Check passwords mach
function checkPassworsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Password do not match`);
    }
}
// Get field Name

function getFieldName(input) {
    // make first letter uppercase and rest of word!!!
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event listeners

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(username, 6, 25);
    checkEmail(email);
    checkPassworsMatch(password, password2);
    // console.log(password.value);
    // if (username.value === '') {
    //     showError(username, 'username is required');
    // } else {
    //     showSuccess(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'password is required');
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value === '') {
    //     showError(password2, 'password 2 is required');
    // } else {
    //     showSuccess(password2);
    // }
});