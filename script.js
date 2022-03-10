const speakeasy = require('speakeasy')

function init() { // A lancer si la combinaison login mdp est bon et si il n'a pas encore de clée

    const qrcode = new QRCode("qrcode")

    const qr = document.getElementById("qr");

    let secret = speakeasy.generateSecret({
        name: "TEST"
    })
    console.log(secret)

    qrcode.toDataURL(secret.otpauth_url, function (err, data) {
        qr.src = data
    })
    qr.style.display = "inline"
}

function valid() { // A lancer si la combinaison login mdp est bon et si il a une clée
    let verified = speakeasy.totp.verify({
        secret: '$i!H*Va%sFy[kaWJAZ4:u^SM}ys/40I3', // clée récup en bdd
        encoding: 'ascii',
        token: '098037' // A remplacer par ce le code que l'utilisateur rentre
    })
    console.log(verified)
}