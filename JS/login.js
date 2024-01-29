document.getElementById('btn-submit').addEventListener('click', function() {

    const emailField = document.getElementById('user-email');

    const emailAddress = emailField.value;
    emailField.value = '';
    const passwordField = document.getElementById('user-password');

    const password = passwordField.value;
    passwordField.value = '';
    /*verify email and password*/

    if (emailAddress === 'nayan@gmail.com' && password === 'nayan') {
        location.href = 'bank.html';
    } else {
        alert('Wrong Password')
    }

})
