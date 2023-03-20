var mojaRecenica = "Moja rečenica sadrži 3 slova e";
function slovaE() {
    let recenica = 0;
    let e = "e";
    for (let i = 0; i < mojaRecenica.length; i++) {
        let slovo = mojaRecenica[i];
        if (slovo === e) {
            recenica++;
        }
    }
    return recenica;
}


module.exports = slovaE;