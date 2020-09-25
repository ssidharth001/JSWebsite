var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      
      //----------------------------------for menu----------------------------
      var menu = response.menu;
      var output1 = '';
      for(var i = 0;i < menu.length;i++){
        if(menu[i].not_found == true){
          output1 += '<li>'+'<a href="error_404.html">'+menu[i].title+'</a>'+'</li>';
        }
        else {
          output1 += '<li>'+'<a href='+ menu[i].url +'>'+menu[i].title+'</a>'+'</li>';
        }
        
      };
      document.getElementById('menu').innerHTML = output1;

      

      //----------------------------------for posts---------------------------------
      var posts = response.posts;
      var output2 = '';
      for(var i = 0;i < posts.length;i++){
        output2 += '<li>'+'<a>'+'<img src='+ posts[i] + ' alt="" />'+'</a>'+'</li>';
      };
      document.getElementById('latest-posts').innerHTML = output2;

      //----------------------------for table headers--------------------------------
      var tableheader = response.tableheader;
      var output3 = '';
      for(var i=0;i < tableheader.length;i++){
        output3 += '<th>'+tableheader[i]+'</th>'
      };
      document.getElementById("table-head").innerHTML = output3;

      //---------------------------for button read more------------------------------
      var more = response.more;
      document.getElementById("button").addEventListener("click", function() {
      document.getElementById("more").innerHTML = more;
      });

      
      
    };
};
xhttp.open("GET", "json/menu.json", true);
xhttp.send();