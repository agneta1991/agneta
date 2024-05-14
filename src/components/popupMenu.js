import React, { useState } from "react";

const Popup = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePhoneHover = () => {
    setShowPhone(true);
  };

  const handlePhoneLeave = () => {
    setShowPhone(false);
  };

  const handleEmailHover = () => {
    setShowEmail(true);
  };

  const handleEmailLeave = () => {
    setShowEmail(false);
  };

  const handlePhoneClick = () => {
    copyToClipboard("+37069486935");
  };

  const handleEmailClick = () => {
    copyToClipboard("a.pupienyte@gmail.com");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((error) => {
        console.error("Unable to copy:", error);
        alert("Failed to copy to clipboard!");
      });
  };

  return (
    <div className="popup-container">
      <div
        onMouseEnter={handlePhoneHover}
        onMouseLeave={handlePhoneLeave}
        onClick={handlePhoneClick}
        className="popup"
      >
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/phone.png"
          alt="phone"
        />
        {showPhone && <p className="popup-text">+37069486935</p>}
      </div>
      <div
        onMouseEnter={handleEmailHover}
        onMouseLeave={handleEmailLeave}
        onClick={handleEmailClick}
        className="popup"
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-sharp/24/mail.png"
          alt="mail"
        />
        {showEmail && <p className="popup-text">a.pupienyte@gmail.com</p>}
      </div>
      {copied && <p className="copied-text">Copied to clipboard!</p>}
    </div>
  );
};

export default Popup;
