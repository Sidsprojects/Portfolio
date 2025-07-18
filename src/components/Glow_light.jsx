import React from 'react'
import { useState,useEffect } from 'react'

export const Glow_light = () => {
    const [position,Setposition] = useState({x:0,y:0})

  useEffect(() => {
    const handleMouse = (e)=>{
      Setposition({x:e.pageX,y:e.pageY})
    }
    window.addEventListener("mousemove",handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [position])
  const lightStyle = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: '60vw',
    height: '70vh',
    background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
    borderRadius: '50%',
    pointerEvents: 'none',
    mixBlendMode: 'screen',
    filter: 'blur(50px)',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    overflow: "hidden",
  }
  return (
    <div style={lightStyle}></div>
  )
}

