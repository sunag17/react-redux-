let initialState = {count: 0}



function reducer(state = initialState, action) {
  if(action.type === 'INCREMENTs') {
    return {
      count: state.count + 2
    };
  }
  if(action.type === 'DECREMENTs') {
    return {
      count: state.count - 2
    }
  }

  return state;
}

export default reducer;