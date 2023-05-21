function hitungLuas(){
    var sisiLuas = document.getElementById("sisi-luas").value;
    if(Number(sisiLuas)){
        document.getElementById("output_luas").innerHTML = '<br>L = S x S<br>L = '+sisiLuas+' x '+sisiLuas+'<br>L = '+sisiLuas**2;
    } else {
        document.getElementById("output_luas").innerHTML = "This is not number";
    }
    document.getElementById("sisi-luas").value = "";
}
function resetLuas(){
    document.getElementById("output_luas").innerHTML = "";
    document.getElementById("sisi-luas").value = "";
}
//Keliling
function hitungKeliling(){
    var sisiLuas = document.getElementById("sisi-keliling").value;
    if(Number(sisiLuas)){
        document.getElementById("output_keliling").innerHTML = '<br>K = 4 x S<br>K = 4 x '+sisiLuas+'<br>K = '+sisiLuas*4;
    } else {
        document.getElementById("output_keliling").innerHTML = "This is not number";
    }
    document.getElementById("sisi-keliling").value = "";
}
function resetKeliling(){
    document.getElementById("output_keliling").innerHTML = "";
    document.getElementById("sisi-keliling").value = "";
}