import React from "react";
import _ from "lodash";
import { Segment, Header } from "semantic-ui-react";
import CustomCard from "./CustomCard";

const style = {
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  alignContent: "center",
  justifyContent: "space-around",
  listStyleType: "none",
  gap: "2rem 1rem",
  borderTop: "4px solid DeepPink",
  backgroundColor: "white"
};

const renderItems = items => {
  const list = [];
  _.forIn(items, (val, key) => {
    list.push(<CustomCard item={val} key={key} />);
  });
  return list;
};

const Portfolio = props => {
  return (
    <React.Fragment>
      <Header as="h1" style={{ fontFamily: "'Acme', sans-serif" }}>
        {props.header}
      </Header>
      <Segment placeholder style={style}>
        {renderItems(props.items)}
      </Segment>
    </React.Fragment>
  );
};

export default Portfolio;
