// 同步 action
export const counterIncrementedActionCreator = () => ({
  type: 'counter/incremented',
})

export const counterDecrementedActionCreator = () => ({
  type: 'counter/decremented',
})

const initialState = () => ({ value: 0, reseting: false })

const counter = (state = initialState(), action) => {
  switch (action.type) {
    case 'counter/incremented':
      return Object.assign({}, state, { value: state.value + 1 })
    case 'counter/decremented':
      return Object.assign({}, state, { value: state.value - 1 })
    case 'counter/reseting':
      return Object.assign({}, state, { reseting: action.value })
    case 'counter/reset':
      return initialState()
    default:
      return state
  }
}

export default counter
