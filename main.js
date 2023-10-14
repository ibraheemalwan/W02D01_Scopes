/* START CODE UNDER THIS LINE */
console.log("14/10" + " practice for A13_Ibraheem");


console.log("        Pulse Check  ");

// 1- Create a Global variable myFavoriteFood and return its value in the function's local scope.

// make sure that the variable is in the Global scope

let myFavoriteFood = "maqloba";
const favoriteFood = function () {
    // TODO: Your code here
    return "the value of " + myFavoriteFood + "  variable";
};

favoriteFood(); // => the value of `myFavoriteFood` variable


// ==============================================================


//2- Create a function updateFavoriteFood that updates the value of myFavoriteFood

const updateFavoriteFood = function (newValue) {
    // TODO: Your code here
    myFavoriteFood = newValue;
    return newValue;
};
updateFavoriteFood("Pizza");
favoriteFood(); // => "Pizza"




// ==============================================================




//3-  Use the following closure function to create two separate counters

const createCounter_v01 = function () {
    let counter = 0;

    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
        return (counter += 1);
    };
};

const separate_1 = createCounter_v01();
separate_1();

const separate_2 = createCounter_v01();
separate_2();



// ==============================================================




//4- Modify createCounter_v01 to take a parameter that represents the starting point for the counter

// instead of counting from zero it will take count from the value provided

const createCounter_v02 = function (start) {
    let counter = start;

    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
        return (counter += 1);
    };
};
const separate_3 = createCounter_v02(2);
separate_3();
const separate_4 = createCounter_v02(10);
separate_4();


// ==============================================================



console.log("         Practice    ");



//1- Predict the value of the following variables and explain why.

let age = 25;
if (true) {
    age = 30;
}
age; // ? 30  new age value

const myName = "John";
if (true) {
    const myName = "Jane";
}
myName; // ? Joha  because const varialbe


// =======================================


//2-  Predict the value of the following function invocations.

let number = 10;
const func1 = function () {
    let number = 15;

    if (true) {
        let number = 24;
    }

    return number;
};

func1(); // ? 15 

const func2 = function (age) {
    age = 10;
    if (true) {
        let age = 24;
        age = 20;
    }

    return age;
};

func2(26); // ? 10


// =======================================



//3- Write a function countDown that returns a number representing a count down value. With each invocation the number should be lower by one and at zero it will no longer decrement and instead it will return "count down is over".

// Hint: create a new variable counter at the global scope to hold the value.

let globalNum = 15;

const countDown = function () {
    // TODO: Your code here

    let counterD = 0;

    if (globalNum -= 1) {
        return globalNum;

    } else {
        globalNum === counterD;
        return 'count down is over';
    }

};
// countDown();
// countDown(); // => 4
// countDown(); // => 3
// countDown(); // => 2
// countDown(); // => 1
// countDown(); // => 0
// countDown(); // => "count down is over"


// =======================================


// 4- Write a function countUp that should do the opposite of countDown. With every invocation the count value should be incremented by one.

// Hint: use the same counter variable from the previous question.

const countUp = function () {
  // TODO: Your code here


  if (globalNum += 1) {
      return globalNum;

  } else {
      return 'count up is over';
  }
};

countUp(); // => 4
countUp(); // => 5
countUp(); // => 6
countUp(); // => 7
countUp(); // => 8

// =======================================



//5- Write a function resetCount that accepts a number argument start and updates the count variable to equal the starting value and return a string implying that.

// Hint: use the same counter variable from the previous question.

const resetCount = function (start) {
  // TODO: Your code here
  globalNum = start ;
  return "the count has been reset "
};

resetCount(0); // => "the count has been reset"
countUp(); // => 1
resetCount(10); // => "the count has been reset"
countUp(); // => 11


// =======================================


//6- Write a function addToList that accepts a string argument toDo and returns the current list as a string. Every time we invoke the function it should return the old toDo item plus the new one.

// Hint: create a new variable allList at the global scope to hold the value.

let allList = "Eat";

const addToList = function (toDo) {
  // TODO: Your code here

let newList = allList.concat(" " , toDo);
return newList ;
};

addToList("Eat"); // => 'Eat'
// addToList("Play"); // => 'Eat Play'
// addToList("Sleep"); // => 'Eat Play Sleep'
// addToList("repeat"); // => 'Eat Play Sleep repeat'