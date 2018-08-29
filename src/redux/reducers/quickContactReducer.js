const defaultState = {
  name: '',
  phone: '',
  email: '',
  message: '',
  error: ''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case 'SET_PROP_VALUE':
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    default:
      return state;
  }
}
