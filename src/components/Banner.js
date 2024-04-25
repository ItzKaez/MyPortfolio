import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/daniel.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(90 - Math.random() * 30);
  const [index, setIndex] = useState(1);
  const toRotate = [ "21 years old", "a computer science student" ];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    if (isPaused) return;
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      if (delta <= 40) {
      setDelta(40);
      } else {
      setDelta(prevDelta => prevDelta / 1.5);
      }
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(90);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <div>
        <TrackVisibility>
          {({ isVisible }) =>
            <h1 className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              {`Hi! I'm Daniel, and I'm `} 
              <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "21 years old", "a computer science student" ]'>
                <span className="wrap">{text}</span>
              </span>
            </h1>
          }
        </TrackVisibility>
      </div>
      <div>
        <p>
          Welcome to my portfolio! I'm Daniel, a computer science student passionate about exploring various aspects of technology. Dive into my projects and academic journey. Currently seeking opportunities to learn and grow in the field of computer science.</p>
        <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
      </div>
      <div id="scroll-target" style={{height: '50px', marginTop: '-50px', visibility: 'hidden'}}></div>
      <section id="scroll-target">
      </section>
    </section>
  )
}
