"use client";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

export default function CreateListing() {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    address: "",
    location: "",
    description: "",
    price: "",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 100,
    rent: false,
    sale: false,
    year: new Date().getFullYear(),
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-20 max-w-4xl mx-auto">
      {loading ? (
        <p className="text-2xl md:text-5xl font-bold text-center mt-40">
          Loading...
        </p>
      ) : user ? (
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            Create Listing
          </h1>

          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 flex-1">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="p-2 border border-gray-200 rounded-lg"
              />
              <input
                type="text"
                name="location"
                placeholder="Location: City, State"
                value={formData.location}
                onChange={handleChange}
                className="p-2 border border-gray-200 rounded-lg"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="p-2 border border-gray-200 rounded-lg"
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="p-2 border border-gray-200 rounded-lg"
              />
              <div className="flex gap-6 flex-wrap">
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    name="bedrooms"
                    min="1"
                    max="10"
                    required
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="p-2 border border-gray-200 rounded-lg"
                  />
                  <p>Beds</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    name="bathrooms"
                    min="1"
                    max="10"
                    required
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="p-2 border border-gray-200 rounded-lg"
                  />
                  <p>Baths</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    name="sqft"
                    min="100"
                    max="10000"
                    required
                    value={formData.sqft}
                    onChange={handleChange}
                    className="p-2 border border-gray-200 rounded-lg"
                  />
                  <p>Sqft</p>
                </div>
              </div>
              <div className="flex gap-6 flex-wrap">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="rent"
                    id="rent"
                    checked={formData.rent}
                    onChange={handleChange}
                    className="p-2 border border-gray-200 rounded-lg"
                  />
                  <p>Rent</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="sale"
                    id="sale"
                    checked={formData.sale}
                    onChange={handleChange}
                    className="p-2 border border-gray-200 rounded-lg"
                  />
                  <p>Sale</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    name="year"
                    min="1900"
                    max={new Date().getFullYear()}
                    required
                    value={formData.year}
                    onChange={handleChange}
                    className="p-2 border border-gray-200 rounded-lg"
                  />
                  <p>Year Built</p>
                </div>
              </div>
            </div>

            {/* IMAGE UPLOAD */}
            <div>
              <p className="text-center">
                Upload Image
                <span className="font-normal text-gray-600 ml-2">
                  The first image will be the cover (max 5 images)
                </span>
              </p>
              <div className="flex flex-col gap-4">
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                  className="p-3 border border-gray-300 rounded w-full"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
                >
                  Create Listing
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <p className="text-2xl md:text-5xl font-bold text-center mt-40">
          {" "}
          You must be logged in to create a listing
        </p>
      )}
    </div>
  );
}
