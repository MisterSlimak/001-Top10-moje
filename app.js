// Import dependencies
// const fs = require("fs");
const XLSX = require("xlsx");

// Read the file into memory
// const workbook = XLSX.read(fs.readFileSync("file-example.xlsx"));
const workbook = XLSX.readFile("base.xlsx");

// Convert the XLSX to JSON
let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    // Some helper functions in XLSX.utils generate different views of the sheets:
    //     XLSX.utils.sheet_to_csv generates CSV
    //     XLSX.utils.sheet_to_txt generates UTF16 Formatted Text
    //     XLSX.utils.sheet_to_html generates HTML
    //     XLSX.utils.sheet_to_json generates an array of objects
    //     XLSX.utils.sheet_to_formulae generates a list of formulae
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

// Show the data as JSON
console.log(worksheets);