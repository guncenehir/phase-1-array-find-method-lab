// code your solution here
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
function superbowlWin(record){
 const winYear = record.find(season => season.result === "W");
 return winYear ? winYear.year : undefined;
}

console.log(superbowlWin(record));