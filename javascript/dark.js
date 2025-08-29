document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const html = document.documentElement;
  
    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
      toggle.checked = true;
      html.setAttribute('data-theme', 'dark');
    }
  
    // Toggle theme on checkbox change
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  });
  
  
  

