//Module Patterns
var counter = function(arr){ //OR replace var counter with module.exports.counter instead of first method
    return 'There are ' + arr.length + ' elements in this array';
}
var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
};

var pi = 3.142;

//Last way is this
module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
};
//module.export is an empty object
//When we add .counter it becomes a property of the object
//The counter property inside the object is now equal to the counter function 
//Using this pattern  we can call differnt properties
