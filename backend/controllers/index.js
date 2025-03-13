import mongoose from "mongoose";
import { connect } from "../db/mongodb/mongoose.js";
import { ObjectId } from "mongodb";

/// CREATE: CREATE a new listing

export const createListing = async (req, res) => {
  try {
    await connect();
    const db = mongoose.connection.db;
    const listing = {
      address: req.body.address,
      status: req.body.status,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
      description: req.body.description,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      sqft: req.body.sqft,
      levels: req.body.levels,
      year: req.body.year,
      cityState: req.body.cityState,
    };

    console.log(listing.address);

    // Log the listing object for debugging
    console.log(listing);

    // Insert the listing into the "listings" collection
    const response = await db.collection("listings").insertOne(listing);

    // Log the response for debugging
    console.log(response);

    // Check if the insertion was successful
    if (response.acknowledged) {
      res
        .status(201)
        .json({ message: "Listing created successfully", listing: response });
    } else {
      console.log(response.error);
      res.status(500).json({
        message:
          response.error || "Some error occurred while creating the listing.",
      });
    }
  } catch (error) {
    // Catch any errors and return them
    console.error(error);
    res.status(500).json({ message: error.message || "An error occurred" });
  }
};

// READ: GET ALL listings getAllListings
export const getAllListings = (req, res) => {
  const db = mongoose.connection.db;
  db.collection("listings")
    .find()
    .toArray()
    .then((listings) => {
      res.json(listings);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// READ: GET one listing
export const getSingleListing = async (req, res) => {
  try {
    await connect();
    const db = mongoose.connection.db;
    const listing = await db
      .collection("listings")
      .findOne({ _id: new ObjectId(req.params.id) });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// UPDATE: Update a listing
// export const updateListing = async (req, res) => {
//   try {
//     await connect();
//     const db = mongoose.connection.db;
//     const result = await db
//       .collection("listings")
//       .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
//     if (result.matchedCount === 0) {
//       res.status(404).json({ error: "Listing not found" });
//     } else {
//       res.json(result);
//     }
//   } catch (err) {
//     console.error("Error updating listing:", err);
//     res.status(500).json({ error: err });
//   }
// };

export const updateListing = async (req, res) => {
  try {
    await connect();
    const db = mongoose.connection.db;
    const userId = new ObjectId(req.params.id);
    const listing = {
      address: req.body.address,
      status: req.body.status,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
      description: req.body.description,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      sqft: req.body.sqft,
      levels: req.body.levels,
      year: req.body.year,
      cityState: req.body.cityState,
    };
    const response = await db
      .collection("listings")
      .updateOne({ _id: userId }, { $set: listing });

    // Is it being passed through
    console.log(listing);

    console.log(response);

    // Check if the update was successful

    if (response.matchedCount === 0) {
      res.status(404).json({ error: "Listing not found" });
    } else {
      res
        .status(200)
        .json({ message: "Listing updated successfully", listing: response });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE: Delete a listing
export const deleteListing = async (req, res) => {
  try {
    await connect();
    const db = mongoose.connection.db;
    const result = await db
      .collection("listings")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
