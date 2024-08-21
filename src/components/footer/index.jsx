import React from "react";
import { footerStyle } from "./style";
import { Link } from "react-router-dom";
// import siteLogo from "../../assets/images/site-logo.svg";
import siteLogo from "../../assets/images/mmltb.png";

export const Footer = () => {
  const classes = footerStyle();
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" />
                </Link>
              </div>
              <p className="copyright-text">
                {/* © 2015 Tatvasoft.com. All rights reserved. */}
                {/* © 2015 MindsMaven IT Solutions. All rights reserved. */}
                © {year} MindsMaven IT Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
