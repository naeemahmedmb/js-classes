// var num = 16;
// document.write("<br/>Result is: "+num *num);

// var num =25;
// document.write("<br/>Result is: "+num *num);
//using funcation
// function square(){
//     var num = 16;
//     document.write("<br/>Result is: " + num * num);
//   }

//using parameter function
// function Mathmatic(num1,num2,num3){
// document.write("<br/> The Addition: " + (num1+num2+num3));
// document.write("<br/> The subtractrion: " + (num3-num2-num1));
// document.write("<br/> The multi: " + (num1*num2*num3));
// document.write("<br/> The division: " + ((num1/num2)/num3));
// }
// let num1 = Number (prompt("Enter a Number"));
// let num2 = Number (prompt("Enter a Number"));
// let num3 = Number (prompt("Enter a Number"));

// Mathmatic(num1,num2,num3);

let username = prompt("username:");
let password = prompt("password:");
(function userpass(username,password) {
  document.write("user:" + username);
  document.write("<br/> pass:" + password);
})(username,password);

//without parameter function
// function test(){
//   var num = 16;
//   document.write ("<br/>Result is: "+ num * num);
// }
// test();

//IIFEs(Immdiately Invokeable Function Expression)
(function show(){
  document.write("<br/>IIFEs Immdiately Invokeable Function Expression");
  document.write("<br/> Naeem Ahmed");
})();