import produce from 'immer'

const cart = (state = [], action) => {
  switch (action.type) {
    case 'Cart/ADD':
      return produce(state, (draft) => {
        const index = draft.findIndex((p) => p.id === action.product.id)

        if (index >= 0) {
          draft[index].amount += 1
        } else {
          draft.push({ ...action.product, amount: 1 })
        }
      })

    case 'Cart/REMOVE':
      return produce(state, (draft) => {
        const index = draft.findIndex((p) => p.id === action.id)

        if (index >= 0) {
          draft.splice(index, 1)
        }
      })

    case 'Cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state
      }

      return produce(state, (draft) => {
        const index = draft.findIndex((p) => p.id === action.id)

        if (index >= 0) {
          draft[index].amount = Number(action.amount)
        }
      })
    }

    default:
      return state
  }
}

export default cart
