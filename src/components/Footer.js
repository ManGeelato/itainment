import React from "react";

// please read Comments.txt file first
const Footer = () => {
  const todayDate = new Date();
  return (
    <footer id="footer">
      <p>Copyright &copy; {todayDate.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
