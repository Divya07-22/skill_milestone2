const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/complaints", complaintRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
