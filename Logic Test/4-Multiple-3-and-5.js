
function solution(batasAngka) {
    let hasil = 0;
    let arraySebelumHasil = [];
    let arraySesudahHasil = [];
    for (i = 0; i < batasAngka; i++) {
        if (i % 3 == 0) {
            arraySebelumHasil.push(i);
        }
        if (i % 5 == 0) {
            arraySebelumHasil.push(i);
        }
    }
    arraySesudahHasil = arraySebelumHasil.filter(function (angka, index) {
        return arraySebelumHasil.indexOf(angka) === index;
    });
    for (angka of arraySesudahHasil) {
        hasil += angka;
    }
    console.log(`solution(${batasAngka}) // = ${hasil} = ${arraySesudahHasil.join(' + ')}`);
}

console.log('=====4. Multiple 3 and 5=====');
solution(10);
solution(20);
console.log('=============================');