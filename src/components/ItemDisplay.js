import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Segment, Container } from "semantic-ui-react";
import * as firebase from "firebase/app";
import "firebase/database";
import { getItem } from "../actions";
import ItemJSX from "./ItemJSX";
import history from "../history";

const ItemDisplay = props => {
  const { type, name } = props.match.params;
  const dispatch = useDispatch();
  const item = useSelector(({ selectedItem }) => selectedItem);
  const userId = useSelector(({ signedInUser }) => signedInUser);
  useEffect(() => {
    if (!userId) {
      alert("Login First");
      history.push("/home");
    } else {
      (async () => {
        const data = await getItem(type, name);
        dispatch({ type: "GET_ITEM", payload: data });
      })();
    }
  }, [type, name, dispatch, userId]);
  const addToCart = amount => {
    firebase
      .database()
      .ref()
      .child("Carts")
      .child(userId)
      .child(item.name)
      .set({
        name: item.name,
        price: Number(amount) * Number(item.price)
      })
      .then(() => {
        alert("added");
        history.push("/user/cart");
      });
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <Segment>
        <ItemJSX item={item} addItemToCart={addToCart} />
      </Segment>
    </Container>
  );
};

export default ItemDisplay;
