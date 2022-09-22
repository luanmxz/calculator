var num = []
var num2 = []
var actres = document.getElementById('actres')
var posres = document.getElementById('posres')
var operand = ''

function calculate(){
    if (num.length == 0){
        alert('Nenhum número inserido!')
    } else if (num2.length == 0){
        alert('Por favor, preencha todos os campos!')
    } else {
        var convCopyNum = Number(copynum)
        var convCopyNum2 = Number(copynum2)
        var resultado;
        switch (operand){
            case '+':
                resultado = convCopyNum + convCopyNum2
                break;
            case '-':
                resultado = convCopyNum - convCopyNum2
                break;
            case '*':
                resultado = convCopyNum * convCopyNum2
                break;
            case '÷':
                resultado = convCopyNum / convCopyNum2
                break;
        }
        num = []
        posres.innerText =  actres.innerText
        actres.innerText = resultado
        resultado = resultado.toString()
        for (let c = 0; c < resultado.length; c++){
            if (resultado[c] == '.'){
                num.push(resultado[c])
            } else {
            num.push(Number(resultado[c]))
            }
        }
        num2 = []
        operand = ''
    }
}
function addoperand(o){ 
    if (num.length != 0 && num2.length == 0){
        operand = o
        actres.innerText += operand
    }
}

function allclear(){
    if (posres.innerText.length != 0 && actres.innerText.length == 0 ){
        posres.innerText = ''
    }
    num = []
    num2 = []
    operand = ''
    copynum = ''
    copynum2 = ''
    convCopyNum = ''
    convCopyNum2 = ''
    actres.innerHTML = ''
}

function deletenum(){
    let cont = 0
    for (let c = 0; c < actres.innerText.length; c++){
        if (actres.innerText[c] == operand){
            cont += 1
        } 
    }
    actres.innerText = actres.innerText.slice(0, -1)
    if (posres.innerText.length != 0 && num.length == 0 ){
        posres.innerHTML = ''
    }
    if (num2.length > 0){
        num2.pop()
        copynum2 = num2.join("")
    } else if (cont >= 1){
        operand = ''
    } else if (num2.length == 0 && cont == 0) {
        num.pop()
        copynum = num.join("")
    }
}

function addnumber(n){
    if (operand.length == 0){
        num.push(n)
    } else{
        num2.push(n)
    }
    copynum = num.join("")
    copynum2 = num2.join("")
    if (operand.length == 0)
        actres.innerText += n
    else {
        actres.innerText += n
    }
}

//task para revisão:
//organizar melhor o código e tentar reduzir a quantidade de linhas sem alterar a funcionalidade do código.