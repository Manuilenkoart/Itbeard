import React from "react";
import chanelData from "../Data/ChanelDescription";
import CSS from "./Footer.module.css";
const Footer = () => {
  const mailBox = chanelData[0].descriptionChanel.mail;
  const email = chanelData[0].descriptionChanel.email;

  return (
    <div className={CSS.wrapper}>
      <div className={CSS.container}>
        <ul className={CSS.mailList}>
          <li className={CSS.mailItem}>
            <p className={CSS.mailBoxDescrip}>
              Адрес для ваших открыток и посылочек:
            </p>
            <p className={CSS.mailBox}>{mailBox}</p>
          </li>
          <li className={CSS.mailItem}>
            <p className={CSS.mailBoxDescrip}>Электронный адрес:</p>
            <a href={`mailto:${email}`} className={CSS.emailLink}>
              {email}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
