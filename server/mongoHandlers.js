"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// using uuid to create unique trip ids
const { v4: uuidv4 } = require("uuid");



// ******** testing connection to MongoDb**************************//

const testingMongo = async (dbName) => {
    const client = new MongoClient(MONGO_URI, options)

    await client.connect();

    const db = client.db("where-next");
    console.log("connected!")

    await db.collection("trips").insertOne({ name: "We're going to Europe, baby"});

    client.close()
    console.log("disconnected!");
}

//****************************************************************//

// get all trips by userId

// const getTripsPerUser = async (req, res) => {

//     const client = new MongoClient(MONGO_URI, options)
    
//     try {
    
//     await client.connect();
//     const db = client.db("where-next")

//     const allTrips = await db.collection("trips").find().toArray();
//     const userTrips = [];

//     allTrips
//         ? res.status(200).json({ status:200, data: tripNumber })
//         : res.status(404).json({ status:404, data: "Not Found"})
//     } catch (err) {
//     console.log(err.stack)
//     res.status(500).json({status: 500, data: req.body, err: message.err})
//     }

//     client.close();

// };


// add trip 

const addNewTrip = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options);

    try {

        const {username, email, trip} = req.body;

        await client.connect()
        const db = client.db("where-next");

        const newTrip = {
            _id: uuidv4(),
            ...req.body,
        }

        // incomplete: verify user and add new trips to the same user instead of creating multiple duplicate users
        // const usersList = await db.collection("users").find().toArray();
        
        // const placeId = uuidv4();
        // const places = trip.map((place) => {
        //     return {...place, placeId, date: new Date()}
        // });
        
        // if (usersList.filter((e) => e.email === email).length > 0 {
        //     await db.collection("users").updateOne(
        //         { email: email },
        //         { $push: {
        //             tripInfo: {... trip, placeId}
        //         }}
        //     )
        // })
        const success = await db.collection("trips").insertOne(newTrip)


        success
        ? res.status(201).json({ status: 201, data: newTrip, message: "Success" })
        : res.status(400).json({ status:400, data: newTrip, message: "Something went wrong"});

    } catch (err) {
        console.log(err.stack)
        res.status(500).json({ status: 500, error: err.message });
    } finally {
        await client.close();
    }
}


const deleteTrip = async (req, res) => {

    const {_id} = req.params;

    const client = new MongoClient(MONGO_URI, options)

    try {

        await client.connect()
        const db = client.db("where-next")

        await db.collection("trips").findOne({_id})
        const result = await db.collection("trips").deleteOne({_id})
        console.log("tripDeleted")

        result
        ? res.status(204).json({ status: 204, data: result, message:"Trip successfully deleted" })
        : res.status(400).json({ status: 400, message: "Something went wrong"})
    } catch (err) {
        console.log(err.stack)
        res.status(500).json({ status:500, data: req.body, message: err.message })

    } finally {
        client.close();
    }
}

const updateTrip = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options);

    try {

        const { username, email, trip } = req.body;
        const { _id } = req.params;
    
        const newTrip = {
            $set: {
            ...req.body      
            }
        };

        await client.connect()
        const db = client.db("where-next");
        await db.collection("trips").findOne({_id})
        const result = await db.collection("trips").updateOne({_id: _id}, newTrip);

        result
        ? res.status(201).json({ status: 201, data: newTrip, message: "Success" })
        : res.status(400).json({ status:400, data: newTrip, message: "Something went wrong"});

    } catch (err) {
        console.log(err.stack)
        res.status(500).json({ status: 500, error: err.message });
    } finally {
        await client.close();
    }
}

const getTripById = async (req, res) => {

const client = new MongoClient(MONGO_URI, options);

try {

    const { _id } = req.params;

    await client.connect()
    const db = client.db("where-next")

    const trip = await db.collection("trips").findOne({ _id });

    trip
    ? res.status(200).json({ status: 200, data: trip, message: "Success" })
    : res.status(404).json({ status: 404, data: trip, message: "Something went wrong" })

} catch (err) {
    console.log(err.stack)
    res.status(500).json({ status: 500, data: req.body, err: message.err });
}

client.close();

};

const getAllTrips = async (req, res) => {

const client = new MongoClient(MONGO_URI, options);

try {

    await client.connect()
    const db = client.db("where-next")

    const allTrips = await db.collection("trips").find().toArray();

    allTrips
    ? res.status(200).json({ status: 200, data: allTrips, message: "Success" })
    : res.status(404).json({ status: 404, data: allTrips, message: "Trips Not Found" })

} catch (err) {
    console.log(err.stack)
    res.status(500).json({ status: 500, data: req.body, err: message.err });
}

client.close();

};



module.exports = {
    testingMongo,
    addNewTrip,
    deleteTrip,
    updateTrip,
    getTripById,
    getAllTrips,
}