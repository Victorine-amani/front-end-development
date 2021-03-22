function fruitCost(fruitName, quantity, cost) {
    var totalCost = cost * quantity;
    return quantity + " " + fruitName + " for KES " + totalCost;

}
console.log(fruitCost("Oranges", 2, 30.00));

//difference between functions methods and objects
// objects..
var school = {
    students: 72,
    schoolName: "AkiraChix",
    location: "Gigiri",
    //methods
    info: function(unit1, unit2, unit3) {
        console.log(this.schoolName + " is a school that holds " + this.students + " students and is in " + this.location);
    }
}
console.log(school.students);
console.log(school.schoolName);
console.log(school.location);
school.info();

//functions
function add(a, b, c) {
    return a + b / c
}
console.log(add(12, 48, 6))