import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  Grid,
  Image,
  Label,
  CardMeta,
  CardContent,
  CardDescription,
  CardHeader,
  Button,
  Input
} from "semantic-ui-react";

const renderInput = ({ input }) => {
  return <input {...input} type="number" placeholder="Enter Amount /kg" />;
};

const ItemJSX = ({ item, handleSubmit, addItemToCart }) => {
  const addToCart = ({ amount }) => {
    addItemToCart(amount);
  };
  if (item) {
    return (
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Image src={item.url} style={{ height: "400px" }} />
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <CardHeader
            as="h1"
            style={{
              textDecoration: "underline",
              color: "DeepPink",
              textDecorationColor: "black",
              fontFamily: "'Acme', sans-serif",
              letterSpacing: "2px"
            }}
          >
            {item.name.toUpperCase()}
          </CardHeader>
          <CardMeta>
            <span className="date">{item.type}</span>
          </CardMeta>
          <CardDescription style={{ margin: "10px 0" }}>
            {item.description}
          </CardDescription>
          <CardContent style={{ fontWeight: "bold" }} extra>
            <Label tag>{item.price}.00 Rs/kg</Label>
          </CardContent>
        </Grid.Column>
        <form
          onSubmit={handleSubmit(addToCart)}
          style={{ position: "absolute", bottom: "20px", right: "25px" }}
        >
          <Input>
            <Field name="amount" component={renderInput} />
            <Button
              type="submit"
              style={{
                backgroundColor: "DeepPink",
                color: "white"
              }}
            >
              Add To Cart
            </Button>
          </Input>
        </form>
      </Grid>
    );
  } else {
    return null;
  }
};

export default reduxForm({ form: "addtocart" })(ItemJSX);
