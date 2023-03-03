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
//var events = require('events');
//Events module returns a lot of things
//one of the things is an event emmitter 
//EE is used in node js to create custom events and
//react to those events when they are emmitted

//Prototype of Event Emitter
// element.on('click', function(){//Tutorial no8 mins 2:10
  
// })


//var myEmitter = new events.eventEmitter();

// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

//UTILITY MODULE
//Utility module allows us to inherit things from objects 
//built into node js
// var events = require('events');
// var util = require('util');

// var Person = function(name){//Object constructor
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);
// //The person function inherits the things from

// var Akanimoh = new Person('Akanimoh');
// var Milly = new Person('Milly');
// var Jenna = new Person('Jenna');

// var People = [Akanimoh,Milly,Jenna];

// People.forEach(function (person){
//     person.on('speak', function (mssg) {
//       console.log(person.name + ' said: ' + mssg);
//     });
// });

// Akanimoh.emit('speak', 'where is Milly?');
// Milly.emit('speak', 'I am behind you, silly!');

//Reading and Writing Files
// var fs = require('fs');//Module for reading and writing

// var readMe = fs.readFileSync('readme.txt','utf8');
// //Sychronous method of reading i.e The fs will read the file before it will run any code below
// fs.writeFileSync('writeme.txt', readMe);
// //Sychronous method of writiing

var fs = require('fs');

fs.readFile('readme.txt','utf8', function(err,data){
  // console.log(data);
  
 fs.writeFile('fresh.txt',data,function(err,data){});

  //The write is in the function so that the file is 
  //fully read first before it is written in the other file
});
//Because the above is asychnromous  we need a call back function to fire when the process is complete
//It doesnt stop the code below from runnimg

