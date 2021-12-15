const path = require("path")
const express = require("express")

const {
    testingMongo,
    addNewTrip,
    deleteTrip,
    updateTrip,
    getTripById,
    getAllTrips
} = require('./mongoHandlers')


const PORT = 8000
const app = express ()

app.use(express.json())

// *********** ENDPOINTS*****************

app.get("/hello", (req, res) => {
    res.status(200).json({hi: "hi"})
})

app.get("/db", testingMongo)
app.get("/trips", getAllTrips)
app.get("/trip/:_id", getTripById )
app.post("/trip/addNewTrip", addNewTrip )
app.delete("/trips/deleteTrip/:_id", deleteTrip)
app.put("/trips/updateTrip/:_id", updateTrip)

//***************Handling Errors **************************// 

app.get("*", (req, res) =>
res.status(404).json({ status: 404, message: "There is a problem with your request!"})
);

//*********************************************************//

const server = app.listen(PORT, function() {
    console.info("Listening on port" + PORT);
})