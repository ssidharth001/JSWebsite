var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    var posts = response.posts;
    var postList = "";
    for (var i of posts) {
      postList +=
        "<li>" + "<a>" + "<img src=" + i + ' alt="" />' + "</a>" + "</li>";
    }
    document.getElementById("latest-posts").innerHTML = postList;
  }
};

if (window.location.href.split("/")[3] == "home.html") {
  xhttp.open("GET", "json/main.json", true);
} else if (window.location.href.split("/")[3] == "services.html") {
  xhttp.open("GET", "json/newPost.json", true);
}
xhttp.send();
