$(document).ready(function() {
  var inputs = [""];
  var totalString;

  var operatorsBasic = ["+", "-", "/", "*"];

  var operatorsDot = ["."];

  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input) {
    if (
      operatorsDot.includes(inputs[inputs.length - 1]) === true &&
      input === "."
    ) {
      console.log("Error: Duplicate '.'");
    } else if (
      inputs.length === 1 &&
      operatorsBasic.includes(input) === false
    ) {
      inputs.push(input);
    } else if (operatorsBasic.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
    } else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }

  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }

  $("a").on("click", function() {
    if (this.id === "clearAll") {
      inputs = [""];
      update();
    } else if (this.id === "clearLast") {
      inputs.pop();
      update();
    } else if (this.id === "total") {
      getTotal();
    } else {
      if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }
  });
});
