// Add event listener to "Get Started" button
const getStartedButton = document.getElementById('get-started-button');
getStartedButton.addEventListener('click', redirectToLogin);

// Function to redirect to the login page
function redirectToLogin() {
  window.location.href = 'login.html';
}
