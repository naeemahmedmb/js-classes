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

// let username = prompt("username:");
// let password = prompt("password:");
// (function userpass(username,password) {
//   document.write("user:" + username);
//   document.write("<br/> pass:" + password);
// })(username,password);

// //without parameter function
// // function test(){
// //   var num = 16;
// //   document.write ("<br/>Result is: "+ num * num);
// // }
// // test();

// //IIFEs(Immdiately Invokeable Function Expression)
// (function show(){
//   document.write("<br/>IIFEs Immdiately Invokeable Function Expression");
//   document.write("<br/> Naeem Ahmed");
// })();

// let var i=3 ; ("Enter A Number: ")

// var names =["Naeem","18","Al Amin","25","Mozid","14","DWD",];
// document.write(names+"<br>");

// document.write(names[0] + "<br/>");
// document.write(names[1] + "<br/>");
// document.write(names[2] + "<br/>");
// document.write(names[3] + "<br/>");

// for(var i= 0 ; i<names.length; i++)
// document.write("<h1 style='color:red'>" + names[i] + "</h1>");

// for(var i= 0 ; i<names.length; i++)
// document.write("<h1 style='background:red; color:black'>" + names[i] + "</h1>");

// var names = new Array();
// var mylist = new Array(5);
// for(var i= 0 ; i < mylist.length; i++)
// mylist[i] = prompt("Enter " + i + " index Number ")
// for (var i = 0; i<mylist.length; i++)
// document.write(mylist[i] + "<br>");

// for (var i = 0; i<mylist.length; i++){
//     mylist[i] = prompt("Enter " + i + " index Number ");
//     document.write(mylist[i] + "<br>")
// }

// var Name = new Array();

// var namesType0 = new Array();
// var namesType1 = new Array();

// namesType0[0] = "Naeem";
// namesType1[1] = "DWD";
// document.write(namesType0.concat(namesType1)) + "<br/>";

// // var namesType3 = new Array();
// var namesType3 = new Array();
// namesType3[0] = "18";
// namesType0 = namesType1.concat(namesType1);
// document.write(namesType3);

// var names = new Array();
// var names = ['A','B','C','D','E','F','G','H'];

// names.pop();
// console.log(names);

// names.push("Text")
// document.write(names);

// names.shift();
// console.log(names);

// names.unshift("You");
// console.log(names);

// var Number = [67,98,23];

// Number.sort(function(a,b){
//     return a-b;
// });
// console.log(Number);

// function highestScore(scores)

//   var high = scores[0];
// for(var i = 0; i < 3; i++){

//     if (high <scores[i])
//      high = scores[i];
//   }
//   return high;

// var scores = [200, 8, 100];
// console.log(highestScore(scores));

// let Number=prompt("Enter" + i + " Number: ")

// Object

// var student = {
//   name: "Naeem Ahmed",
//   roll:"18",
//   course: "Web Application",
// }
// console.log(student.name);
// console.log(student.roll);
// console.log(student.course);

//constractor

// function student(name, age, roll, year,course) {
//   this.name = name;
//   this.age = age;
//   this.roll = roll;
//   this.year = year;
//   this.course=course;

// this.display = function () {
//   console.log(this.name);
//   console.log(this.age);
//   console.log(this.roll);
//   console.log(this.year);
//   console.log(this.course);
// }
// };

// var student1 = new student('Naeem Ahmed', 23, 18, '1st', ['database']);
// console.log(student1.name);
// console.log(student1);

// var student2 = new student('Abdul Mozid', 21, 14, '1st', ['database']);
// console.log(student2.name);
// console.log(student2);
// //display constrations
// student1.display();
// student2.display();

// object represntations with nd its constructor
// class GFG {
//   constructor(A,B){
//     this.g =A;
//     this.f =B;
//   }
//   print() {
//     document.write(this.g +"<br/>"+this.f);
//   }
// }
// let gg = new GFG("Naeem", "Ahmed");
//   gg.print();


// create A class of customer
  // class customer{
  //   constructor(customerId,coustomerName,profession,items){
  //     this.coustomerId = customerId;
  //     this.coustomerName = coustomerName;
  //     this.profession = profession;
  //     this.items = items;
  //   }
  //   print(){
  //     document.write( this.coustomerId +"<br/>"+this.coustomerName +"<br/>"+this.profession +"<br/>"+this.items);
  //   }
  // }
  // let customer1 = new customer(101, "Abdul Mozid","Business",['1','2']);
  // customer1.print();

  // class customer{
  //   constructor(customerId,customerName,profession,items){
  //     this.customerId = customerId;
  //     this.customerName = customerName;
  //     this.profession = profession;
  //     this.items = items;
  //   }
  //   show(){
  //     document.write( "This Is customer Id:" + customerId +"<br/>"+"customerName:" +customerName +"<br/>"+ "profession:" + profession +"<br/>"+"and i bound the items:" + items);
  //     }
  //   }
  

  // let customerId = parseInt(prompt("Enter Your Customer Id"));
  // let customerName = parseInt(prompt("Enter Your Customer Name"));
  // let  = parseInt(prompt("Enter Your Profession"));
  // let items = new Array(2);
  // for ( let i =0; i < items.length;i++){
  //   items [i] = prompt("Enter" + i + "items name");
  // }
  // let customer2 = new customer(customer,customerName,profession,items);
  // customer2.show()


  //Solution
// class Customer{
//     constructor(customerId, customerName, profession, items){
//         this.customerId = customerId;
//         this.customerName = customerName;
//         this.profession = profession;
//         this.items = items;
//     }

//     show(){
//         document.write("This is Customer Id: " + customerId +"<br>" + "Customer Name: " 
//         + customerName +"<br>" + "Profession: " + profession + "<br>" + "and I bought the items: " + items);
//     }

// }
// let customerId = parseInt(prompt("Enter your Customer Id"));
// let customerName = prompt("Enter your Customer Name");
// let profession = prompt("Enter your profession");
// let items =  new Array(2);
// for(let i = 0; i < items.length; i++){
//     items[i] = prompt("Enter" + i + " item's name");
// }
//  let customer1 = new Customer(customerId, customerName, profession, items);
//     customer1.show();



//Library functions of Math 
// Math.sqrt(17);
// Math.abs(-19);
// Math.sin(30);
// Math.pow(10, 4);
// Math.floor(2.678);
// Math.floor(2.3333);
// Math.ceil(3.67);
// Math.ceil(3.44);
// Math.round(4.778);
// Math.round(4.23);
// Math.max(3,5,7,10); // can be any number of parameters
// Math.random(); // generates number within 0-1.
// Math.random() * 8; // generates number < 8.
// Math.floor(Math.random() * 8); // generate random number wihin 0 to 8
// Math.floor(Math.random() * 8) + 1; // generate random number wihin 1 to 8(inclusive)


// //Date object and date methods
// var date = new Date();
// console.log("Date:  "+ date);

// var year =  date.getFullYear();
// console.log("Year: " + year);

// var month = date.getMonth();
// console.log("Month: " + month);

// var currentDate = date.getDate();
// console.log("Current Date: " + currentDate);

// var currentDay = date.getDay();
// console.log("Current Day: " + currentDay); // 0 - Sunday,....., 6 - Saturday

// var currentHour = date.getHours();
// console.log(currentHour);

// var currentMinutes = date.getMinutes();
// console.log("Current Minutes: " + currentMinutes);

// var mydate = new Date("2015-03-25");// user defined date

console.log(document.getElementById,"header1");
