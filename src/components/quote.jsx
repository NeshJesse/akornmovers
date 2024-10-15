import React, { useState } from "react";

const Quote = () => {
  // State to store the selected room size and the price range
  const [roomSize, setRoomSize] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Handle room size selection and update the price range accordingly
  const handleRoomSizeChange = (e) => {
    const selectedRoomSize = e.target.value;
    setRoomSize(selectedRoomSize);

    // Update the price range based on the selected room size
    switch (selectedRoomSize) {
      case "one-bedroom":
        setPriceRange("20,000 - 24,000 Ksh");
        break;
      case "two-bedroom":
        setPriceRange("25,000 - 29,000 Ksh");
        break;
      case "three-bedroom":
        setPriceRange("30,000 - 34,000 Ksh");
        break;
      default:
        setPriceRange(""); // Clear the price range if no valid room size is selected
    }
  };

  return (
    <>
      {/* Quote form */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Get a Quote/Uliza Bei</h3>
        <form action="/submit-quote" method="post">
          <div className="mb-4">
            <label htmlFor="moving-from" className="block text-gray-700">Moving From</label>
            <input
              type="text"
              id="moving-from"
              name="moving-from"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your current location"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="moving-to" className="block text-gray-700">Moving To</label>
            <input
              type="text"
              id="moving-to"
              name="moving-to"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your destination"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="room-size" className="block text-gray-700">Your Current Room Size</label>
            <select
              id="room-size"
              name="room-size"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={roomSize}
              onChange={handleRoomSizeChange}
              required
            >
              <option value="">Select room size</option>
              <option value="one-bedroom">One Bedroom</option>
              <option value="two-bedroom">Two Bedrooms</option>
              <option value="three-bedroom">Three Bedrooms</option>
            </select>
          </div>

          {/* Display the price range if a valid room size is selected */}
          {priceRange && (
            <div className="mb-4">
              <label className="block text-gray-700">Estimated Price Range</label>
              <div className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100">
                {priceRange}
              </div>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="moving-date" className="block text-gray-700">Date</label>
            <input
              type="date"
              id="moving-date"
              name="moving-date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
            Get Quote
          </button>
        </form>
      </div>
    </>
  );
};

export default Quote;
