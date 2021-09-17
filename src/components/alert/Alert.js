import React from "react";
import SnackBar from "my-react-snackbar";

export default function Alert({ open, message, type }) {
  return (
    <SnackBar
      open={open}
      message={message}
      type={type}
      position='top-right'
      timeout={6000}
    />
  );
}
