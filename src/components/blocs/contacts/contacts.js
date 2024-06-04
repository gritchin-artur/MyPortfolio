import { ContactsContainer } from "./contacts.styled";
import { ReactComponent as Phone } from "../../../img/svg/phone-call_5070407.svg";
import { ReactComponent as Email } from "../../../img/svg/mailbox_7653238.svg";
import { ReactComponent as PaperAirPlane } from "../../../img/svg/paperAirplane.svg";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contacts() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
serviceId,
      templateId,
      formData,
      userId
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        setFormData({
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email.");
      });
  };
  console.log(formData)
  return (
    <ContactsContainer id="section-contacts">
      <div className="ContentContainer">
        <div className="ContactContainer">
          <h3 className="ContactsTitle">My contact information:</h3>
          <ul className="ContactsList">
            <li className="ContactItem">
              <Phone style={{fill:"white", marginRight:"10px"}}/> My telephone number:
            </li>
            <li className="ContactItem">
              <a href="tel:+380685423675" className="Contact">
                +380685423675
              </a>
            </li>
            <li className="ContactItem">(Viber, WatsApp, Telegram)</li>
            <li className="ContactItem">
              <Email style={{fill:"white", marginRight:"10px"}}/> My email:
            </li>
            <li className="ContactItem">
              <a href="mailto:grit4in0225@icloud.com" className="Contact">
                grit4in0225@icloud.com
              </a>
            </li>
          </ul>
          <p className="CreatedBy">© Created by Hrytchyn Artur</p>
        </div>
      </div>
      <div className="FormContainer">
        <form className="Form" onSubmit={handleSubmit}>
          <h2 className="TitleForm">Contact Me:</h2>
          <input
            className="InputEmail"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="InputMessage"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="ButtonSubmit" type="submit">
            Submit <PaperAirPlane style={{ width: "20px", height: "20px" }} />
          </button>
        </form>
      </div>
    </ContactsContainer>
  );
}
