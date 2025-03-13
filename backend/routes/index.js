// const myController = require("../controllers/myController");
import * as listings from "../controllers/index.js";
import express from "express";

// VARIABLE FOR ROUTES
const router = express.Router();

router.get("/listings", listings.getAllListings);
router.get("/listings/:id", listings.getSingleListing);
router.post("/listings/create", listings.createListing);
router.put("/listings/update/:id", listings.updateListing);
router.delete("/listings/delete/:id", listings.deleteListing);

export default router;
