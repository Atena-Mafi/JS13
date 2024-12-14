/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:


function sequenceOfNumbers() {

let num1=Math.floor(Math.random()*16);
let num2=Math.floor(Math.random()*16);
let numbers=[num1,num2];

for(let i=2;i<10;i++){

let makeNum=(numbers[i-1]+numbers[i-2])*2;
numbers.push(makeNum);
}
return numbers

};
console.log(sequenceOfNumbers());
