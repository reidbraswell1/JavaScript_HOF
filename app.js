console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Constants
function constants() {
  const scriptConstants = {
    blackStyleColor: "black",
    blueStyleColor: "blue",
    break: "br",
    errorElementId: "error",
    exerciseOneElementId: "exercise-1",
    exerciseTwoElementId: "exercise-2",
    formElementId: "form",
    redStyleColor: "red"
  };
  return scriptConstants;
}

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
function controller(functionNumber, functionValue) {
  console.log("Begin controller()");
  console.log(`Parameters:\nfunctionNumber=${functionNumber}, functionValue=${functionValue}`);
  let anyNumber = functionNumber * 1;
  const plusAnyNumber = plus(anyNumber);
  let textNode = document.createTextNode(`plus${functionNumber}=>plus(${functionValue})=${plusAnyNumber(functionValue * 1)}`);
  let breakElement = document.createElement(constants().br);
  document.getElementById(constants().exerciseOneElementId).appendChild(textNode)
  document.getElementById(constants().exerciseOneElementId).appendChild(breakElement);
  console.log(plusAnyNumber(20));
  // Reset the form
  document.getElementById(constants().formElementId).reset();

}

function plus(num) {
  console.log(`Num=${num}`);
  return function (plusNum) {
    return num + plusNum;
  };
}


// Shorthand Notation
function plus2(num) {
  console.log(`Num=${num}`);
  return (plusNum) => num + plusNum;
}

/*
 * Form validation function.
 *
 */
function validateForm(functionNumber, functionValue) {
  console.log("Begin validateForm()");
  console.log(`Parameters:\nfunctionNumber=${functionNumber}, functionValue=${functionValue}`);
  return true;
}
