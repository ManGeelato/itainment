import React from "react";

const Footer = () => {
  const todayDate = new Date();
  return (
    <footer id="footer">
      <p>Copyright &copy; {todayDate.getFullYear()}</p>
    </footer>
  );
};
export default Footer;
// I created Footer component which shows the current year and copyright logo.
