import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative">
      <img src="https://media.istockphoto.com/id/1382828716/photo/close-up-of-woman-receiving-mothers-day-greeting-card-from-her-daughter.jpg?s=612x612&w=0&k=20&c=Gb7fql_o4C1PZX1AE-0F6T1F6_qReS0-sDdhbUEcTB8=" alt="Mother's Day" className="w-full h-64 object-fill" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-trasparent bg-opacity-30">
        <h2 className="text-3xl font-bold">When Is The Best Time To Hug Your Mom?</h2>
        <button className="mt-4 bg-pink-500 px-4 py-2 rounded hover:bg-pink-600">Read More</button>
      </div>
    </div>
  )
}

export default HeroSection

