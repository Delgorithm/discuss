// Btn cross exit to leave the page
const btn_cross = document.querySelector('.cross-exit');

// Form references
const form = document.getElementById('form');
const pseudonymEl = document.getElementById('pseudonym');
const passwordEl = document.getElementById('psw');
const confirmPasswordEl = document.getElementById('psw-repeat');


// Btn cross exit event
btn_cross.addEventListener('click', function () {
    window.location.href = "/";
});



// Validate pseudonym field
const checkPseudonym = () => {

    let valid = false;

    const 
        min = 3,
        max = 20;
    const pseudonym = pseudonymEl.value.trim();

    if(!isRequired(pseudonym)) {
        showError(pseudonymEl, 'Pseudonym cannot be blank.');
    } else if (!isBetween(pseudonym.length, min, max)) {
        showError(pseudonymEl, `Pseudonym must be between ${min} and ${max} characters`)
    } else {
        showSuccess(pseudonymEl);
        valid = true;
    }
    return valid;   
}

// Validate password field
const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if(!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least : - 8 characters : - 1 lowercase character : - 1 uppercase character : - 1 number : - 1 special character')
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};

// Validate the confirm password

const checkConfirmPassword = () => {

    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if(!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Confirm password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
};


// To check if a password is strong
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}



// Returns true if the input argument is empty
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;



// function to displays an error message if the input field is invalid
const showError = (input, message) => {
    const formField = input.parentElement;
    
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
}

// Function that shows the success indicator 
const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


// Functions that validate the input fields in the submit event handler
form.addEventListener('submit', function (e) {
    
    e.preventDefault();

    // Validate fields
    let isPseudonymValid = checkPseudonym(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isPasswordValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if(isFormValid){

    }

});
