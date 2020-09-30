var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    //----------------------------for table headers--------------------------------
    var tableheader = response.tableheader;
    var output3 = "";
    for (var i = 0; i < tableheader.length; i++) {
      output3 += "<th>" + tableheader[i].header + "</th>";
    }
    document.getElementById("table-head").innerHTML = output3;
  }
};
xhttp.open("GET", "json/main.json", true);
xhttp.send();
