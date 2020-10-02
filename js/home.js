var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    //---------------------------heading and paragraph------------------------------
    var menu = response.menu;
    document.getElementById("page-heading").innerHTML = menu[0].title;

    var text = response.text;
    document.getElementById("first-para").innerHTML = text;

    //---------------------------Home page image------------------------------
    var image = response.homeImage;
    var newiImg = document.createElement("img");
    newiImg.setAttribute("src", image);
    newiImg.setAttribute("class", "content-img");
    newiImg.setAttribute("alt", "Rmedia image");
    document.getElementById("right-content").appendChild(newiImg);

    //---------------------------for button read more------------------------------
    var readMore = response.more;
    var newButton = document.createElement("button");
    newButton.setAttribute("id", "button");
    newButton.innerHTML = "Read more...";
    document.getElementById("read-more").appendChild(newButton);
    document.getElementById("button").addEventListener("click", function () {
      document.getElementById("read-more").innerHTML = readMore;
    });
  }
};
xhttp.open("GET", "json/main.json", true);
xhttp.send();
