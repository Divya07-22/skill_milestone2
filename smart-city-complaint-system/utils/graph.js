class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(location) {
        if (!this.adjacencyList.has(location)) {
            this.adjacencyList.set(location, []);
        }
    }

    addEdge(location1, location2) {
        if (!this.adjacencyList.has(location1) || !this.adjacencyList.has(location2)) return;
        this.adjacencyList.get(location1).push(location2);
        this.adjacencyList.get(location2).push(location1);
    }

    getConnections(location) {
        return this.adjacencyList.get(location) || [];
    }
}

module.exports = Graph;
