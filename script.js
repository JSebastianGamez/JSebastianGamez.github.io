// JavaScript code for personal webpage functionality

// Function to redirect to GitHub
function goToGitHub() {
    window.location.href = 'https://github.com/JSebastianGamez';
}

// Function to redirect to Contact page
function goToContactPage() {
    window.location.href = 'contact.html';
}

// Function to redirect to History page
function goToHistoryPage() {
    window.location.href = 'history.html';
}

// Function to redirect to Home page
function goToHomePage() {
    window.location.href = 'index.html';
}

// Function to show thank you message and email link on form submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
    document.getElementById('form').reset();
});
