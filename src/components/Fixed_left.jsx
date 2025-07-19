import React from "react";
import "./Fixed_left.css";
import me from "../assets/me5.jpeg";
import git from "../assets/github.png";
import gmail from "../assets/gmail.png";
import insta from "../assets/instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import stoverfl from "../assets/socials.png";
import { useRef, useEffect, useState } from "react";

export const Fixed_left = () => {
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
            history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const imageRef = useRef();
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  const handleMouseMove = (e) => {
    const el = imageRef.current;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -30;
    const rotateY = ((x - centerX) / centerX) * 30;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="left-component">
      <div className="related-info">
        <h1>Siddharth Shukla</h1>
        <h2>Software Developer</h2>
        <p className="small-desc">
          Full Stack Web Developer (MERN / MEAN) | Building ML & AI Projects.
        </p>
      </div>
      <div
        className="my-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img ref={imageRef} src={me} alt="Siddhart_shukla" />
      </div>
      <div className="routing">
        <a href="#About" className={activeSection === "#About" ? "active-link" : "route-links"}>
          <span></span>
          <p>About</p>
        </a>
        <a href="#Internships" className={activeSection === "#Internships" ? "active-link" : "route-links"}>
          <span></span>
          <p>Internships</p>
        </a>
        <a href="#Projects" className={activeSection === "#Projects" ? "active-link" : "route-links"}>
          <span></span>
          <p>Projects</p>
        </a>
      </div>
      <div className="socials">
        <a href="https://github.com/Sidsprojects" target="_blank">
          <img src={git} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/siddharthshukla15/"
          target="_blank"
        >
          <img src={LinkedIn} alt="linkedIn" />
        </a>
        <a
          href="https://stackoverflow.com/users/23886579/siddharth-shukla"
          target="_blank"
        >
          <img src={stoverfl} alt="stackoverflow" />
        </a>
        <a href="https://www.instagram.com/shukla_sid15" target="_blank">
          <img src={insta} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};
