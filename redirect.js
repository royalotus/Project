import prodb, {
    bulkcreate,
    createEle,
    getData,
    SortObj,
} from "../js/mainModule.js";

let db = prodb("Productdb", {
    products: `++stdid, com_tech, com_funda, os,cult_int,stat,soft_now,mob_web,db_con,sp_ele1,sp_ele2,net_eng,proj_mgmt,sp_ele3,sp_ele4,hu_com,ent_it,sp_ele5,ele1,cyber,cap,sp_ele6,ele2,myInput1,myInput2`,
});

getData(db.products, (data) => {
    stdid.value = data.id + 1 || 1;
});
table();

function table() {
    const tbody = document.getElementById("tbody");
    const notfound = document.getElementById("notfound");
    notfound.textContent = "";
    // remove all childs from the dom first
    //   while (tbody.hasChildNodes()) {
    //     tbody.removeChild(tbody.firstChild);
    //   }

    getData(db.products, (data, index) => {
        if (data) {
            console.log(data);
            const com_tech = document.getElementById("com_tech");
            const com_funda = document.getElementById("com_funda");
            const os = document.getElementById("os");
            const cult_int = document.getElementById("cult_int");
            const myInput1 = document.getElementById("myInput1");
            const myInput2 = document.getElementById("myInput2");
            const proj_mgmt = document.getElementById("proj_mgmt");
            const soft_now = document.getElementById("soft_now");
            const mob_web = document.getElementById("mob_web");
            const db_con = document.getElementById("db_con");
            const sp_ele1 = document.getElementById("sp_ele1");
            const sp_ele2 = document.getElementById("sp_ele2");
            const sp_ele3 = document.getElementById("sp_ele3");
            const sp_ele4 = document.getElementById("sp_ele4");
            const sp_ele5 = document.getElementById("sp_ele5");
            const sp_ele6 = document.getElementById("sp_ele6");
            const ele1 = document.getElementById("ele1");
            const ele2 = document.getElementById("ele2");
            const net_eng = document.getElementById("net_eng");
            const hu_com = document.getElementById("hu_com");
            const ent_it = document.getElementById("ent_it");
            const cyber = document.getElementById("cyber");
            const cap = document.getElementById("cap");

            const ttl = document.getElementById("ttl");
            const ttr = document.getElementById("ttr");
            const re = document.getElementById("re");

            com_tech.innerHTML = data.com_tech ?
                `<td><label class="btn btn-info"><strong style="font-size:10px;">CUC106<br>  ${data.com_tech}</strong></label></td> ` :
                '<strong style=" color: darkblue" >HIT164  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_com_tech.innerHTML = data.com_tech ?
                `<td style="font-size:20px; margin-right: 10px "> <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input" value="1" checked disabled ><span class="css-control-indicator" ></span></label></td> ` : '<td > <labeldata-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" value="1"> <span class="css-control-indicator"></span> </label> </td> ';


            com_funda.innerHTML = data.com_funda ?
                `<td><label class="btn btn-info"><strong style="font-size:10px">HIT164 <br>  ${data.com_funda}</strong></td> ` :
                '<strong style=" color: darkblue">HIT164  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_com_funda.innerHTML = data.com_funda ?
                `<td ><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input" checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';


            os.innerHTML = data.os ?
                `<td><label class="btn btn-info"><strong style="font-size:10px;" >HIT172<br> ${data.os}</strong></td> ` :
                '<strong style=" color: darkblue">HIT172  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_os.innerHTML = data.os ?
                `<td ><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';


            cult_int.innerHTML = data.cult_int ?
                `<td><label class="btn btn-info"><strong style="font-size:10px;">CUC107<br> ${data.cult_int}</strong></td> ` :
                '<strong style="font-size:10px;" >CUC107  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_cult_int.innerHTML = data.cult_int ?
                `<td><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled > <span class="css-control-indicator"></span> </label> </td> ';


            stat.innerHTML = data.stat ?
                `<td><label class="btn btn-info"><strong style="font-size:10px;" >STA101<br>  ${data.stat} </strong></td> ` :
                '<strong style=" color: darkblue">STA101  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_stat.innerHTML = data.stat ?
                `<td><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator"></span> </label> </td> ';


            soft_now.innerHTML = data.soft_now ?
                ` <td><label class="btn btn-info"><strong style="font-size:10px;" >HIT137<br> Software Now </strong>  </td>` :
                '<strong style=" color: darkblue">HIT137  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_soft_now.innerHTML = data.soft_now ?
                `<td ><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label  data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator" disabled></span> </label> </td> ';


            mob_web.innerHTML = data.mob_web ?
                ` <td ><label class="btn btn-info"><strong style="font-size:10px;" >HIT226<br>${data.mob_web}</strong> </td> ` :
                '<strong style=" color: darkblue">HIT226  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_mob_web.innerHTML = data.mob_web ?
                `<td ><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';


            db_con.innerHTML = data.db_con ?
                `<td ><label class="btn btn-info"><strong style="font-size:10px;" >BIS234<br>  ${data.db_con}</strong></td> ` :
                '<strong style=" color: darkblue">BIS234  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_db_con.innerHTML = data.db_con ?
                `<td><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';

            sp_ele1.innerHTML = data.sp_ele1 ?
                `<div class="btn btn-primary" style="font-size:10px">${data.sp_ele1}</div>` :
                ' <span class="text-center badge badge-danger">Specialist Elective Not completed</span>';

            status_sp_ele1.innerHTML = data.sp_ele1 ?
                `<td ><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';




            sp_ele2.innerHTML =
                data.sp_ele2 != "Choose the Specialist Elective" ?
                `<div class="btn btn-primary"  style="font-size:10px">${data.sp_ele2}</div>` :
                ' <span class="text-center badge badge-danger">Specialist Elective Not completed</span>';

            status_sp_ele2.innerHTML =
                data.sp_ele2 != "Choose the Specialist Elective" ?
                `<td><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled > <span class="css-control-indicator"></span> </label> </td> ';


            sp_ele3.innerHTML =
                data.sp_ele2 != "Choose the Specialist Elective" ?
                `<div class="btn btn-primary"  style="font-size:10px">${data.sp_ele3}` :
                ' <span class="text-center badge badge-danger">Specialist Elective Not completed</span>';
            status_sp_ele3.innerHTML =
                data.sp_ele2 != "Choose the Specialist Elective" ?
                `<td><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label  class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" > <span class="css-control-indicator"></span> </label> </td> ';

            sp_ele4.innerHTML =
                data.sp_ele4 != "Choose the Specialist Elective" ?
                `<div class="btn btn-primary"  style="font-size:10px">${data.sp_ele4}</div>` :
                ' <span class="text-center badge badge-danger">Specialist Elective Not completed</span>';

            status_sp_ele4.innerHTML =
                data.sp_ele4 != "Choose the Specialist Elective" ?
                `<td><label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled > <span class="css-control-indicator"></span> </label> </td> ';


            sp_ele5.innerHTML =
                data.sp_ele5 != "Choose the Specialist Elective" ?
                `<div class="btn btn-primary "  style="font-size:10px">${data.sp_ele5}</div>` :
                ' <span class="text-center badge badge-danger">Specialist Elective Not completed</span>';


            status_sp_ele5.innerHTML =
                data.sp_ele5 != "Choose the Specialist Elective" ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';


            sp_ele6.innerHTML =
                data.sp_ele6 != "Choose..." ?
                `<div class="btn btn-primary"  style="font-size:10px">${data.sp_ele5}</div>` :
                ' <span class="text-center badge badge-danger">Specialist Elective Not completed</span>';

            status_sp_ele6.innerHTML =
                data.sp_ele6 != "Choose..." ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator"></span> </label> </td> ';



            ele1.innerHTML =
                data.ele1 != "Choose the Elective" ?
                `<div class="btn btn-primary"  style="font-size:10px">${data.ele1}</div>` :
                ' <span class="text-center badge badge-danger">Elective Not completed</span>';
            status_ele1.innerHTML =
                data.ele1 != "Choose the Elective" ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';



            ele2.innerHTML =
                data.ele2 != "Choose the Elective" ?
                `<div class="btn btn-primary"  style="font-size:10px">${data.ele2}</div>` :
                ' <span class="text-center badge badge-danger">Elective Not completed</span>';

            status_ele2.innerHTML =
                data.ele2 != "Choose the Elective" ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator" ></span> </label> </td> ';


            net_eng.innerHTML = data.net_eng ?
                `<td ><label class="btn btn-info"><strong style="font-size:10px;" >HIT274<br>  ${data.net_eng}</strong></td> ` :
                '<strong style=" color: darkblue">HIT274  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_net_eng.innerHTML = data.net_eng ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator"></span> </label> </td> ';


            proj_mgmt.innerHTML = data.proj_mgmt ?
                `<td ><label class="btn btn-info"><strong style="font-size:10px;" >PMO201<br>   ${data.proj_mgmt}</strong></td> ` :
                '<strong style=" color: darkblue">PMO201  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_proj_mgmt.innerHTML = data.proj_mgmt ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed"  class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator" ></span> </label> </td> ';



            hu_com.innerHTML = data.hu_com ?
                `<td ><label class="btn btn-info"><strong style="font-size:10px;" >HIT381<br>  ${data.hu_com} </strong></td> ` :
                '<strong style=" color: darkblue">HIT381  </strong> <span class="text-center badge badge-danger">Not completed</span>';
            status_hu_com.innerHTML = data.hu_com ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';



            ent_it.innerHTML = data.ent_it ?
                `<td ><label class="btn btn-info"><strong style="font-size:10px;" >HIT363<br>  ${data.ent_it}</td>  </strong>` :
                '<strong style=" color: darkblue">HIT363  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_ent_it.innerHTML = data.ent_it ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';



            cyber.innerHTML = data.cyber ?
                `<td ><label class="btn btn-info"><strong style="font-size:10px;" >HIT333<br>   ${data.cyber}</td></strong> ` :
                '<strong style=" color: darkblue">HIT333  </strong> <span class="text-center badge badge-danger">Not completed</span>';


            status_cyber.innerHTML = data.cyber ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator"></span> </label> </td> ';


            cap.innerHTML = data.cap ?
                `<td ><label class="btn btn-info"><strong style="font-size:10px;" >HIT401 <br>  ${data.cap}</td> </strong>` :
                '<strong style=" color: darkblue">HIT401  </strong> <span class="text-center badge badge-danger">Not completed</span>';

            status_cap.innerHTML = data.cap ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <labeldata-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1" class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled> <span class="css-control-indicator"></span> </label> </td> ';


            myInput1.innerHTML = data.myInput1 ?
                `<td><label class="btn btn-primary"  style="font-size:10px">${data.myInput1}</label> </td>` :
                '<span class="text-center badge badge-danger"> Elective Not completed</span>';

            status_myInput1.innerHTML = data.myInput1 ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled disabled><span class="css-control-indicator"></span></label></td> ` : '<td > <label class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input"> <span class="css-control-indicator"></span> </label> </td> ';


            myInput2.innerHTML = data.myInput2 ?
                `<td><label class="btn btn-primary"  style="font-size:10px">${data.myInput2}</label> </td>` :
                '<span class="text-center badge badge-danger">Elective Not completed</span>';
            status_myInput2.innerHTML = data.myInput2 ?
                `<td > <label data-toggle="tooltip" data-placement="top" title="Completed and cannot be changed" class="css-control css-control-sm css-control-info css-switch"><input type="checkbox" class="css-control-input"  checked disabled><span class="css-control-indicator" disabled></span></label></td> ` : '<td style="font-size:15px; margin-right: 10px"> <label data-toggle="tooltip" data-placement="top" title="semister 2 subject cannot change from semister 1"  class="css-control css-control-sm css-control-info css-switch"> <input type="checkbox" class="css-control-input" disabled > <span class="css-control-indicator"></span> </label> </td> ';

        } else {
            notfound.textContent = "No record found in the database...!";
        }
        if (data) {
            ttl.innerHTML =
                (data.com_tech !== "" ? 10 : 0) +
                (data.com_funda !== "" ? 10 : 0) +
                (data.os !== "" ? 10 : 0) +
                (data.cult_int !== "" ? 10 : 0) +
                (data.stat !== "" ? 10 : 0) +
                (data.mob_web !== "" ? 10 : 0) +
                (data.soft_now !== "" ? 10 : 0) +
                (data.myInput1 !== "" ? 10 : 0) +
                (data.myInput2 !== "" ? 10 : 0) +
                (data.proj_mgmt !== "" ? 10 : 0) +
                (data.db_con !== "" ? 10 : 0) +
                (data.net_eng !== "" ? 10 : 0) +
                (data.hu_com !== "" ? 10 : 0) +
                (data.ent_it !== "" ? 10 : 0) +
                (data.cyber !== "" ? 10 : 0) +
                (data.cap !== "" ? 10 : 0) +
                (data.sp_ele1 !== "" ? 10 : 0) +
                (data.sp_ele2 !== "" ? 10 : 0) +
                (data.sp_ele3 !== "" ? 10 : 0) +
                (data.sp_ele4 !== "" ? 10 : 0) +
                (data.sp_ele5 !== "" ? 10 : 0) +
                (data.sp_ele6 !== "Choose..." ? 10 : 0) +
                (data.ele1 !== "Choose the Elective " ? 10 : 0) +
                (data.ele2 !== "Choose the Elective " ? 10 : 0);
            //console.log(ttl.innerHTML);
            ttr.innerHTML = 240 - ttl.innerHTML;
            //console.log(ttr);

            let su =
                (data.sp_ele1 != "" ? 10 : 0) +
                (data.sp_ele2 != "" ? 10 : 0) +
                (data.sp_ele3 != "" ? 10 : 0) +
                (data.sp_ele4 != "" ? 10 : 0) +
                (data.sp_ele5 != "" ? 10 : 0) +
                (data.sp_ele6 != "Choose..." ? 10 : 0);

            re.innerHTML = 60 - su;
            //console.log(re.innerHTML);
        }
    });
}






//     $(document).ready(function() {
//         $(".designation_info_tbl_body").on("change", ".designation_status", function () {
//             let designation_status = $(this).val();

//             if(designation_status == "1")
//             {

//                  designation_status = 0;


//             }
//             else
//             {

//                  designation_status = 1;  
//             }
//             let designation_id = $(this).attr("id");
//            if(confirm("Are You Sure?")){

//               $.ajax({
//                   url : "{{route('dynamic.designation_setup_send_status')}}",
//                   method:"get",
//                   data:{
//                       "designation_id" : designation_id,
//                       "designation_status" : designation_status,
//                   },
//                   cache: false,
//                   dataType:"json",
//                   success:function($data){
//                       location.reload();

//                   },
//                   error:function(data){
//                         alert("error");
//                   },

//               });
//            }

//            else{

//               location.reload();
//               }

//          });

// });