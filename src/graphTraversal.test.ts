import Graph from "comp-sci-maths-lib/dist/dataStructures/graph/Graph"
import { StringGraphVertex } from "comp-sci-maths-lib/dist/types"
import { getStringVertex } from "comp-sci-maths-lib/dist/common"

test("Simple Graph", function(){
    let myGraph: Graph<StringGraphVertex> = new Graph()
    let vertexA = getStringVertex("A")
    let vertexB = getStringVertex("B")
    let vertexC = getStringVertex("C")
    let vertexD = getStringVertex("D")
    let vertexE = getStringVertex("E")
    let vertexF = getStringVertex("F")
    let vertexG = getStringVertex("G")
    
    myGraph.addBiDirectionalEdge(vertexA, vertexB)
    myGraph.addBiDirectionalEdge(vertexA, vertexC)
    myGraph.addBiDirectionalEdge(vertexB, vertexD)
    myGraph.addBiDirectionalEdge(vertexB, vertexE)
    myGraph.addBiDirectionalEdge(vertexC, vertexD)
    myGraph.addBiDirectionalEdge(vertexD, vertexF)
    myGraph.addBiDirectionalEdge(vertexE, vertexF)
    myGraph.addBiDirectionalEdge(vertexF, vertexG)

    let outFromA = myGraph.getOutgoing(vertexA)
    let outFromAValues = outFromA.map(x => x.to).map(o => o.value)
    expect(outFromAValues.includes("B")).toBeTruthy()
    
})