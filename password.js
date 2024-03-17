// şifreyi göster/gizle
const showToggle = document.getElementById('showToggle');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirm_password');

showToggle.addEventListener('change', function() {
    const type = this.checked ? 'text' : 'password';
    password.setAttribute('type', type);
    passwordConfirmation.setAttribute('type', type);
});

