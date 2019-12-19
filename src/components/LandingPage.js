import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../style.css";

const style = {
  buttonStyle: {
    backgroundColor: "DeepPink",
    marginTop: "50px"
  },
  linkStyle: {
    color: "white",
    textDecoration: "none"
  },
  container: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)"
  }
};

const LandingPage = () => {
  return (
    <div style={style.container}>
      <div>
        <span
          style={{
            color: "DeepPink",
            fontSize: "70px",
            fontFamily: "'Acme', sans-serif"
          }}
        >
          Welcome To Fruitable
        </span>
        <br />
        <Button icon labelPosition="right" style={style.buttonStyle}>
          <NavLink
            to="/home"
            style={style.linkStyle}
            activeStyle={style.linkStyle}
          >
            Continue
          </NavLink>
          <Icon name="right arrow" />
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
