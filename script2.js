// Function to show thank you message and email link on form submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
    document.getElementById('form').reset();
});
