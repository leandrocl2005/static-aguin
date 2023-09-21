// load-parts.js
window.addEventListener("DOMContentLoaded", (event) => {
  // Corpo da página inicial  
  
  fetch("/templates/homePage/header_index.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header_index").innerHTML = data;
      });
  
      fetch("/templates/homePage/banner_index.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("banner_index").innerHTML = data;
      });
      fetch("/templates/homePage/tripe_index.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("tripe_index").innerHTML = data;
      });
      fetch("/templates/homePage/features_index.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("features_index").innerHTML = data;
      });
      fetch("/templates/homePage/posts_index.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("posts_index").innerHTML = data;
      });


// Corpo da sideBar
      
    fetch("/templates/sideBar/search_sidebar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("search_sidebar").innerHTML = data;
      });
    fetch("/templates/sideBar/nav_sidebar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("nav_sidebar").innerHTML = data;
      });
    fetch("/templates/sideBar/miniPosts_sidebar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("miniPosts_sidebar").innerHTML = data;
      });
    fetch("/templates/sideBar/contacts_sidebar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("contacts_sidebar").innerHTML = data;
      });
    fetch("/templates/sideBar/footer_sidebar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer_sidebar").innerHTML = data;
      });


    // functionalities
    fetch("/templates/functionalities/cookies.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("cookies").innerHTML = data;
      });

  });
  