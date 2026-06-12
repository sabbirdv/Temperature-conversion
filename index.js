let textBox = document.getElementById("textBox");
let Fahrenheit = document.getElementById("toFahrenheit");
let Celsius = document.getElementById("toCelsius");
let resultBox = document.getElementById("resultBox");
let temp;



function convert(){

    if(textBox.value === "") {
        resultBox.textContent= "type a value"
    }
    else{

        temp = Number(textBox.value);

        if(Fahrenheit.checked){
            temp = temp * 9 / 5 + 32;
            resultBox.textContent = temp.toFixed(2) + "°F" ;

        }
        else if(Celsius.checked){
            temp = (temp - 32) * (5 / 9);
            resultBox.textContent = temp.toFixed(2) + "°C" ;
        }
        else{
            resultBox.textContent= "select a unit type"
        }
    }
    
    
}