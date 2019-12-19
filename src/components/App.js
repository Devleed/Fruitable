import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import HomePage from "./HomePage";
import AddItem from "./AddItem";
import Navbar from "./Navbar";
import ItemDisplay from "./ItemDisplay";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "../firebaseSetup";
import withFirebaseAuth from "react-with-firebase-auth";
import { useDispatch } from "react-redux";
import CartDisplay from "./CartDisplay";
import LandingPage from "./LandingPage";

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const App = props => {
  const { signOut, signInWithGoogle } = props;
  const dispatch = useDispatch();
  const signUserIn = () => {
    signInWithGoogle()
      .then(({ user }) => {
        dispatch({ type: "SIGN_TOGGLE", payload: user.uid });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const signUserOut = () => {
    dispatch({ type: "SIGN_TOGGLE", payload: null });
    signOut();
  };
  return (
    <Router history={history}>
      <Navbar signIn={signUserIn} signOut={signUserOut} />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/user/cart" exact component={CartDisplay} />
        <Route path="/add/item" exact component={AddItem} />
        <Route path="/:type/:name" exact component={ItemDisplay} />
      </Switch>
    </Router>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
