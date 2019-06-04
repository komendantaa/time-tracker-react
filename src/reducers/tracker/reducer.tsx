const counter = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case 'TEST':
      return state + 1;
    default:
      return state;
  }
};

export default counter;
