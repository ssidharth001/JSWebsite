var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    //--------------------------------- MENU ---------------------------//
    var menu = response.menu;
    var menuList = "";
    for (var i = 0; i < menu.length; i++) {
      if (menu[i].not_found == true) {
        menuList +=
          "<li>" +
          '<a href="error_404.html">' +
          menu[i].title +
          "</a>" +
          "</li>";
      } else {
        menuList +=
          "<li>" +
          "<a href=" +
          menu[i].url +
          ">" +
          menu[i].title +
          "</a>" +
          "</li>";
      }
    }
    document.getElementById("menu").innerHTML = menuList;
  }
};
xhttp.open("GET", "json/main.json", true);
xhttp.send();
