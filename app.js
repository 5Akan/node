//GLOBAL OBJECTS
// let time = 0;

// var timer = setInterval(function(){
//     time+=2;
//     console.log(time + ' Seconds have passed');
//     if (time>5) {
//         clearInterval(timer);
//     }
// },2000);
 
// console.log(__dirname);
// console.log(__filename);
// require, exports are other global objects
 

  //FUNCTION EXPRESSIONS(Modules)

  // var sayBye = function (params) {//function expression
  //     console.log('bye');
  // }

  // sayBye();

  //Call a function with another function
  // function callFunction(fun) {
  //     fun();
  // }
  // var sayHello = function (params) {
  //     console.log('hello');
  // }

  // callFunction(sayHello);

//MODULES AND REQUIRE()

var counter = require('./count');//The variable 'counter is a reference to the counter funtion in count.js'

console.log(counter(['Akanimoh','Jenna Ortega']));
