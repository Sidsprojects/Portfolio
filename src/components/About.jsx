import React, { useState,useEffect } from "react";
import "./About.css";
import scroll from "../assets/Scroll.png"
export const About = () => {
  const [hideimage,sethideimage] = useState(false)

  useEffect(() => {
   window.addEventListener("scroll",()=>{
    sethideimage(true)
   })
  }, [])

  return (
    <div className="About-info">
      <p>
        I’m a software developer obsessed with precision whether it’s writing
         <b className="light-up"> clean backend logic, sculpting responsive UIs</b>, or chasing down a single
        broken line of code until it gives up. I don’t like loose ends. I like
        systems that are elegant, fast, and tightly engineered from database to
        browser.
      </p>
      <p>
        My core stack: <b className="light-up">JavaScript (React, Node.js), Python (Flask), and
        MongoDB</b>—plus enough battle scars from developing real world apps to know
        that great products aren’t just built, they’re relentlessly debugged.
        I’ve shipped features for fintech platforms, built internal tools from
        scratch, and adapted across tech stacks when the project demanded it. I
        don’t wait to “feel ready” I learn fast, build faster, and clean up the
        mess after.
      </p>
      <p>
        Recently, my focus has sharpened on <b className="light-up">AI</b>—not as a buzzword, but as a tool
        to enhance what I already do. I’ve worked through all <b className="light-up">supervised
        learning models and neural networks</b>, and I’m now leveraging AI to push
        the boundaries of full-stack development: from automating tedious flows
        to exploring how intelligent systems can be embedded directly into the
        products I build.
      </p>
      <p>
        If you want <b className="light-up">professionalism</b>, I can bring that without missing a line.
        But beneath that, there’s an <b className="light-up">obsession</b> that’s hard to explain. My drive
        to write clean, perfect code to understand every edge case, every
        pattern has reached a point where even I struggle to switch it off. I
        don’t just build; I dissect, rebuild, and refine until it feels right.
        It’s more than work now it’s <b className="light-up">compulsion</b>, and it shows in everything I
        ship.
      </p>
      <div className="scroll-ani" >
        {!hideimage && <img src={scroll} alt="scroll" />}
      </div>
    </div>
  );
};
