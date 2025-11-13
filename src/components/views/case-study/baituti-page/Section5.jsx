"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ShuffleText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  const shuffle = (originalText, duration = 1500, interval = 50) => {
    let frame = 0;
    const iterations = duration / interval;

    const shuffleInterval = setInterval(() => {
      let newText = originalText
        .split("")
        .map((char, i) => {
          if (frame < iterations - i * 2) {
            return characters[Math.floor(Math.random() * characters.length)];
          }
          return char;
        })
        .join("");

      setDisplayText(newText);

      frame++;
      if (frame > iterations) {
        clearInterval(shuffleInterval);
        setDisplayText(originalText);
        setIsShuffling(false);
      }
    }, interval);
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isShuffling) {
      setIsShuffling(true);
      shuffle(text);
    }
  }, [inView]);

  return (
    <div ref={ref} className="jumbleLetters">
      <span className="text-4xl font-mono text-white">{displayText || text}</span>
    </div>
  );
};

export default function Section5() {
  return (
    <section className="caseStudySec04">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text">
              <h6>tYPOGRAPHY</h6>
              <h2>Helvetica Neue</h2>

              <div className="jumbleLettersMain">
                <ShuffleText text="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
                <ShuffleText text="abcdefghijklmnopqrstuvwxyz" />
                <ShuffleText text="01234567890!@#$%^&*()" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
