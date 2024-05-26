import { useEffect, useState } from "react";
import { AboutMeContainer } from "./aboutMe.styled";
import { useSpring, animated } from "react-spring";

export default function AboutMe() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationPropsLeft = useSpring({
    opacity: scrollY < 200 ? 0 : 1,
    transform: scrollY < 200 ? "translateX(-400px)" : "translateX(0)",
  });

  const animationPropsRight = useSpring({
    opacity: scrollY < 100 ? 0 : 1,
    transform: scrollY < 100 ? "translateX(100%)" : "translateX(0)",
  });
  return (
    <AboutMeContainer id="section-aboutMe">
      <h2 className="TitleAboutMe">About Me</h2>
      <animated.p className="TextAboutMe" style={animationPropsLeft}>
        Hello! I am a beginner Full Stack Developer who loves to face new
        challenges and the ability to solve them. I approach my work responsibly
        and deliver it with high quality. I am always ready to learn and do
        something new. I am a hard worker, persistent and responsible. I can
        work both independently and in a team. I like to conquer new heights.
      </animated.p>

      <animated.p className="TextWhoIWas" style={animationPropsRight}>
        I used to be a delivery driver, but I decided to radically change my
        life. I signed up for IT courses. At first it was difficult, but I was
        determined to learn programming and managed to master a new profession.
          </animated.p>
          
                <animated.p className="TextWhoIWas" style={animationPropsLeft}>

So if you really want something, do it and never give up.
don't give up on your dreams. Always learn something new and don't sit in one place.
      </animated.p>
    </AboutMeContainer>
  );
}
