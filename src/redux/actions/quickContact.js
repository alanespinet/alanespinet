import axios from 'axios';

export const setPropValue = (prop, value) => ({
  type: 'SET_PROP_VALUE',
  payload: { prop, value }
});

export const sendMail = mail_data => {
  return dispatch => {
    return axios.post('http://alanespinet.herokuapp.com/sendmail', mail_data)
      .then(() => {
        dispatch( setSending(false) );
        dispatch( clearContactData() );
      })
      .catch(() => { console.log('message not sent') });
  }
}

const clearContactData = () => ({
  type: 'CLEAR_CONTACT_DATA'
});

export const setSending = sending => ({
  type: 'SET_SENDING',
  payload: sending
});
