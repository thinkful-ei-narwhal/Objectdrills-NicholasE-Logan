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

const dataTest = [
  { name: 'john', grade: 'b' },
  { name: 'ference', grade: 'c' }
];

console.log(makeStudentReport(dataTest));

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

function enrollInSummerSchool(studentData) {
  studentData.forEach(studentData => (studentData.status = 'In summer school'));
  return studentData;
}

const test = enrollInSummerSchool(studentData);
test.forEach(x => console.log(x));

//Find by id
const data = [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bizz' }];
function findById(items, idNum) {
  return items.filter(item => item.id === idNum);
}

console.log(findById(data, 2));