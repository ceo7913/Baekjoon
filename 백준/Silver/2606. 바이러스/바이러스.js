let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const vertexNumber = Number(input[0]);
const edgeNumber = Number(input[1]);
input.shift();
input.shift();

class UndirectedGraph {
  constructor() {
    this.edges = {};
    this.DFSArray = [];
  }

  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  addEdges(vertex1, vertex2) {
    this.edges[vertex1][vertex2] = true;
    this.edges[vertex2][vertex1] = true;
  }

  traverseDFS(vertex) {
    const visited = {};
    this._traverseDFS(vertex, visited);
    return this.DFSArray;
  }
  _traverseDFS(vertex, visited) {
    visited[vertex] = true;
    this.DFSArray.push(vertex);

    for (let adjacentVertex in this.edges[vertex]) {
      if (!visited[adjacentVertex]) {
        this._traverseDFS(adjacentVertex, visited);
      }
    }
  }
}

const undirectedGraph = new UndirectedGraph();
for (let i = 1; i <= vertexNumber; i++) {
  undirectedGraph.addVertex(Number(i));
}
for (let j = 0; j < edgeNumber; j++) {
  input[j] = input[j].split(" ");
  undirectedGraph.addEdges(Number(input[j][0]), Number(input[j][1]));
}

const answer = undirectedGraph.traverseDFS(1).length - 1;
console.log(answer);