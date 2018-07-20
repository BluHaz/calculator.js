// Variables
var test = $("#output")
var inputField = $("#display");

var btn1 = $("#button1");
var btn2 = $("#button2");
var btn3 = $("#button3");
var addBtn = $("#addButton");

var btn4 = $("#button4");
var btn5 = $("#button5");
var btn6 = $("#button6");
var subtractBtn = $("#subtractButton");

var btn7 = $("#button7");
var btn8 = $("#button8");
var btn9 = $("#button9");
var multiplyBtn = $("#multiplyButton");

var clr = $("#clearButton");
var btn0 = $("#button0");
var equalsBtn = $("#equalsButton");
var divideBtn = $("#divideButton");

//Control
var storedValue = '';
var storedOperation = '';
var reset = false;
var continueOperation = false;
var equalsAgain = false;
var multipleOperator = false;


//Numbers
btn1.click(function () {
  resetHandler();
  insertNum(1);

})

btn2.click(function () {
  resetHandler();
  insertNum(2);
})

btn3.click(function () {
  resetHandler();
  insertNum(3);
})

btn4.click(function () {
  resetHandler();
  insertNum(4);
})

btn5.click(function () {
  resetHandler();
  insertNum(5);
})

btn6.click(function () {
  resetHandler();
  insertNum(6);
})

btn7.click(function () {
  resetHandler();
  insertNum(7);
})

btn8.click(function () {
  resetHandler();
  insertNum(8);
})

btn9.click(function () {
  resetHandler();
  insertNum(9);
})

btn0.click(function () {
  resetHandler();
  insertNum(0);
})

//Operators
clr.click(function () {
  storedValue = '';
  inputField.val('');
})

addBtn.click(function () {
  operatorHandler('+');
  inputField.val(eval(storedValue.slice(0, -1)));
})

subtractBtn.click(function () {
  operatorHandler('-');
  inputField.val(eval(storedValue.slice(0, -1)));
})

multiplyBtn.click(function () {
  operatorHandler('*');
  inputField.val(eval(storedValue.slice(0, -1)));
})

divideBtn.click(function () {
  operatorHandler('/');
  inputField.val(eval(storedValue.slice(0, -1)));
})

equalsBtn.click(function () {
  if(!equalsAgain){
    inputField.val(eval(storedValue))
    storedOperation  = storedValue.slice(-2);
    storedValue = ''
    storedValue += inputField.val()
    reset = true;
    continueOperation = true;
    equalsAgain = true;
  }
  else{
    storedValue += storedOperation 
    inputField.val(eval(storedValue))
  }
})

function insertNum(num) {
  storedValue += num
  inputField.val(function (i, val) {
    return Number(val + num);
  })
}

//Callbacks
function resetHandler() {
  multipleOperator = false
  equalsAgain = false;
  if (reset) {
    inputField.val('');
    reset = false
  }
  if (continueOperation) {
    storedValue = '';
    continueOperation = false;
  }
  return reset, continueOperation;
}

function operatorHandler(operator) {
  if (multipleOperator) {
    storedValue = storedValue.slice(0, -1)
  }
  equalsAgain = false;
  storedValue += operator;
  reset = true;
  continueOperation = false;
  multipleOperator = true
  return reset, continueOperation, multipleOperator;
}
