document.addEventListener(
  "DOMContentLoaded",
  function () {
    var originalContent = "";
    document.getElementById("search").addEventListener("keyup", function () {
      let searchContent = document.getElementById("first-para").innerHTML;
      searchContent = searchContent.toString();
      if (originalContent == "") {
        originalContent = searchContent;
      }
      highlightWord(originalContent);
    });
  },
  false
);

function highlightWord(searchContent) {
  var searchTxt = document.getElementById("search").value;
  if (searchTxt) {
    var pattern = new RegExp("(" + searchTxt + ")", "g");
    var highlightedTxt = searchContent.replace(
      pattern,
      "<span class='highlight'>" + searchTxt + "</span>"
    );
    document.getElementById("first-para").innerHTML = highlightedTxt;
  } else {
    document.getElementById("first-para").innerHTML = searchContent;
  }
}
