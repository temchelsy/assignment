function fibonacci(){
    let fibonacci = [0,1]

    for (let i=2; i<5; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i-2];
    }
    return fibonacci;
}
const firstfivefibonaci = fibonacci();
console.log(firstfivefibonaci)