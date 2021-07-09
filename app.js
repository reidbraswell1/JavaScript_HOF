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

/*
 * Controlling function that calls other
 * functions:
 *
 * 1. arraySum()
 * 2. bookProcessing()
 * 3. Updates console.log and screen
 * 4. Reset the form
 *
 */
function controller(arrayP, bookTitleP, numberOfPagesP, numberTimesReadP) {
  console.log("Begin controller()");
  console.log(
    `Parameters = Array:"${arrayP}", BookTitle:"${bookTitleP}", NumberOfPages:"${numberOfPagesP}", NumberTimesRead:"${numberTimesReadP}"`
  );

 
  }

/*
 * Form validation function.
 *
 */
function validateForm() {
    console.log("Begin validateForm()");
    return true;
  }
  

