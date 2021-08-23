document.getElementById('submit-btn').addEventListener('click', function () {
    const inputId = document.getElementById('email-field');
    const inputValue = inputId.value;
    const passwordId = document.getElementById('password-field');
    const passwordValue = passwordId.value
    if (inputValue == 'sontan@baap.com' && passwordValue == 'secret') {
        window.location.href = 'bank.html';
    }
})