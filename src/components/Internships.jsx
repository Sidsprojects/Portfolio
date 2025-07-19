import React from "react";
import "./Internships.css";

export const Internships = () => {
  return (
    <div className="intern-info">
      <h1>Internships</h1>
      <div className="card">
        <div className="date">01/03/2025 - 01/05/2025</div>
        <div className="inform">
          <h3>
            <b className="light-up">
              <a href="https://www.quickshine.co" target="_blank">
                Software Development Intern . Quickshinex
              </a>
            </b>
          </h3>
          <p className="desc">
            Developed and optimized 80% of the dynamic pages using Next.js
            features like static site generation (SSG) and server-side rendering
            (SSR), resulting in a 35% improvement in page load times and better
            SEO performance.
          </p>
          <p className="desc">
            Created a reusable component system, reducing repetitive code by 40%
            and accelerating future development cycles across multiple sections
            of the QuickShine.co website.
          </p>
          <p className="desc">
            Integrated third-party APIs and managed state efficiently, improving
            overall user experience and reducing API-related UI glitches by over
            50% through better error handling and loading states.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">Javascript</span>
            <span className="blobs">Next.js</span>
            <span className="blobs">Node.js</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">MongoDb</span>
            <span className="blobs">Github</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="date">01/11/2023 - 01/01/2024</div>
        <div className="inform">
          <h3>
            <b className="light-up">
              <a href="https://www.billmart.com" target="_blank">
                Web Development Intern . Billmart Fintech
              </a>
            </b>
          </h3>
          <p className="desc">
            Optimized the official BillMart site (www.billmart.com) by reducing
            unused JavaScript/CSS and optimizing image formats, boosting overall
            speed by 25%.
          </p>
          <p className="desc">
            Built a step-by-step, user-friendly side navigation progress
            tracker, reducing user-reported task navigation issues by 20% based
            on feedback from 10 testers.
          </p>
          <p className="desc">
            Designed a sleek, responsive mobile interface with touch-friendly
            components and intuitive navigation to enhance cross-device
            usability.
          </p>
          <p className="desc">
            Gained hands-on experience with Node.js, including npm, error
            handling, core modules (fs, path), and asynchronous programming
            using callbacks, Promises, and async/await for non-blocking
            operations.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">Javascript</span>
            <span className="blobs">Angular.js</span>
            <span className="blobs">Node.js</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">React.js</span>
            <span className="blobs">Github</span>
          </div>
          <div className="skills"></div>
        </div>
      </div>
      <div className="card">
        <div className="date">01/11/2023 - 01/01/2024</div>
        <div className="inform">
          <h3>
            <b className="light-up">
              <a href="https://www.cranesvarsity.com" target="_blank">
                Web Development Intern . Cranes Varsity
              </a>
            </b>
          </h3>
          <p className="desc">
            Successfully developed a quiz application using ReactJS with an
            intuitive, responsive user interface for seamless cross-device
            experience.
          </p>
          <p className="desc">
            Implemented diverse question types-including multiple- choice,
            true/false, and short answer-to accommodate various learning styles
            and enhance user engagement.
          </p>
          <h5>Skills</h5>
          <div className="skills">
            <span className="blobs">Javascript</span>
            <span className="blobs">Angular.js</span>
            <span className="blobs">Node.js</span>
            <span className="blobs">UI/UX</span>
            <span className="blobs">React.js</span>
            <span className="blobs">Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};
