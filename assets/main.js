//Convertidor de bases

const decToBin=(numero)=>{
    
    let bin=""
    while(numero>=2){
        bin=bin+((numero%2).toString())
        numero=Math.floor(numero/2)
    }
    bin=bin+numero
    let split= bin.split('')
    let reverse= split.reverse()
    let binario=reverse.join('')
    console.log('Binario:'+ binario)
}

const decToOct=(numero)=>{
    let oct=""
    while(numero>=8){
        oct=oct+((numero%8).toString())
        numero=Math.floor(numero/8)
    }
    oct=oct+numero
    let split= oct.split('')
    let reverse= split.reverse()
    let octal=reverse.join('')
    console.log('Octal:'+ octal)
}
const decToHex=(numero)=>{
    let hex=""
    if(numero>=16){
        while(numero>=16){
        
            let aux=numero%16
            switch(aux){
                case aux=10:
                    hex=hex+'A'
                    break
                case aux=11:
                    hex=hex+'B'
                    break
                case aux=12:
                    hex=hex+'C'
                    break
                case aux=13:
                    hex=hex+'D'
                    break
                case aux=14:
                    hex=hex+'E'
                    break
                case aux=15:
                    hex=hex+'F'
                    break
                default:
                    hex=hex+((numero%16).toString())
            }
            
            
            numero=Math.floor(numero/16)
        }
        hex=hex+numero
    }
    else{
        switch(numero){
            case numero=10:
                hex=hex+'A'
                break
            case numero=11:
                hex=hex+'B'
                break
            case numero=12:
                hex=hex+'C'
                break
            case numero=13:
                hex=hex+'D'
                break
            case numero=14:
                hex=hex+'E'
                break
            case numero=15:
                hex=hex+'F'
                break
            default:
                hex=hex+((numero%16).toString())
        }
    }
    
    
    let split= hex.split('')
    let reverse= split.reverse()
    let hexadecimal=reverse.join('')
    console.log('Hexadecimal:'+ hexadecimal)
}
const validarNum=(num)=>{
    if(!isNaN(num)){
        return true
    }
    else{
        alert('Debe Ingresar un numero')
        let num=parseInt(prompt('Ingrese un numero'))
        validarNum(num)
    }
}


do{
    let num=parseInt(prompt('Ingrese un numero'))
    if(validarNum(num)==true){
        decToBin(num)
        decToOct(num)
        console.log('Decimal: '+num)
        decToHex(num)
        console.log('****************************')
    }
    
    
}while(confirm('Desea realizar la conversion de otro numero?') || validarNum(num)==true)