// Opprett en tom liste for å lagre deltakerinformasjon
var deltakere = [];

// Funksjon for å validere passord
function validerPassord(passord) {
    // Legg til egne passordvalideringsregler her etter behov
    return passord.length >= 8; // Minimum 8 tegn
}

document.addEventListener('DOMContentLoaded', function () {
    var registreringsskjema = document.getElementById('registreringsskjema');
    var oppsummering = document.getElementById('oppsummering');

    registreringsskjema.addEventListener('submit', function (e) {
        e.preventDefault(); // Forhindrer standard skjema-innsending

        // Hent skjemafeltverdiene
        var fornavn = document.getElementById('fornavn').value;
        var etternavn = document.getElementById('etternavn').value;
        var adresse = document.getElementById('adresse').value;
        var postnummer = document.getElementById('postnummer').value;
        var poststed = document.getElementById('poststed').value;
        var telefon = document.getElementById('telefon').value;
        var passord = document.getElementById('passord').value;

        // Valider passord
        if (!validerPassord(passord)) {
            alert('Passordet oppfyller ikke minimumskravene (minimum 8 tegn).');
            return;
        }

        // Opprett et objekt for deltakeren
        var deltaker = {
            fornavn: fornavn,
            etternavn: etternavn,
            adresse: adresse,
            postnummer: postnummer,
            poststed: poststed,
            telefon: telefon,
            passord: passord
        };

        // Legg til deltakeren i listen
        deltakere.push(deltaker);

        // Oppdater oppsummeringen
        oppdaterOppsummering();

        // Tøm skjemaet for neste registrering
        registreringsskjema.reset();
    });

    function oppdaterOppsummering() {
        var deltakereListe = document.getElementById('deltakereListe');
        deltakereListe.innerHTML = ''; // Tøm oppsummeringslisten

        // Gå gjennom hver deltaker og legg til informasjonen i oppsummeringen
        for (var i = 0; i < deltakere.length; i++) {
            var deltaker = deltakere[i];
            var listeElement = document.createElement('li');
            listeElement.textContent = 'Navn: ' + deltaker.fornavn + ' ' + deltaker.etternavn + ', Adresse: ' + deltaker.adresse + ', Postnummer: ' + deltaker.postnummer + ', Poststed: ' + deltaker.poststed + ', Telefon: ' + deltaker.telefon;
            deltakereListe.appendChild(listeElement);
        }
    }
});



