//Data types(Arrays) ,Loops
function fruits() {
    let fruitList = ["Mango", "Orange", "Pineapple", "Apple", "Beetroot", "Avocado"];
    for (let i = 0; i <= fruitList.length; i++) {
        console.log(fruitList[i]);
    }
}
fruits();

//Nested functions
function parent(x) //parent function
{
    //child function
    function child(y) {
        //string methods
        var both = x.toUpperCase() + " is in uppercase while " + y.toLowerCase() + " is a lowercase"
        console.log(both);
    }
    child("javascript");

}
parent("javascript");


//objects and methods
let student = {
    name: "Victorine Amani",
    age: 20,
    school: "AkiraChix",
    //method
    classes: function() {
        var programmingClass = ["Python", "Kotlin", "Javascript"];
        programmingClass.push("IOT");
        console.log(programmingClass);
        var monday = programmingClass[2];
        console.log(monday);
    }

}
student.classes();


//function as a value and anonymous function
var asValue = (function() {
    //arithmetic and comparison operators
    var a = "10";
    var b = 10;
    var c = a === b;
    var d = a == b;
    console.log(c);
    console.log(d)
        //explicit coercion
    console.log(Number(a));
    //implicit coercion
    var e = a * b
    console.log(e);
})();

//closure and conditionals
function invite(age) //parent function
{
    function guests() //child function
    {
        // if esle condition
        if (age >= 18 && age <= 24) {
            console.log("Regular pass");
        } else if (age >= 25 && age <= 35) {
            console.log("VIP");
        } else if (age >= 36 && age <= 45) {
            console.log("VVIP");
        } else {
            console.log("Invite not allowed")
        }
    }
    return guests;
}
var call = invite(21); //remembering the parent function
console.log(call());