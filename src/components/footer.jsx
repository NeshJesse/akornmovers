import React from 'react'


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            
            <div>
                <h6 className='font-bold uppercase pt-2'>Links</h6>
                <ul>
                    <li className='py-1'><a href="#moving-process">Our moving process</a></li>
                    <li className='py-1'><a href="#services">Services</a></li>
                    <li className='py-1'><a href="#quoteform">Get Quote</a></li>
                    <li className='py-1'><a href="/gallery">Gallery</a></li>
                </ul>
            </div>
            <div>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Contact Us or get in touch</p>
                <p className='py-4'>Feel free to shoot us a message.</p>
                <ul>
                    <li>Email: akornserviceslimited@gmail.com</li>
                    <li>Phone; +254 789 374 217</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Location</p>
                <p className='py-4'>OPEN 24 HOURS MONDAY TO SATURDAY</p>
                <p className='py-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8522921600693!2d36.79984318885499!3d-1.260853799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17e441790ac7%3A0x96af478219af41cd!2sKenrail%20Towers!5e0!3m2!1sen!2ske!4v1730631575472!5m2!1sen!2ske" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </p>
                
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Akorn Movers All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            
        </div>
        </div>
    </div>
  )
}

export default Footer