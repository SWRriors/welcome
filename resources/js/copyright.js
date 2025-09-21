// Get the current year
const currentYear = new Date().getFullYear();

// Find the footer element by its ID
const footerCopyright = document.getElementById('footer-copyright');

// Update the content with the current year
if (footerCopyright) {
  footerCopyright.innerHTML = `<p>&copy; ${currentYear} The SWRriors. All rights reserved.</p>`;
}