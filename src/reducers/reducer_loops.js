export default function(state = null, action) {
  switch(action.type) {
    case 'GET_LOOP_DATA':
      return action.payload.data;
  }

  return  state
}
