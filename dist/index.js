"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston = __importStar(require("winston"));
var simpleMaths_1 = require("./simpleMaths");
var dist_1 = require("comp-sci-maths-lib/dist");
var common_1 = require("comp-sci-maths-lib/dist/common");
var simpleLogger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});
function sayHello(name) {
    simpleLogger.info("Hello " + name);
}
sayHello("Ben");
simpleLogger.info(simpleMaths_1.calcAreaSquare(4));
simpleLogger.info(simpleMaths_1.calculateAreaCircle(4));
simpleLogger.info(simpleMaths_1.calculateFactorial(10));
console.log("hello");
var myGraph = new dist_1.SimpleStringGraph();
myGraph.addLink("A", "B");
myGraph.addLink("B", "C");
myGraph.addLink("A", "C");
var dfs = [];
dist_1.depthFirstSearch(myGraph, common_1.getStringVertex("A"), function (x) { return dfs.push(x.value); });
console.log(dfs);
//# sourceMappingURL=index.js.map