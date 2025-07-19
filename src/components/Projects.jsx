import React from 'react'
import "./Projects.css"
import armentia from "../assets/Armentia.mp4"
import quickshine from "../assets/Quickshine.mp4"
import bank from "../assets/Hoobank.mp4"
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
                FullStack Website - MERN stack
              </a>
            </b>
          </h3>
          <p className="desc">
            Built a full-stack Website using React.js, Node.js, and MongoDB with user authentication, CRUD operations, and RESTful APIs. Designed a responsive UI and managed data efficiently through custom backend logic.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">VanillaJs</span>
            <span className="blobs">Next.js</span>
            <span className="blobs">Node.js</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">Github</span>
            <span className="blobs">MongoDb</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="Image-vid"><video src={quickshine} autoPlay loop muted></video></div>
        <div className="inform">
          <h3>
            <b className="light-up">
              <a href="https://github.com/Sidsprojects/Ecommerce-website" target="_blank">
                Customer Dashboard
              </a>
            </b>
          </h3>
          <p className="desc">
            Built a full-stack dashboard using Vanilla JavaScript, Node.js, and MongoDB with user authentication, CRUD operations, and RESTful APIs. Designed a responsive UI and managed data efficiently through custom backend logic.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">VanillaJs</span>
            <span className="blobs">Next.js</span>
            <span className="blobs">Node.js</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">Github</span>
            <span className="blobs">MongoDb</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="Image-vid"><video src={bank} autoPlay loop muted></video></div>
        <div className="inform">
          <h3>
            <b className="light-up">
              <a href="https://github.com/Sidsprojects" target="_blank">
                React UI/Figma
              </a>
            </b>
          </h3>
          <p className="desc">
            Transformed a Figma prototype into a high-fidelity, responsive landing page using React, implementing modern UI/UX principles, component-driven architecture, and pixel-perfect design execution to ensure seamless user interaction and visual consistency across devices.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">React.js</span>
            <span className="blobs">Figma</span>
            <span className="blobs">Tailwind Css</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">Github</span>
          </div>
        </div>
      </div>
      <h3>And Many More on :- <a href="https://github.com/Sidsprojects" className='git-link' target='_blank'>https://github.com/Sidsprojects</a></h3>
    </div>
  )
}

