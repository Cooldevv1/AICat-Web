document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', function (e) {
    e.preventDefault();

    loginButton.innerHTML = '';

    const loader = document.createElement('div');
    loader.classList.add('loader');

    // Create and append bars to the loader
    for (let i = 1; i <= 12; i++) {
      const bar = document.createElement('div');
      bar.classList.add('bar' + i);
      loader.appendChild(bar);
    }

    loginButton.appendChild(loader);
  });
});
