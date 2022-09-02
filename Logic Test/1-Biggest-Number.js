function maxRedigit(inputAngka) {
    let arrayAngka = Array.from(String(inputAngka), Number);
    const angkaDisusun = arrayAngka.sort(function (a, b) {
        return b - a;
    });
    if (angkaDisusun.includes(NaN) || angkaDisusun.includes(0)) {
        return null;
    }
    return angkaDisusun.join('', Number);
}
console.log('======1. Biggest Number======');
const digit = [
    123, 231, 321, -1, 0, 99, 1000
]
for (i of digit){
console.log(`maxRedigit(${i}) --> ${maxRedigit(i)}`);
}


console.log('=============================');