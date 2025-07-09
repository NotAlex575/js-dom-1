const accendi_bottone = document.getElementById('accendi-bottone')
const accendi_lampadina = document.getElementById('accendi-immagine')

accendi_bottone.addEventListener('click', function(){
    if(accendi_lampadina.classList.contains('accendi-lampadina')){
        accendi_lampadina.classList.add('spegni-lampadina');
        accendi_lampadina.classList.remove('accendi-lampadina');
    }
    else{
        accendi_lampadina.classList.add('accendi-lampadina');
        accendi_lampadina.classList.remove('spegni-lampadina');
    }
})