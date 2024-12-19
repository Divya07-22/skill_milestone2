const complaints = require("../models/complaint");
const Queue = require("../utils/queue");
const BST = require("../utils/bst");
const Graph = require("../utils/graph");

const unresolvedQueue = new Queue();
const priorityTree = new BST();
const locationGraph = new Graph();

// Initialize locations in the graph
locationGraph.addVertex("Mangalore");
locationGraph.addVertex("Park Street");
locationGraph.addEdge("Mangalore", "Park Street");

// Add a new complaint
const addComplaint = (req, res) => {
    const complaint = req.body;
    complaints.push(complaint);
    unresolvedQueue.enqueue(complaint);
    priorityTree.insert(complaint);
    locationGraph.addVertex(complaint.location);
    res.send({ message: "Complaint added successfully!" });
};

// Get all complaints
const getAllComplaints = (req, res) => {
    res.send(complaints);
};

// Get unresolved complaints
const getUnresolvedComplaints = (req, res) => {
    res.send(unresolvedQueue.items);
};

// Get prioritized complaints
const getPrioritizedComplaints = (req, res) => {
    const sorted = priorityTree.inOrderTraversal(priorityTree.root);
    res.send(sorted);
};

// Get location connections
const getLocationConnections = (req, res) => {
    const { location } = req.params;
    const connections = locationGraph.getConnections(location);
    res.send(connections);
};

module.exports = {
    addComplaint,
    getAllComplaints,
    getUnresolvedComplaints,
    getPrioritizedComplaints,
    getLocationConnections,
};
