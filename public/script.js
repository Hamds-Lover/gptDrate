async function register() {
    const username = document.getElementById('regUser').value;
    const password = document.getElementById('regPass').value;
  
    const res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    alert(await res.text());
  }
  
  async function login() {
    const username = document.getElementById('loginUser').value;
    const password = document.getElementById('loginPass').value;
  
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    alert(await res.text());
  }
  