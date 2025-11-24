const getAverage = array => array.reduce((a, b) => a + b) / array.length;

let scoresObject = {"100": "A+", "90-99": "A", "80-89": "B", "70-79":"C", "60-69":"D", "0-59":"F"};

const values = [
  {lower: 100, upper: 100, result: "A+"},
  {lower: 90, upper: 99, result: "A"},
  {lower: 80, upper: 89, result: "B"},
  {lower: 70, upper: 79, result: "C"},
  {lower: 60, upper: 69, result: "D"},
  {lower: 0, upper: 59, result: "F"}
];



function getGrade(studentScore){
  let grade = "";
  for(const v of values){
    if(v.lower <= studentScore && v.upper >= studentScore){
      grade = v.result;
      break;
    };
  };
  return grade;
};

let test = getGrade(61);
console.log(test);

function hasPassingGrade(studentScore){
  let grade = getGrade(studentScore);
  let passing = false;
  if(grade != "F"){
    passing = true;
  };
  return passing;
};

function studentMsg(scores, studentScore){
  let average = getAverage(scores);
  let grade = getGrade(studentScore);
  let passing = hasPassingGrade(studentScore); 
  let passtext = "";
  if(passing == true){
    passtext = "passed";
  } else{
    passtext = "failed";
  }
  return `Class average: ${average}. Your grade: ${grade}. You ${passtext} the course.`
  
};