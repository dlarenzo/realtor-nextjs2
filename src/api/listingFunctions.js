import axios from "axios";

const BASE_URL = "http://localhost:3001/listings";

// CREATE: Add a new listing
export function CreateListing(listing) {
  return axios.post(BASE_URL, listing);
}

// READ: Get all listings
export function GetAllListings() {
  return axios.get(BASE_URL);
}

// UPDATE: Update a listing
export function UpdateListing(_id) {
  return axios.put(`${BASE_URL}/${_id}`);
}

// DELETE: Delete a listing
export function DeleteListing(id) {
  return axios.delete(`${BASE_URL}/${id}`);
}
