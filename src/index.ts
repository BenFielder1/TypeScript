import * as winston from "winston";
import { calcAreaSquare, calcAreaTriangle, calculateAreaCircle, calculateFactorial } from './simpleMaths'
import Stack from "comp-sci-maths-lib/dist/dataStructures/stack/Stack"

const simpleLogger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

function sayHello(name: string): void {
    simpleLogger.info(`Hello ${name}`)
}

function stack(): number{
    let stack: Stack<number> = new Stack<number>()
    stack.push(5)
    return stack.pop()
}

sayHello("Ben")
simpleLogger.info(calcAreaSquare(4))
simpleLogger.info(calculateAreaCircle(4))
simpleLogger.info(calculateFactorial(10))
simpleLogger.info(stack())