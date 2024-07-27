/* Functie maken waarbij als op de knop gedrukt wordt, eerst gekeken moet worden als de knop dan het GescholenBio in zich heeft of niet*/
function MeerBiografieTonen() {
    var volledigeBiografie = document.getElementById('Lange-Biografie');
    if (volledigeBiografie.classList.contains('GescholenBio')) {
        volledigeBiografie.classList.remove('GescholenBio');
    } else {
        volledigeBiografie.classList.add('GescholenBio');
    }
}

function verstuurContactFormulier() {
    var naam = document.getElementById('naam').value;
    var email = document.getElementById('email-adres').value;
    var bericht = document.getElementById('bericht').value;

    alert("Bedankt voor uw bericht, " + naam + "! Ik neem zo snel mogelijk contact met u op.");

    return false;
}

document.getElementById('contactForm').onsubmit = verstuurContactFormulier;