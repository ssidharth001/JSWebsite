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

    // //--------------------------------- POSTS ---------------------------------//
    // var posts = response.posts;
    // var postList = "";
    // for (var i = 0; i < posts.length; i++) {
    //   postList +=
    //     "<li>" +
    //     "<a>" +
    //     "<img src=" +
    //     posts[i] +
    //     ' alt="" />' +
    //     "</a>" +
    //     "</li>";
    // }
    // document.getElementById("latest-posts").innerHTML = postList;
  }
};
xhttp.open("GET", "json/main.json", true);
xhttp.send();
