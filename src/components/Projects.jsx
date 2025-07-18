import React from 'react'
import "./Projects.css"
import armentia from "../assets/Armentia.mp4"
export const Projects = () => {
  return (
    <div className='proj-info'>
      <h1>Projects</h1>
      <div className="card">
        <div className="Image-vid"><video src={armentia} autoPlay loop muted></video></div>
        <div className="inform">
          <h3>
            <b className="light-up">
              <a href="https://github.com/Sidsprojects/Ecommerce-website" target="_blank">
                Fullstack Website - Mern Stack
              </a>
            </b>
          </h3>
          <p className="desc">
            Built a full-stack web app using the MERN stack with user authentication, CRUD functionality, and RESTful APIs. Managed data with MongoDB and created a responsive UI using React.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">React.js</span>
            <span className="blobs">Javascript</span>
            <span className="blobs">Next.js</span>
            <span className="blobs">Node.js</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">MongoDb</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="Image-vid"><video src={armentia} autoPlay loop muted></video></div>
        <div className="inform">
          <h3>
            <b className="light-up">
              <a href="https://github.com/Sidsprojects/Ecommerce-website" target="_blank">
                Fullstack Website - Mern Stack
              </a>
            </b>
          </h3>
          <p className="desc">
            Built a full-stack web app using the MERN stack with user authentication, CRUD functionality, and RESTful APIs. Managed data with MongoDB and created a responsive UI using React.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">React.js</span>
            <span className="blobs">Javascript</span>
            <span className="blobs">Next.js</span>
            <span className="blobs">Node.js</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">MongoDb</span>
          </div>
        </div>
      </div>
    </div>
  )
}

