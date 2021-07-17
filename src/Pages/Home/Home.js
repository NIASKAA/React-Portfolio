import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap'

const Home = () => {
  const header = useRef(null);
  const secondHeader = useRef(null);

  useEffect(() => {
    gsap.fromTo(header.current, {opacity: 0}, {opacity: 1, duration: 2})
    gsap.fromTo(secondHeader.current, {opacity: 0}, {opacity: 1, duration: 3})
  }, []);

    return (
        <div className="bgImage">
          <h1 ref={header} className="mainText">Hello! I'm NIASKA!</h1>
          <h4 ref={secondHeader} className="text-center secondText" id="secondText">"Everything you put out there is a way to express yourself"</h4>
        </div>
    )
}

export default Home
