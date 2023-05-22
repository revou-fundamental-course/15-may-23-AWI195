const notNumber = '<br><p style="font-size: small; color: red;">Please only input Numbers!</p>'
const ifEmpty = '<br><p style="font-size: small; color: red;">Please don\'t zero or empty</p>'
//Calculating square area
function hitungLuas(){
    var sisiLuas = document.getElementById("sisi-luas").value;
    if(Number(sisiLuas)){
        document.getElementById("output_luas").innerHTML = '<br><p class="output">L = S x S<br>L = '+sisiLuas+' x '+sisiLuas+'<br>L = '+sisiLuas**2+'</p>'//If the input is number then dispalay square area calculation
    }else if(sisiLuas == 0){
        document.getElementById("output_luas").innerHTML = ifEmpty//To alert if this value 0 or Empty
    }else{
        document.getElementById("output_luas").innerHTML = notNumber//If the input is not number then display this massage
    }
    document.getElementById("sisi-luas").value = ''//Clear the value of the input
}
//Reset calculation output
function resetLuas(){
    document.getElementById("output_luas").innerHTML = ''
    document.getElementById("sisi-luas").value = ''
}
//Calculating the perimeter of a square
function hitungKeliling(){
    var sisiKeliling = document.getElementById("sisi-keliling").value
    if(Number(sisiKeliling)){
        document.getElementById("output_keliling").innerHTML = '<br><p class="output">K = 4 x S<br>K = 4 x '+sisiKeliling+'<br>K = '+sisiKeliling*4+'</p>'//If the input is number then dispalay square circumference calculation
    }else if(sisiKeliling == 0){
        document.getElementById("output_keliling").innerHTML = ifEmpty//To alert if this value 0 or Empty
    }else{
        document.getElementById("output_keliling").innerHTML = notNumber//If the input is not number then display this massage
    }
    document.getElementById("sisi-keliling").value = ''//Clear the value of the input
}
//Reset calculation output
function resetKeliling(){
    document.getElementById("output_keliling").innerHTML = ''
    document.getElementById("sisi-keliling").value = ''
}
