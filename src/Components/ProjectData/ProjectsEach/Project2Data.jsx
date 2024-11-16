import React from 'react'

export default function Project2Data({setId,id}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-20">
    <div className="font-extrabold text-4xl">
      <span>Skill Up</span>
    </div>

    <div className="flex flex-col justify-center items-center text-wrap m-3 w-full">
      <div className="text-xl">Description</div>
      <div className="m-2">
        <p className="text-wrap">
        A full-stack web application that enables instructors to create 
        and sell courses while allowing students to browse and purchase them.
        </p>
      </div>
    </div>
    <hr className=" bg-black h-1 w-full" />

    <div className="flex flex-col justify-center items-center text-wrap m-3 w-full ">
      <div className="text-xl">Tools:</div>
      <div className="flex justify-evenly w-full">
        <div className="font-bold">FrontEnd:</div>
        <div>
          <ul>
            <li>React.js</li>
            <li>Framer</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
      <hr className=" bg-black h-1 w-full" />
      <div className="flex justify-evenly w-full">
        <div className="font-bold">BackEnd:</div>
        <div>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Mongo</li>
            <li>JWT</li>
            <li>Bcrypt</li>
          </ul>
        </div>
      </div>
      <hr className=" bg-black h-1 w-full m-2" />

      <div className="flex">
        Live Link :
        <a
          className="bg-cyan-900 text-white p-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://skillup-7dhp.onrender.com/"
        >
          Go to Website
        </a>
      </div>

      <div>
        <button
          className="bg-cyan-800 text-white p-2 m-2 "
          onClick={() => {
            setId(null);
          }}
        >
          Shrink
        </button>
      </div>
    </div>
  </div>
  )
}
