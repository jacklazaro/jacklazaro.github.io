function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function valueToDisplay(value) {
    document.getElementById('display').value += value;
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
