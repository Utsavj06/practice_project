import React from "react";
import styled from "./footer.module.css";
import Logo from "../assents/Img/logo.jpg";
import FB from "../assents/Img/f_logo.png";
import instagram from "../assents/Img/instagram.png";
import linkedin from "../assents/Img/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className={styled.top}>
        <div className={styled.logos}>
          <img src={Logo} style={{ width: "70px", height: "70px" }} />
          <div className={styled.socialMedia}>
            <img src={FB} style={{ width: "30px", height: "30px" }} />
            <img
              src={instagram}
              style={{ width: "30px", borderRadius: "20px", height: "30px" }}
            />
            <img src={linkedin} style={{ width: "30px", height: "30px" }} />
          </div>
        </div>
        <div className={styled.footerList}>
          <h2>Quick Link</h2>
          <ul className={styled.footerListul}>
            {[
              "About",
              "FAQS",
              "Privacy Policies",
              "Terms & Conditions",
              "Refund & Cancellation",
            ].map((item, index) => {
              return (
                <li key={index} style={{}}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Explore</h2>
          <ul className={styled.footerListul}>
            {["Arnes", "Studios", "Nutitions"].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className={styled.footerListul}>
            {[
              "Arapali Silicon",
              "Sector 8, Noida",
              "+919378297178",
              "support@wtf.me",
            ].map((item,index)=>{
                return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
