const speakeasy = require('speakeasy')
const qrcode = require('qrcode')

async function init() { // A lancer si la combinaison login mdp est bon et si il n'a pas encore de clée
    const rawResponse = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        body: JSON.stringify({email: document.getElementsByName("email"), b: document.getElementsByName("enteredPassword")})
    });
    const passOk = await rawResponse.json();


    if (passOk){
        console.log("c'est ok gg")
    }
        // si clé on lance valide avec la clé en bdd

    const qr = document.getElementById("qr");

    let secret = speakeasy.generateSecret({
        name: "Connexion_Clinique"
    })
    console.log(secret)

    // ajouter secret ascii en bdd

    qrcode.toDataURL(secret.otpauth_url, function (err, data) {
        qr.src = data
    })
    qr.style.display = "inline"
    //qr.innerHTML = data;
}

function valid() { // A lancer si la combinaison login mdp est bon et si il a une clée
    let verified = speakeasy.totp.verify({
        secret: '$i!H*Va%sFy[kaWJAZ4:u^SM}ys/40I3', // clée récup en bdd
        encoding: 'ascii',
        token: '098037' // A remplacer par ce le code que l'utilisateur rentre
    })
    console.log(verified)
}