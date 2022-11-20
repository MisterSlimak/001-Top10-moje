// Import excel
const fs = require("fs");
const XLSX = require("xlsx");

// Read the file into memory
const excel = XLSX.readFile("base.xlsx");

// Convert the excel to JSON
let dataBase = {};

// loop over every sheet
for (const sheetName of excel.SheetNames) {

    // XLSX.utils.sheet_to_json generates an array of objects
    dataBase[sheetName] = XLSX.utils.sheet_to_json(excel.Sheets[sheetName]);
}

// test
console.log(dataBase)