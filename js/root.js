import prodb, {
  bulkcreate,
  createEle,
  getData,
  SortObj,
} from "./mainModule.js";

let db = prodb("Productdb", {
  products: `++stdid, com_tech, com_funda, os,cult_int,stat,soft_now,mob_web,db_con,sp_ele1,sp_ele2,net_eng,proj_mgmt,sp_ele3,sp_ele4,hu_com,ent_it,sp_ele5,ele1,cyber,cap,sp_ele6,ele2,myInput1,myInput2`,
});

// input tags
const stdid = document.getElementById("stdid");

const com_tech = document.getElementById("com_tech");
const com_funda = document.getElementById("com_funda");
const os = document.getElementById("os");
const cult_int = document.getElementById("cult_int");
const stat = document.getElementById("stat");
const myInput1 = document.getElementById("myInput1");
const myInput2 = document.getElementById("myInput2");
const soft_now = document.getElementById("soft_now");
const mob_web = document.getElementById("mob_web");
const db_con = document.getElementById("db_con");
const sp_ele1 = document.getElementById("sp_ele1");
const sp_ele2 = document.getElementById("sp_ele2");
const net_eng = document.getElementById("net_eng");
const proj_mgmt = document.getElementById("proj_mgmt");
const sp_ele3 = document.getElementById("sp_ele3");
const sp_ele4 = document.getElementById("sp_ele4");
const hu_com = document.getElementById("hu_com");
const ent_it = document.getElementById("ent_it");
const sp_ele5 = document.getElementById("sp_ele5");
const ele1 = document.getElementById("ele1");
const cyber = document.getElementById("cyber");
const cap = document.getElementById("cap");
const sp_ele6 = document.getElementById("sp_ele6");
const ele2 = document.getElementById("ele2");

// create button
const btncreate = document.getElementById("btn-create");

// user data

// event listerner for create button
btncreate.onclick = (event) => {
  //check if field is checked
  if (!document.getElementById("com_tech").checked) {
    document.getElementById("com_tech").value = "";
  }
  if (!document.getElementById("com_funda").checked) {
    document.getElementById("com_funda").value = "";
  }
  if (!document.getElementById("os").checked) {
    document.getElementById("os").value = "";
  }
  if (!document.getElementById("cult_int").checked) {
    document.getElementById("cult_int").value = "";
  }
  if (!document.getElementById("stat").checked) {
    document.getElementById("stat").value = "";
  }
  if (!document.getElementById("soft_now").checked) {
    document.getElementById("soft_now").value = "";
  }
  if (!document.getElementById("stat").checked) {
    document.getElementById("stat").value = "";
  }
  if (!document.getElementById("mob_web").checked) {
    document.getElementById("mob_web").value = "";
  }
  if (!document.getElementById("db_con").checked) {
    document.getElementById("db_con").value = "";
  }
  if (!document.getElementById("net_eng").checked) {
    document.getElementById("net_eng").value = "";
  }
  if (!document.getElementById("proj_mgmt").checked) {
    document.getElementById("proj_mgmt").value = "";
  }
  if (!document.getElementById("hu_com").checked) {
    document.getElementById("hu_com").value = "";
  }
  if (!document.getElementById("ent_it").checked) {
    document.getElementById("ent_it").value = "";
  }
  if (!document.getElementById("cyber").checked) {
    document.getElementById("cyber").value = "";
  }
  if (!document.getElementById("cap").checked) {
    document.getElementById("cap").value = "";
  }
  if (!document.getElementById("myInput1").checked) {
    document.getElementById("myInput1").value = "";
  }
  if (!document.getElementById("myInput2").checked) {
    document.getElementById("myInput2").value = "";
  }
  // if (!document.getElementById("sp_ele3").checked) {
  //   document.getElementById("sp_ele3").value = "";
  // }
  // if (!document.getElementById("sp_ele4").checked) {
  //   document.getElementById("sp_ele4").value = "";
  // }
  // if (!document.getElementById("sp_ele5").checked) {
  //   document.getElementById("sp_ele5").value = "";
  // }
  // if (!document.getElementById("sp_ele6").checked) {
  //   document.getElementById("sp_ele6").value = "";
  // }

  // insert values
  let flag = bulkcreate(db.products, {
    com_tech: com_tech.value,
    com_funda: com_funda.value,
    os: os.value,
    cult_int: cult_int.value,
    stat: stat.value,
    soft_now: soft_now.value,
    myInput1: myInput1.value,
    myInput2: myInput2.value,
    mob_web: mob_web.value,
    db_con: db_con.value,
    sp_ele1: sp_ele1.value,
    sp_ele2: sp_ele2.value,
    net_eng: net_eng.value,
    proj_mgmt: proj_mgmt.value,
    sp_ele3: sp_ele3.value,
    sp_ele4: sp_ele4.value,
    hu_com: hu_com.value,
    ent_it: ent_it.value,
    sp_ele5: sp_ele5.value,
    cyber: cyber.value,
    ele1: ele1.value,
    cap: cap.value,
    sp_ele6: sp_ele6.value,
    ele2: ele2.value,
  });
  // reset textbox values

  com_tech.value = com_funda.value = os.value = sp_ele1.value = cult_int.value = stat.value = soft_now.value = mob_web.value = db_con.value = sp_ele1.value = sp_ele2.value = net_eng.value = proj_mgmt.value = sp_ele3.value = sp_ele4.value = hu_com.value = ent_it.value = sp_ele5.value = ele1.value = cap.value = sp_ele6.value = ele2.value = cyber.value = myInput1.value = myInput2.value =
    "";
  getData(db.products, (data) => {
    stdid.value = data.id + 1 || 1;
  });
  table();
  let insertmsg = document.querySelector(".insertmsg");
  getMsg(flag, insertmsg);
};

// event listerner for create button
// window.onload = (event) => {
//   // set id textbox value
//   textID(userid);
// };

// create dynamic table
function table() {
  const tbody = document.getElementById("tbody");
  const notfound = document.getElementById("notfound");
  notfound.textContent = "";
  // remove all childs from the dom first
  // while (tbody.hasChildNodes()) {
  //   tbody.removeChild(tbody.firstChild);
  // }

  getData(db.products, (data, index) => {
    if (data) {
      createEle("tr", tbody, (tr) => {
        for (const value in data) {
          createEle("td", tr, (td) => {
            td.textContent =
              data.ele1 === data[value] ? ` ${data[value]}` : data[value];
          });
        }
      });
    } else {
      notfound.textContent = "No record found in the database...!";
    }
  });
}

// function msg
function getMsg(flag, element) {
  if (flag) {
    // call msg
    element.className += " movedown";

    setTimeout(() => {
      element.classList.forEach((classname) => {
        classname == "movedown"
          ? undefined
          : element.classList.remove("movedown");
      });
    }, 4000);
  }
}
