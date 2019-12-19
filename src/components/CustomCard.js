import React from "react";
import { Card, Image, Label } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const CustomCard = ({ item }) => {
  return (
    <Card style={{ height: "300px", margin: "0" }}>
      <Image src={item.url} wrapped ui={false} style={{ height: "150px" }} />
      <Card.Content style={{ margin: "1rem 0" }}>
        <Card.Header as="h1">
          <NavLink
            style={{ color: "DeepPink" }}
            to={`/${item.type}/${item.name}`}
          >
            {item.name}
          </NavLink>
          <br />
          <Label tag>
            {item.price}.00 Rs/kg
          </Label>
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <span className="date">{item.type}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default CustomCard;
