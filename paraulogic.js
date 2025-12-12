const palabrascandidatas = ['RADIO', 'BARBA', 'GAFAS', 'DADOS', 'ZAGAL']
let secreta = ''

function valorsInicials(){
    document.getElementById('pista').value=""+ "valor"
    document.getElementById('pista').disabled=true
}

calcularSecreta();

function calcularSecreta() {
    numAleatori = Math.floor(Math.random() * palabrascandidatas.length);
    secreta = palabrascandidatas[numAleatori]
}

/*
Inicialitzam valors
 */
//document.getElementById('pista').value='La paraula d\'avui és de :'+secreta.length + ' lletres.'

let intentos = 5
let contador = 0
let resuelto= false
let letrabien = ""

function analitzarParaula () {


    let color = " "
    let paraula = document.getElementById('resposta').value.toUpperCase();
    let palabrabien = ''
    for (let i = 0; i < paraula.length; i++) {
        if (paraula.charAt(i) === " ") {
            palabrabien += ''
        } else {
            palabrabien += paraula.charAt(i).toUpperCase()
        }
    }


        let respostaHTML = ""

        respostaHTML += '<div class="resposta">';

        if (paraula.length === 5) {

            if (palabrabien === secreta) {
                resuelto = true
                for (let i = 0; i < secreta.length; i++) {
                    color += '<div class="slot green">' + palabrabien.charAt(i) + '</div>';
                }
                alert("¡Lo has conseguido!")

            } else {

                for (let i = 0; i < secreta.length; i++) {

                    if (secreta.includes(palabrabien.charAt(i))) {
                        console.log(palabrabien.charAt(i));
                        if (palabrabien.charAt(i) === secreta.charAt(i)) {
                            color += '<div class="slot green">' + palabrabien.charAt(i) + '</div>';

                        } else {
                            color += '<div class="slot yellow">' + palabrabien.charAt(i) + '</div>'

                        }
                    } else {

                        console.log(palabrabien.charAt(i));
                        console.log(secreta);

                        color += '<div class="slot">' + palabrabien.charAt(i) + '</div>'

                    }

                }
            }
        } else {
            if (palabrabien.length > 5) {
            alert("La paraula té més de 5 lletres")
            intentos++
            contador--
            respostaHTML = ""
            }

            if(palabrabien.length < 5) {
                alert("La paraula té menys de 5 lletres")
                intentos++
                contador--
                respostaHTML = ""
            }
        }
        respostaHTML += color;
        respostaHTML += '</div>';
        console.log(respostaHTML);
        intentos--
        contador++
        if (contador === 5) {
            alert("Màxim d'intents");
            document.getElementById('boton').disabled = true;
            resuelto = true
            document.getElementById('pista2').innerText = "La palabra es " + secreta
        }

        document.getElementById('pista').innerText = 'La paraula té ' + secreta.length + ' lletres' + "\n" + intentos + " intents màxim"
        document.getElementById('respostes').innerHTML += respostaHTML;
}

function reiniciar(){
    respostaHTML = ""
    document.getElementById('respostes').innerHTML = respostaHTML;
    calcularSecreta();
    intentos = 5
    contador = 0
    document.getElementById('boton').disabled = false;
    resuelto = false
    document.getElementById('pista2').innerText = "¿Cual será la palabra?"
    document.getElementById('rendirse').innerText = "";
    document.getElementById('pista').innerText = 'La paraula té ' + secreta.length + ' lletres' + "\n" + intentos + " intents màxim"
}



addEventListener("keydown", function (event) {
    if (event.key === "Enter" && resuelto === false) {
        analitzarParaula();
    }
});

function mostrarsecreta(){
    document.getElementById('rendirse').innerText = secreta;
    document.getElementById('boton').disabled = true;
    resuelto = true
}


//TODO que funcione el enter
