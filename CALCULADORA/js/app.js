
function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado = 'La operacion no tiene numeros';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}


function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado = 'La operacion no tiene numeros';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function reset(){
    const form-control = document.getElementById('form-control');
    let operandoA = form-control['operandoA'];
    let operandoB = form-control['operandoB'];
    let  = parseInt(operandoA.value) && parseInt(operandoB.value);
    document.getElementById('form-control').innerHTML = `${reset}`;
    console.log(`${reset}`)

}
