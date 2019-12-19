import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";

import { getData } from "../actions";
import Portfolio from "./Portfolio";

const HomePage = () => {
  const dispatch = useDispatch();
  const fruits = useSelector(({ fruits }) => fruits);
  const vegetables = useSelector(({ vegetables }) => vegetables);
  useEffect(() => {
    (async () => {
      const fruits = await getData("fruits");
      const vegs = await getData("vegetables");
      dispatch({ type: "GET_FRUITS", payload: fruits });
      dispatch({ type: "GET_VEGS", payload: vegs });
    })();
  }, [dispatch]);
  return (
    <Container style={{ margin: "50px 500px" }}>
      <Portfolio header="Fruits" items={fruits} />
      <Portfolio header="Vegetables" items={vegetables} />
    </Container>
  );
};

export default HomePage;
