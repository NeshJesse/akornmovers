"use client"
import locationsData from '@/components/locationdata';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import Quote from '@/components/quote';
import Image from 'next/image';
export default function Landing({ location = "nairobi" }) {
  const locationData = locationsData[location] || locationsData.nairobi;

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{locationData.title}</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content={locationData.description} />
        <meta name="keywords" content={locationData.keywords} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={locationData.title} />
        <meta property="og:description" content={locationData.description} />
        <meta property="og:image" content="https://neshjesse.github.io/akornmovers/public/images.png" />
        <meta property="og:url" content={`https://neshjesse.github.io/akornmovers/${location}`} />
        <meta property="og:type" content="website" />
      </head>

      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="bg-gray-200 px-6 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Welcome to Akorn Movers in {location.charAt(0).toUpperCase() + location.slice(1)}</h2>
            <p className="text-lg mb-8">{locationData.description}</p>
            <p className="text-3xl font-bold">Our Services in:</p>
            <ul className="flex py-12 px-16 items-center justify-between">
              {locationData.serviceAreas.map((area, idx) => (
                <li key={idx} className="px-2 py-2 text-xl">{area}</li>
              ))}
            </ul>
          </div>
          <Quote />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services in {location.charAt(0).toUpperCase() + location.slice(1)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationData.services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section id="track-record" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Track Record</h2>
          <p className="text-lg mb-12">
            Examples of our successful moves in {location.charAt(0).toUpperCase() + location.slice(1)}. We take pride in every relocation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/reside.jpeg"
          alt="Residential Moving in action"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover rounded-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Residential Move</h3>
          <p className="text-gray-600">
            Successfully relocated a family from a large home to a new neighborhood with all belongings safely transported.
          </p>
          <a className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block mt-4" href="/gallery">
            See more
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/packs.jpeg"
          alt="Packaging in action"
          layout="responsive"
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Packing Services</h3>
          <p className="text-gray-600">
            Expert packing services to ensure your belongings are securely packed and protected.
          </p>
          <a className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block mt-4" href="/gallery">
            See more
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/packer.jpeg"
          alt="Specialized Moving in action"
          layout="responsive"
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Specialized Moving</h3>
          <p className="text-gray-600">
            Handled the relocation of delicate items, including valuable artwork and antiques, with meticulous care.
          </p>
        </div>
      </div>
      
    </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Akorn Movers. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
