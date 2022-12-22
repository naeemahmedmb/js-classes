
// var num = 16;
// document.write("<br/>Result is: "+num *num);

// var num =25;
// document.write("<br/>Result is: "+num *num);
//using funcation
// function square(){
//     var num = 16;
//     document.write("<br/>Result is: " + num * num);
//   }
function Mathmatic(num1,num2,num3){
document.write("<br/> The Addition: " + (num1+num2+num3));
document.write("<br/> The subtractrion: " + (num3-num2-num1));
document.write("<br/> The multi: " + (num1*num2*num3));
document.write("<br/> The division: " + ((num1/num2)/num3));
}
let num1 = Number (prompt("Enter a Number"));
let num2 = Number (prompt("Enter a Number"));
let num3 = Number (prompt("Enter a Number"));
  
Mathmatic(num1,num2,num3);