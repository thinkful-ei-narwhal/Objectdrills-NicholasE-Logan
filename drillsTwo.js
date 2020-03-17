//Make student reports
"use strict";

function makeStudentReport(data) {
  const resultArray = [];
  function printStudents(studentObj) {
    resultArray.push(`${studentObj.name}: ${studentObj.grade}`);
  }
  data.forEach(printStudents);
  return resultArray;
}

const dataTest = [
  { name: "john", grade: "b" },
  { name: "ference", grade: "c" }
];

console.log(makeStudentReport(dataTest));

const studentData = [
  {
    name: "Tim",
    status: "Current student",
    course: "Biology"
  },
  {
    name: "Sue",
    status: "Withdrawn",
    course: "Mathematics"
  },
  {
    name: "Liz",
    status: "On leave",
    course: "Computer science"
  }
];

function enrollInSummerSchool(studentData) {
  studentData.forEach(studentData => (studentData.status = "In summer school"));
  return studentData;
}

console.log(enrollInSummerSchool(studentData));

//expected output
// [
//   {
//     name: 'Tim',
//     status: 'In Summer school',
//     course: 'Biology'
//   },
//   {
//     name: 'Sue',
//     status: 'In Summer school',
//     course: 'Mathematics'
//   },
// ];
