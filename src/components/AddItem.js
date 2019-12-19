import React, { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import { Container, Header } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import history from "../history";
import CustomForm from "./CustomForm";

const AddMedicine = props => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const isSignedIn = useSelector(({ signedInUser }) => signedInUser);
  if (!isSignedIn) {
    history.push("/");
  }
  const onSubmit = formValues => {
    const task = firebase
      .storage()
      .ref(`Images/${image.name}`)
      .put(image);
    task.on(
      "state_changed",
      snap => {},
      err => {
        console.log(err);
      },
      async () => {
        try {
          const url = await firebase
            .storage()
            .ref("Images")
            .child(image.name)
            .getDownloadURL();
          const medObj = {
            type: formValues.type,
            price: formValues.price,
            url,
            name: formValues.name,
            description: formValues.description
          };
          const rootRef = firebase
            .database()
            .ref()
            .child("data");
          const typeRef = rootRef.child(formValues.type);
          const medRef = typeRef.child(formValues.name);
          await medRef.set(medObj);
          alert("Added");
          dispatch({ type: "LOADING", payload: false });
        } catch (error) {
          console.log(error);
        }
      }
    );
  };
  const onFileSelect = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <Container text style={{ margin: "30px 0" }}>
      <Header as="h2">Add Item</Header>
      <CustomForm onSubmit={onSubmit} onFileSelect={onFileSelect} />
    </Container>
  );
};

export default AddMedicine;
