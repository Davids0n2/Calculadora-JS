function Play(data) {
    const display = document.getElementById('display');
    display.value += data;
    retardo();
}


function Clear() {
    document.getElementById('display').value = '';
}

function voltar() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1); 
}

function calcular() {
    const display = document.querySelector('#display')

        try {
            display.value = eval(display.value)
        } catch (error) {
            display.value = ''
        } 
}

function retardo() {
    const display = document.querySelector('#display');
    if (display.value.trim() === '00243') {
        window.alert("Código secreto ativado!");
    }
}