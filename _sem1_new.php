

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
<div class="container-fluid">
    <h1 style="text-align: center; font-size:x-large; margin-top: 25px; margin-bottom: 5px"> Students Commencing in <br> Semester 1</h1>
    <!-- Table  -->
    <div class="container">
        <table class="table-responsive">
            <form action="action_handler.php" method="POST">
            <table class="table table-bordered">
                <thead >
                <tr style="background-color: #FCFFFF" >
                    <th scope="col" >Legend</th>
                    <th scope="col" style="font-weight:normal">CU = Common Unit</th>
                    <th scope="col" style="font-weight:normal">CO = Core Unit</th>
                    <th scope="col" style="font-weight:normal">SE = Specialist Elective</th>
                    <th scope="col" style="font-weight:normal">E = Elective</th>

                </tr>
                </thead>
            </table>

            <table class="table-responsive">
                <table class="table" style="margin-bottom: 0">
                    <thead >
                    <tr style="background-color: #FCFFFF" >
                        <th scope="col" style="text-align: center">SEMESTER 1</th>
                        <th scope="col" style="text-align: center" >SEMESTER 2</th>


                    </tr>
                    </thead>
                </table>
            </table>

            <div class="table-responsive">
                <div class="row">
                    <div class="col-12">
                        <form  method="POST">
                          <table class="table table-bordered">
                            <thead >
                            <tr style="background-color: #EDEBEB" >
                                <th scope="col"  style="text-align: center">Year 1</th>
                                <th scope="col">Legend</th>
                                <th scope="col" style="width:5%">action</th>
                                <th scope="col" style="text-align: center">Year 1</th>
                                <th scope="col">legend</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">CUC106</strong> <br> Design and Innovation: Communicating Technology  </td>
                                <td>CU </td>
                                <td>
                                    <div class="custom-control custom-checkbox">

                                            <input type="checkbox" value="Design and Innovation: Communicating Technology (CUC106)"  name="units[]"> <br/>
                                    </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">CUC107</strong> <br> Cultural Intelligence and Capability  </td>
                                <td>CU</td>
                                <td>
                                    <div class="custom-control custom-checkbox ">
                                        <input  type="checkbox" value="Cultural Intelligence and Capability (CUC107)"  name="units[]" disabled> <br/>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <!-- Modal
                                <td>
                                     Modal

                                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Click to choose electives</button>


                                    <div id="myModal" class="modal fade" role="dialog">
                                        <div class="modal-dialog">


                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    <h4 class="modal-title" style="text-align: center">Choose Electives</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Some text in the modal The parent <div> of the modal must have an ID that is the same as the value of the data-target attribute used to trigger the modal ("myModal").

                                                    The .modal class identifies the content of <div> as a modal and brings focus to it.

                                                        The .fade class adds a transition effect which fades the modal in and out. Remove this class if you do not want this effect.

                                                        The attribute role="dialog" improves accessibility for people using screen rea.</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">Add</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </td>-->
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT164</strong> <br> Computing Fundamentals  </td>
                                <td>CO</td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value="Computing Fundamentals (HIT164)"  name="units[]"> <br/>
                                    </div>

                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">STA101</strong> <br> Statistics  </td>
                                <td>CU</td>

                                <td>
                                    <div class="custom-control custom-checkbox disable">
                                        <input   type="checkbox" value="Statistics (STA101)"  name="units[]" disabled> <br/>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT172</strong> <br> Operating Systems and Applications	  </td>
                                <td>CO </td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value="Operating Systems and Applications (HIT172)"  name="units[]"> <br/>
                                    </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT137</strong> <br> Software Now  </td>
                                <td>CO</td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input  type="checkbox" value="Software Now (HIT137)"  name="units[]" disabled> <br/>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong>  Elective  </td>
                                <td>E </td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value="Elective"  name="units[]"> <br/>
                                    </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"> </strong> Elective   </td>
                                <td>E</td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value="Elective"  name="units[]" disabled> <br/>
                                    </div>
                                </td>

                            </tr>
                            </tbody>
                            <!--------------------------Year 2------------------------------------------------------->
                            <thead>
                            <tr style="background-color: #EDEBEB">
                                <th scope="col" style="text-align: center" >Year 2</th>
                                <th scope="col">Legend</th>
                                <th scope="col">action</th>
                                <th scope="col" style="text-align: center">Year 2</th>
                                <th scope="col">legend</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT226</strong> <br> Mobile Web Structures  </td>
                                <td>CO </td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input onchange="onCbChange('cbox')"  id="cbox" type="checkbox" value="Mobile Web Structures(HIT226)"  name="units[]" >

                                    </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT274</strong> <br> Network Engineering Applications  </td>
                                <td>CO</td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input   type="checkbox"  value="Network Engineering Applications (HIT274)"  name="units[]" disabled> <br/>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT234</strong> <br> Database Concepts (replaces BIS234)	  </td>
                                <td>CO </td>
                                <td>
                                    `     <div class="custom-control custom-checkbox">
                                    <input type="checkbox" value="Database Concepts (replaces BIS234) "  name="units[]"> <br/>
                                </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">PMO201</strong> <br> Project Management  </td>
                                <td>CO</td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input  type="checkbox" value="Project Management (PMO201)"  name="units[]" disabled> <br/>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td >

                                  <?php
                                  $connection = new mysqli("localhost", "root", "", "CMS") or die(mysqli_error());

                                  $getData = "select * from Year_1";


                                 $qur = $connection->query($getData);


                                  // Run the query and store the result
                                    //  $result = mysqli_query($connection, $getData);

                                      // Assign each record in the result to an array
                                      /*
                                         while ($row = mysqli_fetch_array($qur))
                                         {
                                             // Assign each array element to a variable
                                             $id = $row['sno'];
                                             $name = $row['subject_name'];
                                            echo htmlentities($name);

                                      }
                                      //echo $qur;



                                  while($r = mysqli_fetch_assoc($qur)){





                                  $msg[] = array("name" => $r['subject_name']);


                                  }


                                  $json = $msg;





                                  header('content-type: application/json');


                                  //echo json_encode($json);


*/


                                  @mysqli_close($conn);


                                  ?>



</td>

<?php
while ($row = mysqli_fetch_array($qur))
{
    // Assign each array element to a variable
    $id = $row['sno'];
    $name = $row['subject_name'];
   echo "

    <TR >

   <TD>$id</TD>
   <TD>$name</TD>
                </TR>
";

}
?>

                                <td>SE </td>

                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value=" Specialist Elective"  name="units[]"> <br/>
                                    </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong> Specialist elective  </td>
                                <td>SE </td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value=" Specialist Elective"  name="units[]" disabled> <a href="#" data-toggle="tooltip" ></a<br/>

                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong> Specialist elective  </td>
                                <td>SE </td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value=" Specialist Elective"  name="units[]"> <br/>
                                    </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong>  Specialist elective  </td>
                                <td>SE </td>
                                <td>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value=" Specialist Elective"  name="units[]" disabled> <br/>
                                    </div>
                                </td>

                            </tr>
                            </tbody>
                            <thead>
                            <tr style="background-color: #EDEBEB">
                                <th scope="col" style="text-align: center" >Year 3</th>
                                <th scope="col">Legend</th>
                                <th scope="col">action</th>
                                <th scope="col" style="text-align: center">Year 3</th>
                                <th scope="col">legend</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT381</strong> <br> Human Computer Interaction Design  </td>
                                <td>CO </td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input onchange="ondbChange('dbox')"  id="dbox" type="checkbox" value="Human Computer Interaction Design HIT381"  name="units[]"> <br/>
                                  </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT333</strong> <br> Cyber Security (replaces BIS243)  </td>
                                <td>CO</td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input  type="checkbox" value="Cyber Security (replaces BIS243) HIT333"  name="units[]" disabled> <br/>
                                  </div>
                                </td>

                            </tr>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT363</strong> <br> Enterprise IT Management (replaces BIS342)  </td>
                                <td>CO </td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input type="checkbox" value="Enterprise IT Management (replaces BIS342) --  HIT363"  name="units[]"> <br/>
                                  </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue">HIT401</strong> <br> Capstone Project </td>
                                <td>CO</td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input  type="checkbox" value="Capstone Project -- HIT401"  name="units[]" disabled> <br/>
                                  </div>
                                </td>

                            </tr>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong>  Specialist elective  </td>
                                <td>SE </td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input type="checkbox" value="Specialist elective "  name="units[]"> <br/>
                                  </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong>  Specialist elective  </td>
                                <td>SE </td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input  type="checkbox" value="Specialist elective "  name="units[]" disabled> <br/>
                                  </div>
                                </td>

                            </tr>
                            <tr>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong>  Elective  </td>
                                <td>E </td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input type="checkbox" value="Elective "  name="units[]"> <br/>
                                  </div>
                                </td>
                                <td style="font-size:15px; margin-right: 10px"><strong style=" color: darkblue"></strong>  Elective  </td>
                                <td>E </td>
                                <td>
                                  <div class="custom-control custom-checkbox ">
                                      <input  type="checkbox" value="Elective "  name="units[]" disabled> <br/>
                                  </div>
                                </td>

                            </tr>
                            </tbody>



                        </table>


                            <button class="btn btn-success"  type="button" onclick='UnSelectAll()' value="Unselect All" style="margin-bottom: 1%">Unselect All</button>
                             <button type="submit" class="btn btn-warning" value="Submit"style="margin-left:80%;margin-bottom: 1%">Submit</button>
                        </form>


                    </div>
                </div>

                </div>
            </form>
        </table>
      </div>

</div>

<footer id="sticky-footer" class="py-4  text-black-60">

    <small style="color: black">Copyright &copy; Your Website</small>

</footer>
</body>
</html>
