import React from "react";
import PropTypes from "prop-types";

import EmailIcon from "react-icons/lib/fa/envelope";
import "./style.scss";

const whatWeDo = [
  "React & React Native",
  "Javascript & TypeScript",
  "PHP",
  "GraphQL",
  "Node.js",
  "App Development (Objective-C, Swift & Java)",
  "System Architecture",
  "Content Management Systems",
  "WordPress Customization",
  "Video Management & Distribution"
];

const WeDo = ({ children, showEmailButton, onEmailClick }) => (
  <section className="c-we-do">
    <div className="c-we-do-main">
      {children}
      <h4>Here are a few of the things we specialize in:</h4>
      <ul className="list-unstyled">
        {whatWeDo.map(what => <li key={what}>{what}</li>)}
      </ul>
      {showEmailButton && (
        <a
          className="btn"
          onClick={onEmailClick}
          href="mailto:hello@elwood.technology"
        >
          <EmailIcon />
          <span>hello@elwood.technology</span>
        </a>
      )}
    </div>
  </section>
);

WeDo.propTypes = {
  children: PropTypes.node,
  showEmailButton: PropTypes.bool,
  onEmailClick: PropTypes.func
};

WeDo.defaultProps = {
  children: "",
  showEmailButton: true,
  onEmailClick: () => {}
};

export default WeDo;
