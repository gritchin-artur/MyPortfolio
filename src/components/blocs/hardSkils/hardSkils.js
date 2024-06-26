import { HardSkilsContainer } from "./hardSkils.styled";

export default function HardSkils() {
  return (
    <HardSkilsContainer id="section-hard-skils">
      <h2 className="TitleHardSkils">Hard Skils</h2>
      <ul className="SkilsList">
        <li className="SkilsElement">
          <a className="Link" href="https://ru.wikipedia.org/wiki/HTML">
          <img
            className="Img"
            alt="HTML"
            src="https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Html-Filetype-icon.png"
            width="128"
            height="128"
          />
            <p className="TextSkil">HTML</p>
            </a>
        </li>
        <li className="SkilsElement">
          <a className="Link" href="https://ru.wikipedia.org/wiki/CSS">
          <img
            className="Img"
            alt="CSS"
            src="https://icons.iconarchive.com/icons/icons8/ios7/128/Files-Css-Filetype-icon.png"
            width="128"
            height="128"
          />
            <p className="TextSkil">CSS</p>
            </a>
        </li>
        <li className="SkilsElement">
          <a className="Link" href="https://ru.wikipedia.org/wiki/JavaScript">
          <img
            className="Img"
            alt="Java Script"
            src="https://icons.iconarchive.com/icons/fa-team/fontawesome-brands/128/FontAwesome-Brands-Node-Js-icon.png"
            width="128"
            height="128"
          />
            <p className="TextSkil">Java Script</p>
            </a>
        </li>
        <li className="SkilsElement">
          <a className="Link" href="https://ru.wikipedia.org/wiki/React">
          <img
            className="Img"
            alt="React"
            src="https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/react-icon.png"
            width="128"
            height="128"
          />
            <p className="TextSkil">React</p>
            </a>
        </li>
        <li className="SkilsElement">
           <a className="Link" href="https://ru.wikipedia.org/wiki/Redux">
          <img
            className="Img"
            alt="Redux"
            src="https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/redux-icon.png"
            width="128"
            height="128"
          />
            <p className="TextSkil">Redux</p>
            </a>
        </li>
        <li className="SkilsElement">
          <a className="Link" href="https://ru.wikipedia.org/wiki/NodeJS">
          <img
            className="Img"
            alt="Node"
            src="https://icons.iconarchive.com/icons/fa-team/fontawesome-brands/128/FontAwesome-Brands-Node-icon.png"
            width="128"
            height="128"
          />
            <p className="TextSkil">Node</p>
            </a>
        </li>
      </ul>

      <h2 className="TitleSoftSkils">My Soft Skils</h2>

      <div className="SoftSkilsListContainer">
              <ul className="SoftSkilsList">
        <li className="SoftSkilsItem">Organized</li>
        <li className="SoftSkilsItem">Purposeful</li>
        <li className="SoftSkilsItem"> Resourceful</li>
        <li className="SoftSkilsItem">Hardworking</li>
        <li className="SoftSkilsItem">With the ability to work in a team</li>
        <li className="SoftSkilsItem">I always achieve my goals</li>
      </ul>
</div>
    </HardSkilsContainer>
  );
}
