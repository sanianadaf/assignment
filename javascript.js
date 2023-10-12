document.getElementById('SignupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password
    if (password.length < 8) {
        alert('Your password must be at least 8 characters long.');
        return;
    }

    // Save user's information to localStorage
    var user = {
        email: email,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user));

    // Display a success message
    document.getElementById('message').textContent = 'Registration successful!';
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the login form
    var loginForm = document.querySelector('.login form');

    // Add event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Get the user inputs
        var email = event.target.querySelector('input[type="email"]').value;
        var password = event.target.querySelector('input[type="password"]').value;

        // Validate email format
        var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            alert('Error: Invalid email format');
            return;
        }

        // Get user information from localStorage
        var storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if user exists and entered email and password match the stored information
        if (storedUser && email === storedUser.email && password === storedUser.password) {
            alert('Login Successful. Welcome!');
            // Redirect to another page
            window.location.href = 'your_page.html'; // replace 'your_page.html' with your actual page
        } else {
            alert('Error: Invalid email or password');
        }
    });
});
