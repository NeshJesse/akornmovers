"use client";
import Navbar from '@/components/navbar';
import { useState } from 'react';
import Quote from '@/components/quote';
import Image from 'next/image';

export const   Metadata ={
  title: 'Akorn Movers- Where you move with dignity',

}
export default function Landing() {


  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Akorn Movers- Where you move with dignity</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Nehemiah Onyango Jesse Nehemiah" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://neshjesse.github.io/akornmovers/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Akorn Movers - Where You Move With Dignity" />
        <meta property="og:description" content="Reliable and affordable moving services to make your relocation smooth and stress-free." />
        <meta property="og:image" content="https://neshjesse.github.io/akornmovers/public/images.png" />
       <meta property="og:url" content="https://neshjesse.github.io/akornmovers" />
       <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Akorn Movers" />
        
        {/* Twitter Card Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Akorn Movers - Where You Move With Dignity" />
    <meta name="twitter:description" content="Reliable and affordable moving services to make your relocation smooth and stress-free." />
    <meta name="twitter:image" content="https://neshjesse.github.io/akornmovers/public/images.png" />

    <link rel="icon" type="image/png" href="https://neshjesse.github.io/akornmovers/public/images.png" />
    <link rel="apple-touch-icon" href="https://neshjesse.github.io/akornmovers/public/images.png" />

        {/* Stylesheets */}
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Voice QR",
            "url": "https://neshjesse.github.io/voiceqr",
            "description": "Preserve voices forever with QR codes linked to audio messages.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://neshjesse.github.io/voiceqr/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }`}
        </script>
      </head>
      <Navbar/>
      <section id="home" className="bg-gray-200 px-6 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Welcome to Akorn Movers where you move with Dignity</h2>
                <p className="text-lg mb-8">Reliable and affordable moving services to make your relocation smooth and stress-free.</p>
                <p className='text-3xl font-bold'>Our Services are offered internationally</p>
                <div className='flex py-12 px-16 items-center justify-between'>
                    <Image src='/globe.jpeg' alt="We operate internationally"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover rounded-lg"></Image>
                </div>
            </div>
    
            <Quote/>
        </div>
      </section>


      <section id="services" className="py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Residential Moving</h3>
                    <p>We offer reliable and affordable residential moving services tailored to your needs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Commercial Moving</h3>
                    <p>Efficient and professional moving services for businesses and commercial spaces.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Packing Services</h3>
                    <p>Expert packing services to ensure your belongings are securely packed and protected.</p>
                
                </div>
            </div>
        </div>
      
      </section>


      <section id="track-record" className="py-16 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Our Track Record</h2>
    <p className="text-lg mb-12">
      Here are some examples of our successful moving services. We take pride in our work and ensure every move is handled with care and professionalism.
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

      



      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center">
               
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-4 mb-8">
                    <p className="text-lg mb-4">"Akorn Movers provided exceptional service. They were on time, professional, and handled our belongings with care. Highly recommend!"</p>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-gray-600">Homeowner</p>
                </div>
              
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-4 mb-8">
                    <p className="text-lg mb-4">"The team at Akorn Movers made our office relocation seamless and stress-free. Their attention to detail was impressive."</p>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-gray-600">Business Owner</p>
                </div>
               
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-4 mb-8">
                    <p className="text-lg mb-4">"Excellent moving service! The crew was friendly and efficient, and everything arrived in perfect condition. Will use again!"</p>
                    <p className="font-semibold">Emily Johnson</p>
                    <p className="text-gray-600">Client</p>
                </div>
            </div>
        </div>
      </section>

     

    <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Akorn Movers. All rights reserved.</p>
        </div>
    </footer>



    </>

  );
}
