import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import store from '../../../redux/store/store';

class HomeContact extends Component {
  onChangeName(e){
    const value = e.target.value;
    this.props.setPropValue('name', value);

    console.log(store.getState());
  }

  onChangePhone(e){
    const value = e.target.value;
    this.props.setPropValue('phone', value);

    console.log(store.getState());
  }

  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            id="quick-contact-name"
            value={this.props.qc_name}
            onChange={this.onChangeName.bind(this)}
          />
          <input
            type="text"
            id="quick-contact-phone"
            value={this.props.qc_phone}
            onChange={this.onChangePhone.bind(this)}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  qc_name: state.quickContact.name,
  qc_phone: state.quickContact.phone
});

const mapDispatchToProps = dispatch => ({
  setPropValue: (prop, value) => dispatch( actions.setPropValue(prop, value) )
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContact);
