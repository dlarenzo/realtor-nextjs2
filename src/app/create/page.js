export default function CreateListing() {
  return (
    <div className="py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>
      {/* LISTINGS FORM */}
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Address"
            className="p-2 border border-gray-200 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location: City, State"
            className="p-2 border border-gray-200 rounded-lg"
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 border border-gray-200 rounded-lg"
          />
          <input
            type="text"
            placeholder="Price"
            className="p-2 border border-gray-200 rounded-lg"
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min="1"
                max="10"
                required
                className="p-2 border border-gray-200 rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min="1"
                max="10"
                required
                className="p-2 border border-gray-200 rounded-lg"
              />
              <p>Baths</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min="100"
                max="10000"
                required
                className="p-2 border border-gray-200 rounded-lg"
              />
              <p>Sqft</p>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="rent"
                placeholder="Rent"
                className="p-2 border border-gray-200 rounded-lg"
              />
              <p>Rent</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="sale"
                placeholder="Sale"
                className="p-2 border border-gray-200 rounded-lg"
              />
              <p>Sale</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min="1900"
                max="currentYear"
                required
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
            <button className="bg-yellow-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
              Create Listing
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
