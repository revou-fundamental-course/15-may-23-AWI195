//Calculating square area
function hitungLuas(){
    var sisiLuas = document.getElementById("sisi-luas").value;
    if(Number(sisiLuas)){
        document.getElementById("output_luas").innerHTML = '<br>L = S x S<br>L = '+sisiLuas+' x '+sisiLuas+'<br>L = '+sisiLuas**2;//If the input is number then dispalay square area calculation
    } else {
        document.getElementById("output_luas").innerHTML = "This is not number";//If the input is not number then display this massage
    }
    document.getElementById("sisi-luas").value = "";//Clear the value of the input
}
//Reset calculation output
function resetLuas(){
    document.getElementById("output_luas").innerHTML = "";
    document.getElementById("sisi-luas").value = "";
}
//Calculating the perimeter of a square
function hitungKeliling(){
    var sisiLuas = document.getElementById("sisi-keliling").value;
    if(Number(sisiLuas)){
        document.getElementById("output_keliling").innerHTML = '<br>K = 4 x S<br>K = 4 x '+sisiLuas+'<br>K = '+sisiLuas*4;//If the input is number then dispalay square circumference calculation
    } else {
        document.getElementById("output_keliling").innerHTML = "This is not number";//If the input is not number then display this massage
    }
    document.getElementById("sisi-keliling").value = "";//Clear the value of the input
}
//Reset calculation output
function resetKeliling(){
    document.getElementById("output_keliling").innerHTML = "";
    document.getElementById("sisi-keliling").value = "";
}
