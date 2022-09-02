const kalimat = [
    'abc',
    'ABC',
    'Hello World'
];

function alternateCase(kata) {
    const arrayHurufDipisah = kata.split('');
    var arrayHasilOlah = [];
    for (huruf of arrayHurufDipisah) {
        
        if (huruf == huruf.toUpperCase()) {
            arrayHasilOlah.push(huruf.toLowerCase());
        }
        if (huruf == huruf.toLowerCase()) {
            arrayHasilOlah.push(huruf.toUpperCase());
        }
    }
    return arrayHasilOlah.join('', String)
}
console.log('======3. Alternate Case======');
console.log(`alternateCase("${kalimat[0]}") => ${alternateCase(kalimat[0])}`);
console.log(`alternateCase("${kalimat[1]}") => ${alternateCase(kalimat[1])}`);
console.log(`alternateCase("${kalimat[2]}") => ${alternateCase(kalimat[2])}`);
console.log('=============================');