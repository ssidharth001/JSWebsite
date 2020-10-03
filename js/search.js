// document.getElementById("search").addEventListener("keyup", () => {
//   var search = document.getElementById("search").value;
//   var pText = document.getElementsByTagName("p");
//   for (var values of pText) {
//     values.innerHTML;
//   }
// });

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var originalContent = "";
    var searchContents = "";
    document.getElementById("search").addEventListener("keydown", function (e) {
      if (searchContents == "") {
        searchContents = document.getElementsByTagName("p");
      }
      if (e.key === "Enter") {
        for (var values of searchContents) {
          searchedTag = values;
          searchContent = values.innerHTML;

          searchContent = searchContent.toString();

          originalContent = searchContent;

          highlightWord(originalContent);
        }
        searchContent = "";
      }
    });
  },
  false
);

function highlightWord(searchContent) {
  var text = document.getElementById("search").value;
  if (text) {
    let newsearch = searchContent;
    var pattern = new RegExp("(" + text + ")", "g");
    var new_text = newsearch.replace(
      pattern,
      "<span class='highlight'>" + text + "</span>"
    );
    searchedTag.innerHTML = new_text;
  } else {
    console.log(searchContent);
    searchedTag.innerHTML = searchContent;
  }
}

// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     var originalContent = "";
//     document.getElementById("search").addEventListener("keydown", function (e) {
//       let searchContent = document.getElementById("first-para").innerHTML;
//       searchContent = searchContent.toString();
//       if (originalContent == "") {
//         originalContent = searchContent;
//       }
//       console.log(originalContent);
//       if (e.key === "Enter") {
//         console.log(originalContent);
//         highlightWord(originalContent);
//       }
//     });
//   },
//   false
// );

// function highlightWord(searchContent) {
//   var text = document.getElementById("search").value;
//   if (text) {
//     let newsearch = searchContent;
//     var pattern = new RegExp("(" + text + ")", "g");
//     var new_text = newsearch.replace(
//       pattern,
//       "<span class='highlight'>" + text + "</span>"
//     );
//     document.getElementById("first-para").innerHTML = new_text;
//   } else {
//     document.getElementById("first-para").innerHTML = searchContent;
//   }
// }
