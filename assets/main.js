//Convertidor de bases
let historial = []
class numero {

    constructor(num) {
        this.value = num

    }

    //Metodos
    decToBin() {
        let bin = ""
        let auxi = this.value
        while (auxi >= 2) {
            bin = bin + ((auxi % 2).toString())
            auxi = Math.floor(auxi / 2)
        }
        bin = bin + auxi
        let split = bin.split('')
        let reverse = split.reverse()
        let binario = reverse.join('')
        document.getElementById('Binario').value = binario;
        historial.push(binario)
    }
    decToOct() {
        let oct = ""
        let auxi = this.value
        while (auxi >= 8) {
            oct = oct + ((auxi % 8).toString())
            auxi = Math.floor(auxi / 8)
        }
        oct = oct + auxi
        let split = oct.split('')
        let reverse = split.reverse()
        let octal = reverse.join('')
        document.getElementById('octal').value = octal;
        historial.push(octal)
        historial.push(this.value)
    }
    decToHex() {
        let hex = ""
        let auxi = this.value
        if (auxi >= 16) {
            while (auxi >= 16) {

                let aux = auxi % 16
                switch (aux) {
                    case aux = 10:
                        hex = hex + 'A'
                        break
                    case aux = 11:
                        hex = hex + 'B'
                        break
                    case aux = 12:
                        hex = hex + 'C'
                        break
                    case aux = 13:
                        hex = hex + 'D'
                        break
                    case aux = 14:
                        hex = hex + 'E'
                        break
                    case aux = 15:
                        hex = hex + 'F'
                        break
                    default:
                        hex = hex + ((auxi % 16).toString())
                }


                auxi = Math.floor(auxi / 16)
            }
            hex = hex + auxi
            let split = hex.split('')
            let reverse = split.reverse()
            let hexadecimal = reverse.join('')
            document.getElementById('hexa').value = hexadecimal;
            historial.push(hexadecimal)
        }
        else {
            if (auxi >= 10 && auxi <= 15) {
                switch (auxi) {
                    case auxi = 10:
                        hex = hex + 'A'
                        break
                    case auxi = 11:
                        hex = hex + 'B'
                        break
                    case auxi = 12:
                        hex = hex + 'C'
                        break
                    case auxi = 13:
                        hex = hex + 'D'
                        break
                    case auxi = 14:
                        hex = hex + 'E'
                        break
                    case auxi = 15:
                        hex = hex + 'F'
                        break
                    default:
                        hex = hex + ((auxi % 16).toString())

                }
                let split = hex.split('')
                let reverse = split.reverse()
                let hexadecimal = reverse.join('')
                document.getElementById('hexa').value = hexadecimal;
                historial.push(hexadecimal)
            }
            else {
                hex = auxi
                document.getElementById('hexa').value = hex;
                historial.push(hex)
            }

        }



    }
}

let i = 0
let j = 0
let aux = 0
const btnConvertir = document.getElementById('btnConvertir')
btnConvertir.addEventListener('click', e => {
    let num = document.getElementById('num').value

    let num1 = new numero(parseInt(num))
    console.log(num1.value)
    if (num1.value == "") {
        alert("Debe ingresar un numero")
    } else {
        num1.decToBin()
        num1.decToOct()
        num1.decToHex()
        document.getElementById('dec').value = num

        let table = document.getElementById('tablaHistorial')
        let row = table.insertRow()


        while (i < j + 4) {
            let cell = row.insertCell()
            let newText = document.createTextNode(historial[aux].toString());
            cell.appendChild(newText);
            aux = aux + 1
            i = i + 1

        }
        j = i
        console.log(historial)
    }

});