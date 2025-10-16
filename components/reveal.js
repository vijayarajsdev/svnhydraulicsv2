'use client';
import React, { useEffect, useRef, useState } from 'react'

const Reveal = ({children,direction="up",delay=0}) => {
    const ref=useRef(null);
    const [isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const observer=new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setIsVisible(true);
                }
            },{threshold:0.2}
        )
        const element=ref.current;
        if(element) observer.observe(element);
        return()=>{
            if(element)observer.unobserve(element)
        }
    },[])
    const directions = {
    up: "translateY(25px)",
    down: "translateY(-25px)",
    left: "translateX(25px)",
    right: "translateX(-25px)",
  };
  return (
      <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : directions[direction],
        transition: `all 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default Reveal;