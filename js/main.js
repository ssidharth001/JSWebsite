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
  var tableheader = response.tableheader;
  console.log(tableheader);
  var output3 = "";
  for (var i = 0; i < tableheader.length; i++) {
    output3 += "<th>" + tableheader[i].header + "</th>";
  }
  document.getElementById("table-head").innerHTML = output3;
}
