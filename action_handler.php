



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <title>Title</title>



    <style>
    * {
      box-sizing: border-box;
    }

    body {
      font: 14px Arial;
    }

    /*the container must be positioned relative:*/
    .autocomplete {
      position: relative;
      display: inline-block;
    }

    input {
      border: 1px solid transparent ;
      background-color: white;
      padding: 10px;
      font-size: 16px;
    }

    input[type=text] {
      background-color: white;
      border-top-right-radius: : 5%;
      border-color: #f1f1f1;
      width: 100%;
    }



    .autocomplete-items {
      position: absolute;
      border: 1px solid #d4d4d4;
      border-bottom: none;
      border-top: none;
      z-index: 99;
      /*position the autocomplete items to be the same width as the container:*/
      top: 100%;
      left: 0;
      right: 0;
    }

    .autocomplete-items div {
      padding: 10px;
      cursor: pointer;
      background-color: #fff;
      border-bottom: 1px solid #d4d4d4;
    }

    /*when hovering an item:*/
    .autocomplete-items div:hover {
      background-color: #e9e9e9;
    }

    /*when navigating through the items using the arrow keys:*/
    .autocomplete-active {
      background-color: DodgerBlue !important;
      color: #ffffff;
    }
    </style>

    <style>


        body{
            background-color: #FCFFFF;
        }
        .navbar{
            background-color: #EDEBEB;

        }
        .nav-item{
            color: #cf4f4f;


        }
        .jumbotron{
            margin: 0 0 5px 0;
            height:150px;
            background-color: white;

        }


        .img-fluid{
            margin-top:-120px;

            margin-left: 1000px;
            width: 300px;
            background-color: white;
        }

        .card-deck{
            margin-top: 5px;
            margin-left: 25%;
            margin-right: 25%;


            font-family: "Arial Black";
        }
        .container-sm {

            text-align:center;

            font-size: 30px;


        }
        .form-control{
            width: 25%;

        }
        .card {
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.2s ease-in-out;
            box-sizing: border-box;
            margin-top:10px;
            margin-bottom:10px;
            margin-left: 10%;


            background-color:white;
            width: 100px;


        }

        .card:hover {
            box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
        .card > .card-inner {
            padding:10px;
        }
        .card .header h2, h3 {
            margin-bottom: 0px;
            margin-top:0px;
            font-size: 15px;
            color:black;
        }
        .card .header {
            margin-bottom:5px;
        }
        .card img{
            width:100%;
        }
        .header{
            font-size: 5px;
            font-family: Arial;
        }

        #sticky-footer {
            background-color: #EDEBEB;
            margin-top: 30px;
            text-align: center;
        }

        .card-title a:hover{
            text-decoration: none;
        }

        .container {
            padding: 2rem 0rem;
        }

        h4 {
            margin: 2rem 0rem 1rem;
        }


    </style>


<script>
$(document).ready(function () {
    $("input[name='units[]']").change(function () {
        var maxAllowed = 4;
        var cnt = $("input[name='units[]']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('You can select maximum ' + maxAllowed + ' units!!');
        }
    });
});
</script>



<script>
function UnSelectAll(){
				var items=document.getElementsByName('units[]');
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=false;
				}
			}

</script>

<script>
function UnSelectAll(){
				var items=document.getElementsByName('units[]');
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=false;
				}
			}

</script>

<script>

function onCbChange(cb) {
  var b = document.getElementById(cb).checked;

  var confirmBox = confirm("Did you completed Computing fundamental (HIT164)");

  if (confirmBox == true) {
      if (b) {
          document.getElementById(cb).checked = true;
      } else {
          document.getElementById(cb).checked = false;
      }
  } else {

      document.getElementById(cb).checked = !b;
  };

}

</script>







<script>

function ondbChange(db) {
  var b = document.getElementById(db).checked;

  var confirmBox = confirm("Did you completed Mobile Web Strcture (HIT226");

  if (confirmBox == true) {
      if (b) {
          document.getElementById(db).checked = true;
      } else {
          document.getElementById(db).checked = false;
      }
  } else {

      document.getElementById(db).checked = !b;
  };

}

</script>
<script>

$(document).ready(function(){


  $(".uncheck").click(function(){
      $("#cbox").prop("checked", false);
  });
});
</script>


</head>







<body>
<div class="jumbotron">
    <h1>CDU Course Management System </h1>

    <img src="logo.jpg" class="img-fluid" alt="Responsive image">


</div>
<nav class="navbar navbar-expand-lg navbar-light ">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="level.html">Level<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#" >Browse by Study Area</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">

        </form>
    </div>
</nav>


</div>


<footer id="sticky-footer" class="py-4  text-black-60">

    <small style="color: black">Copyright &copy; Your Website</small>

</footer>
</body>
</html>


<?php
  if(isset($_POST['units'])){
    $units = $_POST['units'];
    echo "You have selected the  following units:<br/>";

    foreach($units as $key => $value){
      
      echo"<table>";
      echo"<tr><td>Unit</td></tr>";
      echo"<tr><td>{$value}</td></tr>";
    }
  }
  else{
    echo "You must select at least one Unit.";
  }

?>
