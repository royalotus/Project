const productsdb = (dbname, table) => {
  const db = new Dexie(dbname);
  db.version(1).stores(table);
  db.open();

  return db;
  /**
       * const db = new Dexie('myDb');
          db.version(1).stores({
          friends: `name, age`
      });
       */
};

const bulkcreate = (dbtable, data) => {
  let flag = empty(data);
  if (flag) {
    dbtable.bulkAdd([data]);
    console.log("data inserted successfully...!");
  } else {
    console.log("Please provide data...!");
  }
  return flag;
};

// create dynamic elements
const createEle = (tagname, appendTo, fn) => {
  const element = document.createElement(tagname);
  if (appendTo) appendTo.appendChild(element);
  if (fn) fn(element);
};

// check textbox validation
const empty = (object) => {
  let flag = false;
  for (const value in object) {
    if (object[value] != "" && object.hasOwnProperty(value)) {
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
};

// getData from the database
const getData = (dbname, fn) => {
  let index = 0;
  let obj = {};
  dbname.count((count) => {
    // count rows in the table using count method
    if (count) {
      dbname.each((table) => {
        // table => return the table object data
        // to arrange order we are going to create for in loop
        obj = SortObj(table);
        fn(obj, index++); // call function with data argument
      });
    } else {
      fn(0);
    }
  });
};

const SortObj = (sortobj) => {
  let obj = {};
  obj = {
    stdid: sortobj.stdid,
    com_tech: sortobj.com_tech,
    com_funda: sortobj.com_funda,
    os: sortobj.os,
    cult_int: sortobj.cult_int,
    stat: sortobj.stat,
    myInput1: sortobj.myInput1,
    myInput2: sortobj.myInput2,
    soft_now: sortobj.soft_now,
    mob_web: sortobj.mob_web,
    db_con: sortobj.db_con,
    sp_ele1: sortobj.sp_ele1,
    sp_ele2: sortobj.sp_ele2,
    net_eng: sortobj.net_eng,
    proj_mgmt: sortobj.proj_mgmt,
    sp_ele3: sortobj.sp_ele3,
    sp_ele4: sortobj.sp_ele4,
    hu_com: sortobj.hu_com,
    ent_it: sortobj.ent_it,
    sp_ele5: sortobj.sp_ele5,
    ele1: sortobj.ele1,
    cap: sortobj.cap,
    cyber: sortobj.cyber,
    sp_ele6: sortobj.sp_ele6,
    ele2: sortobj.ele2,
  };
  return obj;
};

export default productsdb;
export { bulkcreate, createEle, getData, SortObj };
