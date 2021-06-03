function sumar (a,b){return a+b}
function resta(a,b){return a-b}
function multiplicar (a,b){return a*b }
function dividir (a,b){
    if(b == 0 ){
        console.log('No se puede dividir por cero')
    }else {
        return a / b
    }
}

 exports.sumar= sumar
 exports.resta= resta
 exports.dividir=dividir
 exports.multiplicar=multiplicar
