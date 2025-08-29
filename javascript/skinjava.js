// SideMenu 
function openMenu() {
    document.getElementById("sidemenu").style.width = "200px";
    document.getElementById("menu-items").style.display = "block";  
}

function closeMenu() {
    document.getElementById("sidemenu").style.width = "0px";  
    document.getElementById("menu-items").style.display = "none";  
}

// Slideshow 
var counter = 1;

function next( slideID) {
    if (counter == 8) {
        counter = 1; 
    } else {
        counter++;
    }
    document.getElementById("slideshowimg").src = "photos/slideshow"+slideID+"/" + counter + ".jpg";
}

function prev( slideID) {
  if (counter == 1) {
    counter = 8;
    } else {
    counter--;
    }
  document.getElementById("slideshowimg").src = "photos/slideshow"+slideID+"/" + counter + ".jpg";
}

// Dark/Light Mode
document.addEventListener('DOMContentLoaded', () => {
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle').checked = true;
    }

    
    const toggle = document.getElementById('toggle');
    const label = document.querySelector('label[for="toggle"]');
    [toggle, label].forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            toggle.checked = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
        });
    });
});