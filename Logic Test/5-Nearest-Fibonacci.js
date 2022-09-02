
function nearestFibonacci(masukanAngka) {
    let jumlahMasukanAngka = 0;
    for (const i of masukanAngka) {
        jumlahMasukanAngka += i;
    }

    let i;
    let fibonacci = [0, 1];
    let arrayFibonacci = []

    for (i = 2; i <= 10; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        arrayFibonacci.push(fibonacci[i]);
    }
    let fibonacciBatas;
    for (i in arrayFibonacci) {
        if (arrayFibonacci[i] >= jumlahMasukanAngka) {
            fibonacciBatas = arrayFibonacci[i];
            break;
        }
    }
    console.log(`${arrayFibonacci}`);
    console.log(`fibonacci terdekat = ${fibonacciBatas}, Masaukan Angka [${masukanAngka}] = ${jumlahMasukanAngka}`);
    console.log(`hasil = ${fibonacciBatas - jumlahMasukanAngka}`);
}

console.log('=====5. Nearest Fibonacci====');
nearestFibonacci([15, 1, 3]);
console.log('=============================');