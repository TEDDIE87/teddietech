// REGISTER
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert("Registration successful!");
    window.location.href = 'login.html';
  });
  
  // LOGIN
  document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert("Login successful!");
      window.location.href = 'dashboard.html';
    } else {
      alert("Invalid email or password.");
    }
  });
  