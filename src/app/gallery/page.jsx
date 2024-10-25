"use client"
import React, { useState } from 'react';

import Navbar from '@/components/navbar';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  // Sample images - replace with your actual moving company images
  const images = [
    {
      url: "/moving.jpeg",
      alt: "Professional movers loading a truck",
      caption: "Our team carefully loading valuable items"
    },
    {
      url: "/packer.jpeg",
      alt: "Wrapped furniture being moved",
      caption: "Protected furniture ready for transport"
    },
    {
      url: "/trucks.jpeg",
      alt: "Moving truck with team",
      caption: "Our modern fleet and professional team"
    },
    {
      url: "/api/placeholder/800/600",
      alt: "Residential moving in progress",
      caption: "Making moving day stress-free"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar/>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Moving Services in Action
      </h2>
      
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openModal(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={() => navigateImage(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal image */}
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-4">
              <p>{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;