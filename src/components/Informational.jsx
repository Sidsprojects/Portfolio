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
      <section id='Projects' className='informational-comps'>
      <footer class="Footer"><p>Loosely designed in <a href="https://www.figma.com/" target="_blank" rel="noreferrer noopener" aria-label="Figma (opens in a new tab)">Figma </a>and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)">Visual Studio Code</a> by Siddharth Shukla. Built with <a href="https://https://react.dev/learn" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)"> React.js </a>and deployed with <a href="https://vercel.com/"  target="_blank" rel="noreferrer noopener" aria-label="Vercel (opens in a new tab)">Vercel</a>. All text is set in the <a href="https://rsms.me/inter/"  target="_blank" rel="noreferrer noopener" aria-label="Inter (opens in a new tab)">Inter</a> typeface.</p></footer>
      </section>
    </div>
  )
}

