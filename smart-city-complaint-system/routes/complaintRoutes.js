const express = require("express");
const {
    addComplaint,
    getAllComplaints,
    getUnresolvedComplaints,
    getPrioritizedComplaints,
    getLocationConnections,
} = require("../controllers/complaintController");

const router = express.Router();

router.post("/add", addComplaint);
router.get("/list", getAllComplaints);
router.get("/unresolved", getUnresolvedComplaints);
router.get("/prioritized", getPrioritizedComplaints);
router.get("/location/:location", getLocationConnections);

module.exports = router;
