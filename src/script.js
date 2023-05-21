document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Send login request to the server
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.success) {
        alert("Login successful!");
        // Redirect to the home page or perform other actions
      } else {
        alert("Invalid username or password. Please try again.");
      }
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
  
    // Send registration request to the server
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: regUsername, password: regPassword })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.success) {
        alert("Registration successful!");
        // Clear the registration form fields
        document.getElementById("regUsername").value = "";
        document.getElementById("regPassword").value = "";
      } else {
        alert("Registration failed. Please try again.");
      }
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
  });
  