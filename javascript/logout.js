function confirmLogout() {
    const confirmed = confirm("Are you sure you want to logout?");
    if (confirmed) {
      // Redirect to login page or perform logout
      window.location.href = "signin.html"; // change if needed
    }
  }
  