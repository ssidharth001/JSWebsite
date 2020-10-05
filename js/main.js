var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    //----------------------------for table headers--------------------------------
    theaders(response);
  }
};
xhttp.open("GET", "json/main.json", true);
xhttp.send();

function theaders(response) {
  var tableHeader = response.tableHeader;
  var tableHeaders = "";
  for (var i = 0; i < tableHeader.length; i++) {
    tableHeaders += "<th>" + tableHeader[i].header + "</th>";
  }
  document.getElementById("table-head").innerHTML = tableHeaders;
}
