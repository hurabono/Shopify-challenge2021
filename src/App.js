import React, { Component } from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Cards from "./component/Cards";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 0px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.root} maxWidth="md">
        <Cards />
      </Container>
    </>
  );
}

export default App;
