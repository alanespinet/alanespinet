import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';

import store from '../../../redux/store/store';
import Button from '../../common/Button';

class HomeContact extends Component {
  state = {
    isVerified: false
  };

  onChangeName(e){
    const value = e.target.value;
    this.props.setPropValue('name', value);
  }

  onChangePhone(e){
    const value = e.target.value;
    this.props.setPropValue('phone', value);
  }

  onChangeEmail(e){
    const value = e.target.value;
    this.props.setPropValue('email', value);
  }

  onChangeMessage(e){
    const value = e.target.value;
    this.props.setPropValue('message', value);
  }

  recaptchaLoaded = () => {
    return;
  };

  recaptchaVerified = response => {
    if(response){
      this.setState({ isVerified: true });
    }

    // const secret = process.env.GOOGLE_REC;
  }

  onSend(e){
    e.preventDefault();

    const name = this.props.qc_name;
    const phone = this.props.qc_phone;
    const email = this.props.qc_email;
    const message = this.props.qc_message;

    if( this.state.isVerified ){
      const data = { name, phone, email, message };
      this.props.pSendMail(data);
    } else {
      alert('Please confir that you are a Human');
    }
  }

  render(){
    console.log(process.env.GOOGLE_REC);

    return (
      <div className="home__contact" id="home__contact-us">
        <div className="container">
          <div className="home__contact__form-wrapper">
            <h2>Write me a message</h2>
            <form>
              <div className="home__contact__control-row">
                <div className="home__contact__control-row__control-col home__contact__control-row__control-col--half">
                  <label htmlFor="quick-contact-name">Your Name *</label>
                  <input
                    type="text"
                    id="quick-contact-name"
                    value={this.props.qc_name}
                    onChange={this.onChangeName.bind(this)}
                  />
                </div>

                <div className="home__contact__control-row__control-col home__contact__control-row__control-col--half">
                  <label htmlFor="quick-contact-phone">Your Phone</label>
                  <input
                    type="tel"
                    id="quick-contact-phone"
                    value={this.props.qc_phone}
                    onChange={this.onChangePhone.bind(this)}
                  />
                </div>
              </div>

              <div className="home__contact__control-row">
                <div className="home__contact__control-row__control-col home__contact__control-row__control-col--full">
                  <label htmlFor="quick-contact-email">Your Email</label>
                  <input
                    type="email"
                    id="quick-contact-email"
                    value={this.props.qc_email}
                    onChange={this.onChangeEmail.bind(this)}
                  />
                </div>
              </div>

              <div className="home__contact__control-row">
                <div className="home__contact__control-row__control-col home__contact__control-row__control-col--full">
                  <label htmlFor="quick-contact-message">What would you like to say?</label>
                  <textarea
                    id="quick-contact-message"
                    value={this.props.qc_message}
                    onChange={this.onChangeMessage.bind(this)}
                  >
                  </textarea>
                </div>
              </div>

              <div className="home__contact__control-row">
                <div className="home__contact__control-row__control-col home__contact__control-row__control-col--full recaptcha-wrapper">
                  <Recaptcha
                    sitekey="6LdK4jkUAAAAAMoT0eHPPGGDhl5PhdqUxeHEDKIc"
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.recaptchaVerified}
                  />
                </div>
              </div>

              <div className="home__contact__button-wrapper">
                <Button
                  buttonColor="green"
                  buttonOnClick={this.onSend.bind(this)}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  qc_name: state.quickContact.name,
  qc_phone: state.quickContact.phone,
  qc_email: state.quickContact.email,
  qc_message: state.quickContact.message
});

const mapDispatchToProps = dispatch => ({
  setPropValue: (prop, value) => dispatch( actions.setPropValue(prop, value) ),
  pSendMail: (mail_data) => dispatch( actions.sendMail(mail_data) )
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContact);
