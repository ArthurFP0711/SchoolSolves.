

function CalcEq(){
    const a = Number(document.getElementById('coef-a').value)
    const b = Number(document.getElementById('coef-b').value)
    const c = Number(document.getElementById('coef-c').value)
    
    delta = (b*b) - (4*a*c)
    console.log(b*b)
    raizdelta = Math.sqrt(delta)
    raizmais = Number((-b + raizdelta) / (2*a))
    raizmenos = Number((-b - raizdelta) / (2*a))

    if(a != 0 && b != 0 && c != 0 ){

    document.getElementById('delt').innerHTML = 'delta = ' + delta
    document.getElementById("x'").innerHTML = "x' = " + raizmais
    document.getElementById("x''").innerHTML = "x'' = " + raizmenos
    }else{
        alert('inválido, preencha os campos')
    }
}

function CalcFr(){
    const força = Number(document.getElementById('força').value)
    const massa = Number(document.getElementById('massa').value)
    const aceleração = Number(document.getElementById('aceleration').value)
    const FrRes = document.getElementById('Fr-res')

    let Fr = massa * aceleração
    let findmass = força / aceleração
    let findAceleration = força / massa
    
    if(força == '' && massa != '' && aceleração != '' ){
        FrRes.innerHTML = `força resultante = ${Fr}N`
    } else if(massa == ''  && aceleração != ''  && força!= ''){
        FrRes.innerHTML = `Massa = ${findmass}Kg`
    }else if(aceleração == '' && massa != '' && força!= '' ){
        FrRes.innerHTML = `Aceleração = ${findAceleration}m/s² `
    } else if(aceleração != '' && massa != '' && força!= '' ){
        alert('Deixe em branco a unidade medida que deseja encontrar')
    }else{
        alert('digite os valores')
    }

}