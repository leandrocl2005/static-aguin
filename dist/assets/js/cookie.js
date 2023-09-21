// script.js
document.addEventListener("DOMContentLoaded", function () {
  const cookieNotification = document.getElementById("cookie-notification");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  function hasConsent() {
    return document.cookie.split(";").some((item) => item.trim().startsWith("consent="));
  }

  function setConsent(value) {
    document.cookie = `consent=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  }

  if (!hasConsent()) {
    cookieNotification.style.display = "block";
  }

  acceptCookiesButton.addEventListener("click", () => {
    setConsent("true");
    cookieNotification.style.display = "none";
  });
});


// ... seu código existente ...

async function loadMenu() {
  try {
    const response = await fetch('templates/sidebar/nav_sidebar.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const menuHTML = await response.text();
    document.getElementById('nav_sidebar').innerHTML = menuHTML;
    initializeMenu();
  } catch (error) {
    console.error('There was a problem loading the menu:', error);
  }
}

function initializeMenu() {
  const menu = document.getElementById('menu');
  const menuOpeners = menu.querySelectorAll('.opener');

  menuOpeners.forEach((opener) => {
    opener.addEventListener('click', (event) => {
      event.preventDefault();
      menuOpeners.forEach((o) => o.classList.remove('active'));
      opener.classList.toggle('active');
    });
  });
}

// Carregar o menu
loadMenu();

// ... seu código existente ...

