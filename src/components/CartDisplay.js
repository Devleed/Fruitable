import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Container, Header } from "semantic-ui-react";

import { getCartData } from "../actions";
import history from "../history";

const renderCart = userCart => {
  return userCart.map(item => {
    return (
      <List.Item key={item.name}>
        <List.Content floated="right">{item.price}.00</List.Content>
        <List.Icon name="food" />
        <List.Content>{item.name}</List.Content>
      </List.Item>
    );
  });
};

const CartDisplay = () => {
  const userId = useSelector(({ signedInUser }) => signedInUser);
  const dispatch = useDispatch();
  let userCart = useSelector(({ userCart }) => userCart);

  let total = 0;

  if (userCart) {
    userCart = Object.values(userCart);
    userCart.forEach(({ price }) => {
      total += Number(price);
    });
  }

  useEffect(() => {
    (async () => {
      if (!userId) {
        alert("Login First");
        history.push("/home");
      } else {
        const data = await getCartData(userId);
        dispatch({ type: "CART_DATA", payload: data });
      }
    })();
  }, [dispatch, userId]);

  return (
    <Container text style={{ marginTop: "100px" }}>
      {userCart ? (
        <React.Fragment>
          <List divided relaxed>
            <List.Item>
              <List.Content floated="right">
                <b>Price</b>
              </List.Content>
              <List.Content>
                <b>Unit</b>
              </List.Content>
            </List.Item>
            {renderCart(userCart)}
            <List.Item>
              <List.Content floated="right">
                <b>RS. {total}.00</b>
              </List.Content>
              <List.Content>
                <b>Total</b>
              </List.Content>
            </List.Item>
          </List>
        </React.Fragment>
      ) : (
        <Header as="h1">Cart Is Empty</Header>
      )}
    </Container>
  );
};

export default CartDisplay;
