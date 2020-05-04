import React from "react";

const Alert = (props) => {
  return (
    <div class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <strong>Parabens!</strong> {props.mensagem}
    </div>
  );
};

export default Alert;
