const defaultStyle = {
  backgroundColor: "",
  alignment: "float-left",
  title: "",
  text: "text-muted"
}


export default function(state = defaultStyle, action) {
  switch(action.type) {
    case 'SET_LOOP_STYLE':

      const newStyleState = state
      newStyleState[Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]]
      return action.payload;
  }

  return  state
}
