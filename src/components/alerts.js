import React from "react";

const Alert = (props) => {
  return (
    <div className={`alert alert-dismissible ${props.cor}`}>
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <strong>{props.msg}!</strong> {props.mensagem}
    </div>
  );
};

export default Alert;
