const accendi_bottone = document.getElementById('accendi-bottone');
const accendi_lampadina = document.getElementById('accendi-immagine');
const testo_bianco_titolo = document.getElementById('light-text-title');
const testo_bianco_sottotitolo = document.getElementById('light-text-subtitle');
const schermo_bianco = document.getElementById('bg-black');
const testo_accendi_spegni = document.getElementById('accendi-spegni-testo')

accendi_bottone.addEventListener('click', function(){
    if(accendi_lampadina.classList.contains('accendi-lampadina')){
        //accendi la lampadina
        accendi_lampadina.classList.add('spegni-lampadina');
        accendi_lampadina.classList.remove('accendi-lampadina');
        //cambio il color del testo del titolo e sottotitolo da bianco a nero
        testo_bianco_titolo.classList.add('color-black');
        testo_bianco_titolo.classList.remove('color-white');
        testo_bianco_sottotitolo.classList.add('color-black');
        testo_bianco_sottotitolo.classList.remove('color-white');
        //cambio il background del sito da nero a bianco
        schermo_bianco.classList.add('background-white');
        schermo_bianco.classList.remove('background-black');
        //modifico il testo nel bottone da accendi a spegni
        testo_accendi_spegni.innerHTML = "Spegni";
    }
    else{
        //spegni la lampadina
        accendi_lampadina.classList.add('accendi-lampadina');
        accendi_lampadina.classList.remove('spegni-lampadina');
        //cambio il color del testo del titolo e sottotitolo da nero a bianco
        testo_bianco_titolo.classList.add('color-white');
        testo_bianco_titolo.classList.remove('color-black');
        testo_bianco_sottotitolo.classList.add('color-white');
        testo_bianco_sottotitolo.classList.remove('color-black');
        //cambio il background del sito da nero a bianco
        schermo_bianco.classList.add('background-black');
        schermo_bianco.classList.remove('background-white');
        //modifico il testo nel bottone da spegni a accendi
        testo_accendi_spegni.innerHTML = "Accendi"
    }
})