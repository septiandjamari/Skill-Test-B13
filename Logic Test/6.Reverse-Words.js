const kata_kata = [
    'I am A Great human',
    'Saya sedang Mengikukiti Skill-Test BATCH 13',
]

function reverseWord(kalimat) {
    const kataDipisah = kalimat.split(' ');
    let kataDipisahDibalik = [];
    let kalimatDibalik = '';

    for (e of kataDipisah) {
        const perHuruf = e.split('');
        let perHurufDibalik = [];
        for (i = perHuruf.length - 1; i >= 0; i--) {
            perHurufDibalik.push(perHuruf[i].toLowerCase());
        }
        kataDipisahDibalik.push(perHurufDibalik.join(''));
    }
    kalimatDibalik = kataDipisahDibalik.join(' ');

    const kalimatPerHuruf = kalimat.split('');
    const kalimatDibalikPerHuruf = kalimatDibalik.split('');
    for (e1 in kalimatPerHuruf) {
        if (kalimatPerHuruf[e1] === kalimatPerHuruf[e1].toUpperCase()) {
            kalimatDibalikPerHuruf[e1] = kalimatDibalikPerHuruf[e1].toUpperCase();
        }
        if (kalimatPerHuruf[e1] === kalimatPerHuruf[e1].toLowerCase()) {
            kalimatDibalikPerHuruf[e1] = kalimatDibalikPerHuruf[e1].toLowerCase();
        }
    }
    console.log(kalimat);
    console.log(kalimatDibalikPerHuruf.join(''));
}

console.log('=======6. Reverse Word=======');
reverseWord(kata_kata[0]);
console.log("-----------------------------");
reverseWord(kata_kata[1]);
console.log('=============================');