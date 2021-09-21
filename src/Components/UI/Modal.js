import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Overlay = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModelBackdrop = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModelBackdrop>{props.children}</ModelBackdrop>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
