console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Constants
function constants() {
  const scriptConstants = {
    blackStyleColor: "black",
    blueStyleColor: "blue",
    break: "br",
    span: "span",
    errorElementId: "error",
    exerciseOneElementId: "exercise-1",
    exerciseOne_B_ElementId: "exercise-1b",
    formElementId: "form",
    redStyleColor: "red"
  };
  return scriptConstants;
}

/*
 * Controlling function that calls other
 * functions:
 *
 * 1. Call the plusAnyNumber and plusAnyNumber2 function
 * 2. Output resuts to the screen and console.log
 * 4. Reset the form
 *
 */
function controller(functionNumber, functionValue) {
  console.log("Begin controller()");
  console.log(`Parameters:\nfunctionNumber=${functionNumber}, functionValue=${functionValue}`);
  // Coerce to a number
  let anyNumber = functionNumber * 1;
  let plusAnyNumber = plus(anyNumber);
  let plusAnyNumber2 = plus2(anyNumber);

  let textNode1 = document.createTextNode(`plus${functionNumber}=>plus(${functionValue})=${plusAnyNumber(functionValue * 1)}`);
  let textNode2 = document.createTextNode(`plus${functionNumber}=>plus2(${functionValue})=${plusAnyNumber2(functionValue * 1)}`);
  let breakElement = document.createElement(constants().break);
  let spanElement = document.createElement(constants().span);

  // Output to screen
  document.getElementById(constants().exerciseOneElementId).appendChild(textNode1);
  document.getElementById(constants().exerciseOneElementId).appendChild(spanElement);
  document.getElementById(constants().exerciseOne_B_ElementId).appendChild(textNode2);
  document.getElementById(constants().exerciseOne_B_ElementId).appendChild(breakElement);
  
  console.log("EXERCISE 1: OUTPUT");
  console.log(`plus${functionNumber}=>plus(${functionValue})=${plusAnyNumber(functionValue * 1)}`);
  console.log(`plus${functionNumber}=>plus2(${functionValue})=${plusAnyNumber2(functionValue * 1)}`);

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
function plus2 (num) {
  console.log(`Num=${num}`);
  return (plusNum) => num + plusNum;
}

/*
 * Form validation function.
 * No special validation for this exercise
 * HTML validation is being used.
 *
 */
function validateForm(functionNumber, functionValue) {
  console.log("Begin validateForm()");
  console.log(`Parameters:\nfunctionNumber=${functionNumber}, functionValue=${functionValue}`);
  return true;
}
