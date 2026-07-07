function appendNumber(number) {
    document.getElementById("display").value += number;
}
function appendOperator(operator) {
    document.getElementById("display").value += operator;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult() {
    document.getElementById("display").value = eval(display.value);

}