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



// bài 1 
var x = 0.5
var eps = 0.001
var first = 1
var mu = 1
var second = first + Math.pow(x, mu) / factorial(mu)

while (Math.abs(first - second) > eps) {
    mu++
    first = second
    second = first + Math.pow(x, mu) / factorial(mu)
}

document.write(first)

function factorial(n) {
    if (n == 1) return 1
    return n * factorial(n - 1)
}

//bài 2
function tínhToán(x) {
    // Hàm tính toán giá trị của chuỗi phương trình
    let result = 1;
    for (let i = 1; i <= 10; i++) {
      result += (-1) * i * (i + 1) * x ** (i - 1) / 2;
    }
    return result;
}

// Hiển thị result
let x = 0.5;
let result = tínhToán(x);
document.getElementById("ketQua").innerHTML = result


