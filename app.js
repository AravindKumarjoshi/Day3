//Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//console.log(foods);

//Function #2: Array Splice
var modifiedFood_1 = foods.splice(2, 0, 'noodles', 'icecream');
console.log(foods);

//Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var num = numberArray.filter(function isEven(array) {
    return array % 2 === 0;
});
console.log(num);

//Function #5: Lambda
var even = (numberArray) => {
    return numberArray % 2 === 0;
}
console.log(even);

//Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
var square = myArray.map(function findSquareOfNumbers(arr) {
    return arr * arr;
});
console.log(square);

//Function #7: Reduce
const MyArray = [2, 3, 5, 10];
var mul = MyArray.reduce(function multiply(inital, array) {
    return array * inital;
}, 1);
console.log(mul);