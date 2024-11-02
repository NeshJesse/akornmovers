import React from 'react'


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Getting Started</li>
                    <li className='py-1'>Documentation</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>System Requirements</li>
                    <li className='py-1'>Release Notes</li>
                </ul>
            </div>
            <div>
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