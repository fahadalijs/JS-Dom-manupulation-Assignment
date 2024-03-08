// var mathMarks = document.querySelector("#math-num");
// var chemMarks = document.querySelector("#chem-num");
// var phyMarks = document.querySelector("#phy-num");
// var urduMarks = document.querySelector("#urdu-num");
// var studentTotal = document.querySelector('#total-marks');
// var studentpercentage = document.querySelector("#percentage");
// var grade = document.querySelector("#grade")




// function calculatePercentage(){
//      console.log(mathMarks.value);
//      console.log(chemMarks.value);
//      console.log(phyMarks.value);
//      console.log(urduMarks.value);


//      var totalMarks = 400;
//      var obtainedMarks = +mathMarks.value + +chemMarks.value + +phyMarks.value + +urduMarks.value;
//      console.log('obtained marks ===>', obtainedMarks);
//      studentTotal.innerHTML = obtainedMarks;

//      var studentpercentage = obtainedMarks / totalMarks * 100;
//      percentage.innerHTML = studentpercentage;





//      if(studentpercentage > 80){
//         grade.innerHTML = 'A+'
//     }else if(studentpercentage > 70){
//         grade.innerHTML = 'A'
//     } else if(studentpercentage > 60){
//         grade.innerHTML = 'B'
//     }else{
//         grade.innerHTML = 'FAIL'
//     }
// }




var mathnum = document.querySelector("#math-num");
var chemnum = document.querySelector("#chem-num");
var phynum = document.querySelector("#phy-num");
var urdunum = document.querySelector("#urdu-num");
var studenttotal = document.querySelector("#total-marks");
var calculatepercentage = document.querySelector("#percentage");
var studentGrade = document.querySelector("#grade");

function studentpercentage(){
    console.log(mathnum.value);
    console.log(chemnum.value);
    console.log(phynum.value);
    console.log(urdunum.value);


  var  totalMarks = 400;
  var obtainedMarks = +mathnum.value + +chemnum.value + +phynum.value + +urdunum.value; 
  studenttotal.innerHTML = obtainedMarks;
  console.log('obtained marks ===>', obtainedMarks);
    
  var studentpercentage = obtainedMarks / totalMarks * 100 
  percentage.innerHTML = studentpercentage;

  if(studentpercentage > 80){
    grade.innerHTML = " A+"
  }
  else if(studentpercentage > 70){
    studentGrade.innerHTML = "A"
  }

  else if(studentpercentage > 60){
    grade.innerHTML = "B"
 }

 else if(studentpercentage > 50){
  grade = "C"
 }
 else{
  grade = "Fale"
 }

}
    























