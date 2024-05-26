import React, { useEffect, useState } from "react";
import { MainContainer } from "./main.styled";
import Artur from "../../../img/imgonline-com-ua-Black-White-77PXQWGAXrYW-removebg-preview.png";
import Git from "../../../img/socialNetworks/free-icon-github-733609 (2).png";
import Viber from "../../../img/socialNetworks/free-icon-viber-3670033.png";
import Watsapp from "../../../img/socialNetworks/free-icon-whatsapp-254409.png";
import Linkidin from "../../../img/socialNetworks/free-icon-linkedin-3669739.png";
import Telegram from "../../../img/socialNetworks/free-icon-telegram-2175366.png";
import MyCV from "../../../myCV/Artur_Hrytchyn_developer.pdf";
import { useSpring, animated } from "react-spring";

export default function Main() {
  const handleDownLoadCV = () => {
    const link = document.createElement("a");
    link.href = MyCV;
    link.download = "Artur_Hrytchyn_developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    opacity: scrollY > 100 ? 0 : 1,
    transform: scrollY > 100 ? "translateX(-100px)" : "translateX(0)",
  });

  const animationPropsRight = useSpring({
    opacity: scrollY > 100 ? 0 : 1,
    transform: scrollY > 100 ? "translateX(100px)" : "translateX(0)",
  });

  return (
    <MainContainer id="section-main">
      <div className="ContentContainer">
        <animated.h1 className="TitleContainer" style={animationPropsLeft}>
          Hello, I’m Artur,
        </animated.h1>
        <animated.p className="TitleDeveloper" style={animationPropsRight}>
          Full Stack Developer
        </animated.p>
        <animated.div style={animationPropsLeft}>
          <div className="MyCVContainer" onClick={handleDownLoadCV}>
            Download My CV
          </div>
        </animated.div>
      </div>
      <img className="MyPhoto" alt="Artur" src={Artur} />
      <animated.ul className="ContactsList" style={animationPropsRight}>
        <li className="ContactsItem">
          <a className="Link" href="https://github.com/gritchin-artur">
            <img alt="Git" src={Git} />
          </a>
        </li>
        <li className="ContactsItem">
          <a
            className="Link"
            href="https://www.linkedin.com/in/artur-hrytchyn/"
          >
            <img alt="Linkidin" src={Linkidin} />
          </a>
        </li>
        <li className="ContactsItem">
          <a className="Link" href="https://wa.me/380685423675">
            <img alt="Watsapp" src={Watsapp} />
          </a>
        </li>
        <li className="ContactsItem">
          <a className="Link" href="https://t.me/grit4inartur">
            <img alt="Telegram" src={Telegram} />
          </a>
        </li>
        <li className="ContactsItem">
          <a className="Link" href="viber://chat?number=%2B380685423675">
            <img alt="Viber" src={Viber} />
          </a>
        </li>
      </animated.ul>
    </MainContainer>
  );
}
