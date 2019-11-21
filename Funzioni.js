//alert("hello javascript world!");   //alert per creare un popup
function miaFunzione(){     //Nelle funzioni le graffe vanno messe in questo modo
    const num1 = Number.parseInt(document.getElementById("num1").value);    //Number.parseInt() serve per convertire la string in int
    const num2 = Number.parseInt(document.querySelector("#num2").value);   //Le due scritture sono uguali ma questa sotto ha più funzioni
    //const intNum1 = Number.parseInt(num1); è uguale a quello sopra
    const sum = num1 + num2;
    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = '<p> Il risultato è : ' + sum;
}
//const x = document.querySelector("#num1").value;