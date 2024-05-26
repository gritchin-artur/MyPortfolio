import { ContactsContainer } from "./contacts.styled";
import { ReactComponent as Phone } from "../../../img/svg/phone-call-svgrepo-com-2.svg";
import { ReactComponent as Email } from "../../../img/svg/email-svgrepo-com-2.svg";

export default function Contacts() {
    return (
        <ContactsContainer id="section-contacts">
                  <div className="ContentContainer">
                    <div className="ContactContainer">
          <h3 className="ContactsTitle">My contact information:</h3>
          <ul className="ContactsList">
            <li className="ContactItem">
              <Phone /> My telephone number:
              <a href="tel:+380685423675" className="Contact">+380685423675</a> 
                      </li>
                      <li className="ContactItem">(Viber,
              WatsApp, Telegram)</li>
            <li className="ContactItem">
              <Email /> My email:
              <a href="mailto:grit4in0225@icloud.com" className="Contact">grit4in0225@icloud.com</a>
            </li>
          </ul>
                </div>
                </div>
        </ContactsContainer>
    )
}