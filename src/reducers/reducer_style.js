export default function(state = {backgroundColor: "bg-success", alignment: "float-left"}, action) {
  switch(action.type) {
    case 'SET_LOOP_STYLE':
      return action.payload;
  }

  return  state
}
