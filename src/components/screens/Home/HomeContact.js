import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import store from '../../../redux/store/store';
import Button from '../../common/Button';

class HomeContact extends Component {
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

  onSend(e){
    e.preventDefault();
    console.log('click');
  }

  render(){
    return (
      <div className="home__contact">
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
  setPropValue: (prop, value) => dispatch( actions.setPropValue(prop, value) )
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContact);
