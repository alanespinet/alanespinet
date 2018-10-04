const defaultState = {
  name: '',
  phone: '',
  email: '',
  message: '',
  error: '',
  sending: false
};

export default (state = defaultState, action) => {
  switch(action.type){
    case 'SET_PROP_VALUE':
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    case 'SET_SENDING':
      return {
        ...state,
        sending: action.payload
      };

    case 'CLEAR_CONTACT_DATA':
      return defaultState;

    default:
      return state;
  }
}
