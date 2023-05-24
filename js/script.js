const notNumber = '<br><p style="font-size: small; color: red;">Please only input Numbers!</p>'
const ifEmpty = '<br><p style="font-size: small; color: red;">Please don\'t zero or empty</p>'

function page(pages){
    var bpersegi = document.querySelector(".button-persegi")
    var bpPanjang = document.querySelector(".button-pPanjang")
    var pagePersegi = document.querySelector(".page-persegi")
    var pagePPanjang = document.querySelector(".page-persegiPanjang")
    switch(pages){
        case 'persegi':
            pagePersegi.style.display = 'block'
            pagePPanjang.style.display = 'none'
            bpersegi.style.color = 'lightgrey'
            bpersegi.style.background = '#090'
            bpPanjang.style.color = '#090'
            bpPanjang.style.background = 'lightgray'
            break;
        case 'pPanjang':
            pagePPanjang.style.display = 'block';
            pagePersegi.style.display = 'none';
            bpersegi.style.color = 'green'
            bpersegi.style.background = 'lightgray'
            bpPanjang.style.color = 'lightgray'
            bpPanjang.style.background = 'green'
            break;
    }
}
//Fucntion Persegi
function persegi(runn){
    var sisiL = document.getElementById("sisi-luas")
    var sisiLuas = sisiL.value
    var outputLuas = document.getElementById("output_luas")
    var sisiK = document.getElementById("sisi-keliling")
    var sisiKeliling = sisiK.value
    var outputKeliling = document.getElementById("output_keliling")
    //Calculating square area
    switch(runn){
        case 'HL':
            hitungLuas();
            break;
        case 'HK':
            hitungKeliling();            break;
        case 'RL':
            resetLuas();
            break;
        case 'RK':
            resetKeliling();
            break;
    }
    function hitungLuas(){
        if(Number(sisiLuas)){
            outputLuas.innerHTML = '<br><p class="output">L = S x S<br>L = '+sisiLuas+' x '+sisiLuas+'<br>L = '+sisiLuas**2+'</p>'//If the input is number then dispalay square area calculation
        }else if(sisiLuas == 0){
            outputLuas.innerHTML = ifEmpty//To alert if this value 0 or Empty
        }else{
            outputLuas.innerHTML = notNumber//If the input is not number then display this massage
        }
        sisiL.value = ''//Clear the value of the input
    }
    //Reset calculation output
    function resetLuas(){
        outputLuas.innerHTML = ''
        sisiL.value = ''
    }
    //Calculating the perimeter of a square
    function hitungKeliling(){
        if(Number(sisiKeliling)){
            outputKeliling.innerHTML = '<br><p class="output">K = 4 x S<br>K = 4 x '+sisiKeliling+'<br>K = '+sisiKeliling*4+'</p>'//If the input is number then dispalay square circumference calculation
        }else if(sisiKeliling == 0){
            outputKeliling.innerHTML = ifEmpty//To alert if this value 0 or Empty
        }else{
            outputKeliling.innerHTML = notNumber//If the input is not number then display this massage
        }
        sisiK.value = ''//Clear the value of the input
    }
    //Reset calculation output
    function resetKeliling(){
        outputKeliling.innerHTML = ''
        sisiK.value = ''
    }
}

//Fucntion Rectangle
function pPanjang(runn){
    var panjangL = document.getElementById("panjang-luas")
    var panjangLuas = panjangL.value
    var lebarL = document.getElementById("lebar-luas")
    var lebarLuas = lebarL.value
    var outputLuas = document.getElementById("output_luas_panjang")
    var panjangK = document.getElementById("panjang-keliling")
    var panjangKeliling = panjangK.value
    var lebarK = document.getElementById("lebar-keliling")
    var lebarKeliling = lebarK.value
    var outputKeliling = document.getElementById("output_keliling_panjang")
    switch(runn){
        case 'HL':
            hitungLuas();
            break;
        case 'HK':
            hitungKeliling();            break;
        case 'RL':
            resetLuas();
            break;
        case 'RK':
            resetKeliling();
            break;
    }
    //Calculating rectangle area
    function hitungLuas(){
        if(Number(panjangLuas) && Number(lebarLuas)){
            outputLuas.innerHTML = '<br><p class="output">L = p x l<br>L = '+panjangLuas+' x '+lebarLuas+'<br>L = '+panjangLuas*lebarLuas+'</p>'//If the input is number then dispalay square area calculation
        }else if(panjangLuas == 0 || lebarLuas == 0){
            outputLuas.innerHTML = ifEmpty//To alert if this value 0 or Empty
        }else{
            outputLuas.innerHTML = notNumber//If the input is not number then display this massage
        }
        panjangL.value = ''
        lebarL.value = ''//Clear the value of the input
    }
    //Reset calculation output
    function resetLuas(){
        outputLuas.innerHTML = ''
        panjangL.value = ''
        lebarL.value = ''
    }
    //Calculating the perimeter of a rectangle
    function hitungKeliling(){
        if(Number(panjangKeliling) && Number(lebarKeliling)){
            outputKeliling.innerHTML = '<br><p class="output">L = 2p + 2l<br>L = 2.'+panjangKeliling+' x 2.'+lebarKeliling+'<br>L = '+2*panjangKeliling+' x '+2*lebarKeliling+'<br>L = '+Number(2*panjangKeliling+2*lebarKeliling)+'</p>'//If the input is number then dispalay square area calculation
        }else if(panjangKeliling == 0 || lebarKeliling == 0){
            outputKeliling.innerHTML = ifEmpty//To alert if this value 0 or Empty
        }else{
            outputKeliling.innerHTML = notNumber//If the input is not number then display this massage
        }
        panjangK.value = ''
        lebarK.value = ''//Clear the value of the input
    }
    //Reset calculation output
    function resetKeliling(){
        outputKeliling.innerHTML = ''
        panjangK.value = ''
        lebarK.value = ''
    }
}
