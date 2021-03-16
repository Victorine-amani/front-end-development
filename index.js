function fruitCost(fruitName, quantity, cost) {
    var totalCost = cost * quantity;
    return quantity + " " + fruitName + " for KES " + totalCost;

}
console.log(fruitCost("Orange", 2, 30.00));