import React from "react";


const Quoteform = () => {

return(
    <>
{/* Qoute form */}
<div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
<h3 className="text-2xl font-semibold mb-4">Get a Quote/Uliza Bei</h3>
<form action="/submit-quote" method="post">
    <div className="mb-4">
        <label for="moving-from" className="block text-gray-700">Moving From</label>
        <input type="text" id="moving-from" name="moving-from" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your current location" required/>
    </div>
    <div className="mb-4">
        <label for="moving-to" className="block text-gray-700">Moving To</label>
        <input type="text" id="moving-to" name="moving-to" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your destination" required/>
    </div>
    <div className="mb-4">
        <label for="room-size" className="block text-gray-700">Your Current room size</label>
        <input type="text" id="room-size" name="room-size" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your room size e.g. one bedroom,bedsitter" required/>
    </div>
    <div className="mb-4">
        <label for="date" className="block text-gray-700">Date</label>
        <input type="date" id="moving-date" name="moving-date" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your destination" required/>
    </div>
    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">Get Quote</button>
</form>
</div>
  </>
);

};

export default Quoteform;