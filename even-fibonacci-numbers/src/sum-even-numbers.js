export function evenSum(n) {
    let fibonacciSequence = Array.from({ length: n });
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if(n === 0) {
            sum;
        }
        if (i > 1) {
            fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        }
        if (i === 1) {
            fibonacciSequence[i] = 2;
        }
        if (i === 0) {
            fibonacciSequence[i] = 1;
        }
        if (fibonacciSequence[i] % 2 === 0) {
            sum = sum + fibonacciSequence[i];
        }
    }
    return sum;
}