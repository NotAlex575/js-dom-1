const accendi_bottone = document.getElementById('accendi-bottone')
const accendi_lampadina = document.getElementById('accendi-immagine')
const testo_bianco = document.getElementById('light-text')

accendi_bottone.addEventListener('click', function(){
    if(accendi_lampadina.classList.contains('accendi-lampadina')){
        //accendi la lampadina
        accendi_lampadina.classList.add('spegni-lampadina');
        accendi_lampadina.classList.remove('accendi-lampadina');
        //cambio il color del testo da bianco a nero
        testo_bianco.classList.add('color-black');
        testo_bianco.classList.remove('color-white');
    }
    else{
        //spegni la lampadina
        accendi_lampadina.classList.add('accendi-lampadina');
        accendi_lampadina.classList.remove('spegni-lampadina');
        //cambio il color del testo da nero a bianco
        testo_bianco.classList.add('color-white');
        testo_bianco.classList.remove('color-black');
    }
})