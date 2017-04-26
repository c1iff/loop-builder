import { SET_LOOP_STYLE } from '../actions/index'


const defaultStyle = {
  backgroundColor: "",
  alignment: "float-left",
  title: "",
  text: "text-muted"
}


export default function(state = defaultStyle, action) {
  switch(action.type) {
    case SET_LOOP_STYLE:

      return Object.assign({}, state, action.payload);;
  }

  return  state
}
