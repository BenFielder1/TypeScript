export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}

export function calculateAreaCircle(radius: number): number{
    return Math.round(radius * radius * Math.PI)
}

export function calculateFactorial(num: number): number{
    let factorialNum = 1
    for (let x = 1; x <= num; x++){
        factorialNum *= x
    }
    return factorialNum
}