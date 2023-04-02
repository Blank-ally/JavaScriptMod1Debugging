function buttonClick() {

    // I got the value of the text boxes and  converted the values from the text box into numbers
    let valueOne = Number(document.getElementById("value1").value);
    let valueTwo = Number(document.getElementById("value2").value);
// I assigned a variable named result the value of the result which is equal to the value of the expression valueOne + valueTwo
   const result = document.getElementById("result").value = valueOne + valueTwo;
}