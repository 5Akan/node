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

// var counter = require('./count');//The variable 'counter is a reference to the counter funtion in count.js'

// console.log(counter(['Akanimoh','Jenna Ortega']));

//Module Patterns
// var stuff = require('./stuff');

// console.log(stuff.counter(['Akanimoh','Jenna Ortega']));
// console.log(stuff.adder(4,5));
// console.log(stuff.adder(stuff.pi,4));

//Event Module
//Event Module is one of the core modules built into node js
var events = require('events');
//Events module returns a lot of things
//one of the things is an event emmitter 
//EE is used in node js to create custom events and
//react to those events when they are emmitted

//Prototype of Event Emitter
// element.on('click', function(){//Tutorial no8 mins 2:10
  
// })


var myEmitter = new events.eventEmitter();

// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

//UTILITY MODULE
//Utility module allows us to inherit things from objects 
//built into node js
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.eventEmitter);
//The person function inherits the things from