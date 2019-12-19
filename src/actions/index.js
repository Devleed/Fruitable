import * as firebase from "firebase/app";
import "firebase/database";

export const getData = async (type = "") => {
  const snap = await firebase
    .database()
    .ref()
    .child("data")
    .child(type)
    .once("value");
  return snap.val();
};

export const getItem = async (type, name) => {
  const snap = await firebase
    .database()
    .ref()
    .child("data")
    .child(type)
    .child(name)
    .once("value");
  return snap.val();
};

export const getCartData = async userId => {
  const snap = await firebase
    .database()
    .ref()
    .child("Carts")
    .child(userId)
    .once("value");

  return snap.val();
};
