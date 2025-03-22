const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bookings = []; // Temporary storage (Replace with a database later)

// API Endpoint to Handle Event Bookings
app.post("/api/book-event", (req, res) => {
    const eventData = req.body;
    bookings.push(eventData);
    res.status(201).json({ message: "Booking request is pending approval!" });
});

// Start the Server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
