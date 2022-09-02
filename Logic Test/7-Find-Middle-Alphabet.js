const alphapbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphapbetArray = alphapbet.split('');
function findMiddleAlphabet(huruf1, huruf2) {
    batasAwal = alphapbetArray.indexOf(huruf1.toUpperCase());
    batasAkhir = alphapbetArray.indexOf(huruf2.toUpperCase());
    
    let arrayHasil = [];
    let arrayHasilAkhir = [];
    for (i = batasAwal; i <= batasAkhir; i++) {
        arrayHasil.push(alphapbetArray[i]);
    }
    const hitungModulus = arrayHasil.length % 2;
    const hitungBatasTengah = arrayHasil.length / 2;
    const batasTengahInteger = parseInt(hitungBatasTengah)
    
    if (hitungModulus == 1) {
        arrayHasilAkhir = [arrayHasil[batasTengahInteger]];
    }
    if (hitungModulus == 0) {
        arrayHasilAkhir = [arrayHasil[batasTengahInteger - 1], arrayHasil[batasTengahInteger]]
    }
    console.log(`The middle between ${huruf1} and ${huruf2} is ${arrayHasilAkhir.join('')}`)
}
console.log('===7. Find Middle Alphabet===');
findMiddleAlphabet('Q', 'U');
findMiddleAlphabet('R', 'U');
findMiddleAlphabet('T', 'Z');
findMiddleAlphabet('Q', 'Z');
console.log('=============================');
console.log('=========Terima Kasih========');
console.log('=============================');
