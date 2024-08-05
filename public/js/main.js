document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        alert(data.message);
        if (response.ok) {
          window.location.href = '/views/login.html';
        }
      } catch (err) {
        alert('Error signing up');
      }
    });
  }

  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        alert(data.message);
        if (response.ok) {
          window.location.href = '/views/index.html';
        }
      } catch (err) {
        alert('Error logging in');
      }
    });
  }

  if (document.getElementById('taskList')) {
    fetchTasks();
  }
});

async function fetchTasks() {
  try {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map(task => `
      <div class="task">
        <h3>${task.taskName}</h3>
        <p>${task.description}</p>
        <p>Status: ${task.status}</p>
      </div>
    `).join('');
  } catch (err) {
    console.error('Error fetching tasks:', err);
  }
}
