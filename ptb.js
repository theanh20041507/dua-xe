//ax2 + bx + c = 0
var a, b, c
// Nhap a, b, c
a = parseFloat(prompt('Nhap a = '))
b = parseFloat(prompt('Nhap b = '))
c = parseFloat(prompt('Nhap c = '))

// Viet lenh
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('Phuong trinh VSN')
        } else {
            alert('Phuong trinh VN')
        }
    } else {
        x = -c / b
        alert('Nghiem phuong trinh x = ' + x)
    }
} else {
    dt = b * b - 4 * a * c;
    if (dt < 0) {
        alert('Phuong trinh vo nghiem')
    } else if (dt == 0) {
        x = -b / (2 * a)
        alert('Nghiem phuong trinh x1 = x2 = ' + x)
    } else {
        x1 = (-b + Math.sqrt(dt)) / (2 * a)
        x2 = (-b - Math.sqrt(dt)) / (2 * a)
        alert(`Nghiem x1 = ${x1}, x2 = ${x2}`)
    }
}


// viết chương trinh lấy số liền kề vd 1 2 3 5 8 13 

function generateFibonacci(n) {
    if (n <= 0) {
        console.log("Nhap so luong so Fibonacci hop le.");
        return;
    }

    let fibonacciArray = [1, 2]; // Bắt đầu với hai số đầu tiên của dãy Fibonacci

    // Tính n số Fibonacci tiếp theo
    for (let i = 2; i < n; i++) {
        let nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    // In ra dãy số Fibonacci
    console.log("Dãy số Fibonacci gồm " + n + " số là:");
    console.log(fibonacciArray.join(", "));
}

// Thay đổi giá trị n tùy ý
let n = 10;
generateFibonacci(n);

// bài 2 viết chướng trình ktra một số nhập vào có phải là số nguyên tố hay k
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Nhập số cần kiểm tra
let inputNumber = prompt("Nhap so can kiem tra: ");
inputNumber = parseInt(inputNumber);

// Kiểm tra và in kết quả
if (isNaN(inputNumber)) {
    console.log("Vui lòng nhập một số.");
} else {
    if (isPrime(inputNumber)) {
        console.log(inputNumber + " la so nguyen to.");
    } else {
        console.log(inputNumber + " khong la so nguyen to.");
    }
}

// viêt chương trinhg đảoo ngược 1 số vd 12345
var array = [1, 2, 3, 4, 5];
var length = array.length;

for (var i = length - 1; i >= 0; i--) {
    console.log(array[i]);
}


// viết chương trình liệt kê 20 số nguyên tố đầu tiên
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function generateFirstNPrimes(n) {
    let primes = [];
    let i = 2;

    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }

    return primes;
}

// Liệt kê 20 số nguyên tố đầu tiên
let first20Primes = generateFirstNPrimes(20);
console.log("20 so nguyen to dau tien la: " + first20Primes.join(", "));



var x1 = 0.5;
var eps1 = 0.001;
var first1 = 1;
var mu1 = 1;
var second1 = first1 + Math.pow(x1, mu1) / factorial(mu1);

while (Math.abs(first1 - second1) > eps1) {
    mu1++;
    first1 = second1;
    second1 = first1 + Math.pow(x1, mu1) / factorial(mu1);
}

document.write(`e^(${x1}) ≈ ${second1.toFixed(6)}<br>`);

function factorial(n1) {
    if (n1 == 1 || n1 === 0) return 1;
    return n1 * factorial(n1 - 1);
}


//bài 3
function calculateLnOneMinusX(x, eps) {
    if (Math.abs(x) >= 1) {
        // Handle cases where x is outside the interval of convergence
        console.error("Invalid value of x. The series diverges for |x| >= 1.");
        return NaN;
    }

    let result = 0;
    let term = -x;
    let mu = 2;

    while (Math.abs(term) > eps) {
        result += term;
        term = -term * x / mu;
        mu++;
    }

    return result;
}

// Example usage
var x = 0.5;
var epsilon = 0.001;
const lnOneMinusXApprox = calculateLnOneMinusX(x, epsilon);

document.write(`ln(1 - ${x}) ≈ ${lnOneMinusXApprox.toFixed(6)}<br>`);


//bài 4
var x4 = 0.5;
var eps4 = 0.001;
var first4 = Math.sqrt(1 + x4);
var mu4 = 1;
var second4 = 1 + (1 / 2) * x4;

while (Math.abs(first4 - second4) > eps4) {
    mu4++;
    first4 = second4;
    var sign4 = (mu4 % 2 === 0) ? -1 : 1;
    second4 = second4 + (sign4 * product4(mu4 - 1) / factorial4(2 * mu4)) * Math.pow(x4, mu4);
}

document.write(`√(1 + ${x4}) ≈ ${second4.toFixed(6)}<br>`);

function factorial4(n4) {
    if (n4 === 0 || n4 === 1) return 1;
    return n4 * factorial4(n4 - 1);
}

function product4(n4) {
    if (n4 === 0 || n4 === 1) return 1;
    return n4 * product4(n4 - 2);
}


//bài 5
function calculateInverseSqrt(x, eps) {
    let result = 1;
    let term = -x / 2;
    let mu = 2;

    while (Math.abs(term) > eps) {
        result += term;
        term = -term * (mu - 1) * (mu - 2) * x / (mu * (mu + 1));
        mu += 2;
    }

    return result;
}

// Example usage
var x = 0.5;
var epsilon = 0.001;
const inverseSqrtApprox = calculateInverseSqrt(x, epsilon);

document.write(`1/√(1 + ${x}) ≈ ${inverseSqrtApprox.toFixed(6)}<br>`);


// bài 6
function calculateSin(x, eps) {
    let result = 0;
    let term = x;
    let sign = -1;
    let mu = 3;

    while (Math.abs(term) > eps) {
        result += term;
        term = (sign * Math.pow(x, mu)) / factorial(mu);
        sign *= -1;
        mu += 2;
    }

    return result;
}

function factorial(n) {
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 2);
}

// Example usage
var x = 0.5;
var epsilon = 0.001;
const sinXApprox = calculateSin(x, epsilon);

document.write(`sin(${x}) ≈ ${sinXApprox.toFixed(6)}<br>`);

// bài 7
function calculateCos(x, eps) {
    let result = 1;
    let term = 1;
    let sign = -1;
    let mu = 2;

    while (Math.abs(term) > eps) {
        result += term;
        term = (sign * Math.pow(x, mu)) / factorial(mu);
        sign *= -1;
        mu += 2;
    }

    return result;
}

function factorial(n) {
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 2);
}

// Example usage
var x = 0.5;
var epsilon = 0.001;
const cosXApprox = calculateCos(x, epsilon);

document.write(`cos(${x}) ≈ ${cosXApprox.toFixed(6)}<br>`);

// bài 9
function calculateSinOverX(x, eps) {
    let result = 1;
    let term = -1 * Math.pow(x, 2) / factorial(3);
    let sign = -1;
    let mu = 4;

    while (Math.abs(term) > eps) {
        result += term;
        term = (sign * Math.pow(x, mu)) / factorial(mu);
        sign *= -1;
        mu += 2;
    }

    return result;
}

function factorial(n) {
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 2);
}

// Example usage
var x = 0.5;
var epsilon = 0.001;
const sinOverXApprox = calculateSinOverX(x, epsilon);

document.write(`sin(${x})/${x} ≈ ${sinOverXApprox.toFixed(6)}<br>`);

//bài 10
function calculateArctan(x, eps) {
    let result = x;
    let term = x;
    let sign = -1;
    let mu = 3;

    while (Math.abs(term) > eps) {
        term = (sign * Math.pow(x, mu)) / mu;
        result += term;
        sign *= -1;
        mu += 2;
    }

    return result;
}

// Example usage
var x = 0.5;
var epsilon = 0.001;
const arctanXApprox = calculateArctan(x, epsilon);

document.write(`arctan(${x}) ≈ ${arctanXApprox.toFixed(6)}<br>`);

//bài 11
function calculateLn(x, eps) {
    let result = 0;
    let term = x;
    let sign = -1;
    let mu = 2;

    while (Math.abs(term) > eps) {
        term = (sign * Math.pow(x, mu)) / mu;
        result += term;
        sign *= -1;
        mu += 1;
    }

    return result;
}

// Example usage
var x = 0.5;
var epsilon = 0.001;
const lnXPlus1Approx = calculateLn(x, epsilon);

document.write(`ln(${x} + 1) ≈ ${lnXPlus1Approx.toFixed(6)}<br>`);


// bài 12
// function calculateLnRatio(x, eps) {
//     // Initialize variables
//     let y = (x + 1) / (x - 1) - 1;
//     let result = 2 * y;
//     let term = y;
//     let sign = -1;
//     let mu = 2;

//     // Iterate until the term is smaller than the specified epsilon
//     while (Math.abs(term) > eps) {
//         term = (sign * Math.pow(y, mu)) / mu;
//         result += term;
//         sign *= -1;
//         mu += 2;
//     }

//     // Return the calculated result
//     return result;
// }

// // Example usage
// var x = 0.5;
// var epsilon = 0.001;
// const lnRatioApprox = calculateLnRatio(x, epsilon);

// // Print the result to the document
// document.write(`ln((${x} + 1) / (${x} - 1)) ≈ ${lnRatioApprox.toFixed(6)}<br>`);
