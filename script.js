document.addEventListener("DOMContentLoaded", function() {
    // Open modal function
    window.openModal = function(projectId) {
        document.getElementById('modal-' + projectId).style.display = 'block';
    };

    // Close modal function
    window.closeModal = function(projectId) {
        document.getElementById('modal-' + projectId).style.display = 'none';
    };

    // Form validation function
    window.validateForm = function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name === "" || email === "" || message === "") {
            alert("All fields must be filled out.");
            return false;
        }

        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    };
});
