import React from 'react'
import "./informational.css"
import {About} from "./About"
import {Internships} from "./Internships"
import {Projects} from "./Projects"
import { useEffect } from 'react'

export const Informational = () => {
  function ScrollHashUpdater() {
    useEffect(() => {
      const sections = document.querySelectorAll("section");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              window.history.replaceState(null, null, `#${id}`);
            }
          });
        },
        { threshold: 0.6 }
      );
  
      sections.forEach((section) => observer.observe(section));
  
      return () => observer.disconnect();
    }, []);
  
    return null;
  }
  return (
    
    <div className='right-component'>
      <ScrollHashUpdater/>
      <section id='About' className='informational-comps'>
        <About/>
      </section>
      <section id='Internships' className='informational-comps'>
        <Internships/>
      </section>
      <section id='Projects' className='informational-comps'>
        <Projects/>
      </section>
    </div>
  )
}

