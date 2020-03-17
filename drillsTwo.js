//Make student reports
'use strict';

function makeStudentReport(data) {
  const resultArray = [];
  function printStudents(studentObj) {
    resultArray.push(`${studentObj.name}: ${studentObj.grade}`);
  }
  data.forEach(printStudents);
  return resultArray;
}

const dataTest = [{ name: 'john', grade: 'b' }, { name: 'ference', grade: 'c' }];

console.log(makeStudentReport(dataTest));