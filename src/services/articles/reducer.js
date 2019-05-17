export default (state = {}, action) => {
  switch (action.type) {
    case 'set-articles':
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
};
