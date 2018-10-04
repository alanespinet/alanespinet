import React from 'react';

const FormSending = props => (
  <div className={`form-sending ${ props.sending ? 'sending' : '' }`}>
    <div className="form-sending__wrapper">
      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      <p>Sending...</p>
    </div>
  </div>
);

export default FormSending;
