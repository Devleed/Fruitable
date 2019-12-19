import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import history from "../history";

const style = {
  color: "DeepPink"
};

const Navbar = props => {
  const [selected, setSelected] = useState("Home");
  const isSignedIn = useSelector(({ signedInUser }) => signedInUser);
  const handleItemClick = (e, { name }) => {
    setSelected(name);
    if (name === "LogIn" || name === "LogOut") {
      if (!isSignedIn) {
        props.signIn();
      } else {
        props.signOut();
      }
    } else if (name === "Add Item") {
      history.push("/add/item");
    } else if (name === "Home") {
      history.push("/home");
    } else if (name === "Cart") {
      history.push("/user/cart");
    }
  };
  if (props.location.pathname === "/") {
    return null;
  }
  return (
    <Menu pointing secondary>
      <Menu.Item
        style={style}
        name="Home"
        active={selected === "Home"}
        onClick={handleItemClick}
      />
      {!isSignedIn ? null : (
        <React.Fragment>
          <Menu.Item
            style={style}
            name="Cart"
            active={selected === "Cart"}
            onClick={handleItemClick}
          />
          <Menu.Item
            style={style}
            name="Add Item"
            active={selected === "Add Item"}
            onClick={handleItemClick}
          />
        </React.Fragment>
      )}
      <Menu.Menu position="right">
        <Menu.Item
          style={style}
          name={isSignedIn ? "LogOut" : "LogIn"}
          active={selected === "LogOut" || selected === "LogIn"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(Navbar);
