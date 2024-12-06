import React from 'react'

export default function Project3Data({setId,id}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-20">
    <div className="font-extrabold text-4xl">
      <span>Skill Up</span>
    </div>

    <div className="flex flex-col justify-center items-center text-wrap m-3 w-full">
      <div className="text-xl">Description</div>
      <div className="m-2">
        <p className="text-wrap">
        This is a real-time chat application where users can create, join, and chat within rooms. The frontend is built using React with TypeScript, while the backend is developed using Node.js and Express. The app utilizes WebSocket (WSS) for real-time communication within rooms, allowing users to chat and interact instantaneously. HTTPS is used for secure communication and for handling user login, registration, and storing chat data.
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
            <li>Typescript</li>
            <li>TailWind</li>
          </ul>
        </div>
      </div>
      <hr className=" bg-black h-1 w-full" />
      <div className="flex justify-evenly w-full">
        <div className="font-bold">BackEnd:</div>
        <div>
          <ul>
            <li>WebSockets</li>
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
          href="https://chatfrontendaj.netlify.app/"
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
