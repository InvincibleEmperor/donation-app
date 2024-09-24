import React from 'react'
import Outer from '../component/HOC/Outer'
import banner from '../assets/donation-banner.webp'
import img1 from '../assets/akc-scheck-02.png'
const ComFour = () => {
  return (
    <Outer>

   

<div>
<div className="relative flex flex-col bg-white shadow-sm border border-slate-200 w-96 rounded-lg my-6">
  
  <div className="flex flex-col gap-4 p-2 m-auto">
    <div className="w-full max-w-sm min-w-52">
    </div>
 
    <div className="inline-flex items-center ml-3">
    <button class="rounded-lg bg-red-400 py-2 px-12 mr-4 border border-transparent text-center text-md text-white " type="button">
      50 meals <p>₹ 750</p>
    </button>
    <button class="rounded-lg bg-white-200 py-2 px-11 mr-4 border text-center text-md text-gray-400 transition-all hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400  hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      100 meals <p>₹ 1500</p>
    </button>
    </div>
     <div className="inline-flex items-center mt-2 ml-3">
     <button class="rounded-lg bg-white-200 py-2 px-11 ml-0 mr-3 border text-center text-md text-gray-400 transition-all hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400  hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      200 meals <p>₹ 3000</p>
    </button>
    <button class="rounded-lg bg-white-200 py-5 px-14 ml-1 mr-4 border text-center text-md text-gray-400 transition-all hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400  hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Other
    </button>
    </div>
  </div>
  <div className="p-6 pt-0">
  <p className="flex justify-center mt-6 text-sm bg-gray-100 px-1 py-1 pl-3 rounded-sm text-slate-600" >
      To address mainutrition in india. We would nees to serve 250 nutritious meals to each child every academic year.
    </p>
    <button className="w-full max-w-sm min-w-[200px] rounded-md bg-red-400 py-3 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-red-400 focus:shadow-none active:bg-red-400 hover:bg-red-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
    Pledge your contribution here
    </button>
    
  </div>
</div>
</div>

    </Outer>
  )
}

export default ComFour