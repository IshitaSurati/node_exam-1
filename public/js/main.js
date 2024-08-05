const BASE_URL = 'http://localhost:3000'; 

async function signupUser(username, email, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);
    console.log('User signed up:', data);
    // Redirect to login page
    window.location.href = '/Test-1/views/login.html';
  } catch (error) {
    console.error('Error during signup:', error);
  }
}

// Function to log in a user
async function loginUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);
    console.log('User logged in:', data);
    // Store authentication token if applicable
    localStorage.setItem('token', data.token);
    // Redirect to dashboard
    window.location.href = '/Test-1/index.html';
  } catch (error) {
    console.error('Error during login:', error);
  }
}

// Function to logout the user
function logoutUser() {
  localStorage.removeItem('token');
  console.log('User logged out');
  // Redirect to login page
  window.location.href = '/Test-1/views/login.html';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      signupUser(username, email, password);
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      loginUser(email, password);
    });
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutUser);
  }
});
