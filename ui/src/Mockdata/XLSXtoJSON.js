// const readXlsxFile = require('read-excel-file/node')
import dummyData from './dummyData'
var XLSX = require('xlsx')

// readXlsxFile(dummyData).then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
// })

var workbook = XLSX.readFile(dummyData);
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
let formattedData = JSON.stringify(xlData)
console.log(xlData)

// return xlData 

export default formattedData 