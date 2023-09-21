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



document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggle");
  const hiddenMenu = document.getElementById("hiddenMenu");

  toggleButton.addEventListener("click", function() {
    if (hiddenMenu.classList.contains("hidden")) {
      hiddenMenu.classList.remove("hidden");
      hiddenMenu.classList.add("visible");
    } else {
      hiddenMenu.classList.add("hidden");
      hiddenMenu.classList.remove("visible");
    }
  });
});
