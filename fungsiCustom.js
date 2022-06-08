// TODO: import module bila dibutuhkan di sini
const { throws } = require('assert');
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  
  arrHasil = [];

  fs.readFile(file1, {encoding: "utf-8"}, (err, data) => {
    if (err) {
      return fnCallback(err, null);
    } 
    
    const jsonVar1 = JSON.parse(data);
    const txt = jsonVar1.message.split(" ");
    arrHasil.push(txt[1]);
    
    fs.readFile(file2, {encoding: "utf-8"}, (err, data) => {
      if (err) { return fnCallback(err, null); } 
      
      const jsonVar2 = JSON.parse(data);
      arrHasil.push(jsonVar2[0].message.split("halo ").join(""));

      fs.readFile(file3, {encoding: "utf-8"}, (err, data) => {
        if (err) { return fnCallback(err, null) }
        const jsonVar3 = JSON.parse(data);
        arrHasil.push(jsonVar3[0]['data'].message.split("halo ").join(""));
        fnCallback(null, arrHasil);
      });

    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
