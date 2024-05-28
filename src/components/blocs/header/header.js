import { useEffect, useMemo, useState } from "react";
import { HeaderMainContainer, ModalWindow } from "./header.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
    const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    const rootElement = document.getElementById("root");

    const handleClickOutside = (e) => {
      setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    rootElement.addEventListener("click", handleClickOutside);
    // document.body.style.cssText = `overflow: hidden;`;

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      rootElement.removeEventListener("click", handleClickOutside);
      // document.body.style.cssText = `overflow: auto; `;
    };
  }, [isOpen]);

  const scrollToSection = (sectionName) => {
    if (sectionName === "portfolio") {
      
    }
    const section = document.getElementById(`section-${sectionName}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const portfolioSection = document.getElementById("section-portfolio");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsPortfolioVisible(true);
        } else {
          setIsPortfolioVisible(false);
        }
      });
    }, {
      threshold: 0.5
    });

    if (portfolioSection) {
      observer.observe(portfolioSection);
    }

    return () => {
      if (portfolioSection) {
        observer.unobserve(portfolioSection);
      }
    };
  }, []);

  const renderedModalWindow = useMemo(() => {
    return createPortal(
      <ModalWindow open={isOpen}>
        <ul className="HeaderList">
          <li className="HeaderItem" onClick={() => scrollToSection("main")}>
            Main
          </li>
          <li className="HeaderItem" onClick={() => scrollToSection("aboutMe")}>
            About me
          </li>
          <li
            className="HeaderItem"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="HeaderItem"
            onClick={() => scrollToSection("hard-skils")}
          >
            Skils
          </li>
          <li
            className="HeaderItem"
            onClick={() => scrollToSection("contacts")}
          >
            Contacts
          </li>
        </ul>
      </ModalWindow>,
      modalRoot
    );
  }, [isOpen]);

  return (
    <HeaderMainContainer open={isOpen}>
      <div className="BurgerMenu" onClick={toggleMenu}>
        {/* <span className="BurgerLine" /> */}
        <span className="BurgerLine" style={{ position: "relative", top: 0 }} />
        <span className="BurgerLine" style={{ position: "relative", top: 0 }} />
        <span className="BurgerLine" style={{ position: "relative", top: 0 }} />
      </div>
      {renderedModalWindow}
      <ul className="HeaderList">
        <li className={`HeaderItem ${isPortfolioVisible ? 'active' : ''}`} onClick={() => scrollToSection("main")}>
          Main
        </li>
        <li className={`HeaderItem ${isPortfolioVisible ? 'active' : ''}`} onClick={() => scrollToSection("aboutMe")}>
          About me
        </li>
        <li className={`HeaderItem ${isPortfolioVisible ? 'active' : ''}`} onClick={() => scrollToSection("portfolio")}>
          Portfolio
        </li>
        <li
          className={`HeaderItem ${isPortfolioVisible ? 'active' : ''}`}
          onClick={() => scrollToSection("hard-skils")}
        >
          Skils
        </li>
        <li className={`HeaderItem ${isPortfolioVisible ? 'active' : ''}`} onClick={() => scrollToSection("contacts")}>
          Contacts
        </li>
        </ul>
    </HeaderMainContainer>
  );
}
