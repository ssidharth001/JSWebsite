var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);

    var tableHeaders = response.tableHeaders;
    var tableKeys = response.tableKeys;
    theaders(tableHeaders, tableKeys);

    var tableDatas = response.tableContents;
    buildTable(tableDatas);

    document.querySelectorAll("th").forEach((item) => {
      item.addEventListener("click", function () {
        var column = this.dataset.column;
        var order = this.dataset.order;
        if (order == "descending") {
          this.dataset.order = "ascending";

          tableDatas = tableDatas.sort((a, b) =>
            a[column] > b[column] ? 1 : -1
          );
          buildTable(tableDatas);
        } else {
          this.dataset.order = "descending";
          tableDatas = tableDatas.sort((a, b) =>
            a[column] < b[column] ? 1 : -1
          );
          buildTable(tableDatas);
        }
      });
    });
  }
};
xhttp.open("GET", "json/tableData.json", true);
xhttp.send();

// <--------------------------TABLE SORTING--------------------------->

function tableSort() {}

// <--------------------------TABLE HEADERS--------------------------->

function theaders(tableHeaders, tableKeys) {
  var tableHead = "";
  for (var i = 0; i < tableHeaders.length; i++) {
    tableHead += `<th data-column="${tableKeys[i]}" data-order="descending">${tableHeaders[i]}</th>`;
  }
  document.getElementById("table-head").innerHTML = tableHead;
}
// <--------------------------TABLE CONTENTS--------------------------->
function buildTable(tableDatas) {
  var tableData = document.getElementById("table-data");
  tableData.innerHTML = "";
  for (var i of tableDatas) {
    var row = `<tr>
                    <td>${i.jobTitle}</td>
                    <td>${i.jobLocation}</td>
                    <td>${i.jobCode}</td>
                    <td>${i.lastDate}</td>
                    <td>${
                      i.posAvailability == true ? "<button>Apply</button>" : ""
                    }</td>
                </tr>`;
    tableData.innerHTML += row;
  }
}
