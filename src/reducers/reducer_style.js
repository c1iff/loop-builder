const defaultStyle = {
  backgroundColor: "",
  alignment: "float-left",
  title: "",
  text: "text-muted"
}


export default function(state = defaultStyle, action) {
  switch(action.type) {
    case 'SET_LOOP_STYLE':
      return action.payload;
  }

  return  state
}
