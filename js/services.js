var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    //----------------------------for headering--------------------------------
    var menu = response.menu;
    document.getElementById("page-heading-two").innerHTML = menu[2].title;
  }
};
xhttp.open("GET", "json/main.json", true);
xhttp.send();
