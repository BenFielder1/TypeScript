import * as winston from "winston";
import { calcAreaSquare, calcAreaTriangle, calculateAreaCircle, calculateFactorial } from './simpleMaths'
import Stack from "comp-sci-maths-lib/dist/dataStructures/stack/Stack"

import { depthFirstSearch, SimpleStringGraph} from "comp-sci-maths-lib/dist"
import { getStringVertex } from "comp-sci-maths-lib/dist/common";

const simpleLogger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

function sayHello(name: string): void {
    simpleLogger.info(`Hello ${name}`)
}

sayHello("Ben")
simpleLogger.info(calcAreaSquare(4))
simpleLogger.info(calculateAreaCircle(4))
simpleLogger.info(calculateFactorial(10))
console.log("hello")

const myGraph = new SimpleStringGraph()
myGraph.addLink("A", "B")
myGraph.addLink("B", "C")
myGraph.addLink("A", "C")

const dfs: string[] = []
depthFirstSearch(myGraph,
    getStringVertex("A"),
    x => dfs.push(x.value))


console.log(dfs)