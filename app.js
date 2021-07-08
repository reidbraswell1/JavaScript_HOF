console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
    return function(plusNum) {
        return num + plusNum;
    }
}

const plus15 = plus(15);
console.log(plus15(20));

