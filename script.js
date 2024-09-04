:const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    // TO DO: Implement Discord API login logic here
    // For now, just log the credentials to the console
    console.log(`Username: ${username}, Password: ${password}`);
});