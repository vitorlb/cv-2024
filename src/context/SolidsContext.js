import createDataContext from "./createDataContext";

const userDataReducer = (state, action) => {
  console.log('payload',action.payload, state)
  switch (action.type) {
      case 'changeAnim':
        return { ...state, animationIndex: action.payload}

    default:
      return state
  }
};

const changeAnim = dispatch => ({num}) => {
  let newNum = num;
  console.log('cAnin', newNum  )
  dispatch({ type: 'changeAnim', payload: newNum })
}

export const { Provider, Context } = createDataContext(
  userDataReducer,
  {
    changeAnim
  },
  { animationIndex: 0 }
)