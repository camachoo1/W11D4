// Constants
const ADD_PRODUCT = 'cart/addProduct'
const REMOVE_PRODUCT = 'cart/removeProduct'
const INCREMENT_COUNT = 'cart/incrementCount'
const DECREMENT_COUNT = 'cart/decrementCount'
const EMPTY_CART = 'cart/emptyCart'
const SET_NEW_COUNT = 'cart/setCount';




// Actions

export function addProduct(productId) {
  return {
    type: ADD_PRODUCT,
    productId
  }
}


export function removeProduct(productId) {
  return {
    type: REMOVE_PRODUCT,
    productId
  }
}

export function incrementCount(productId) {
  return {
    type: INCREMENT_COUNT,
    productId
  }
}

export function decrementCount(productId) {
  return {
    type: DECREMENT_COUNT,
    productId
  }
}

export function emptyCart() {
  return {
    type: EMPTY_CART
  }
}

export function setNewCount (productId, count) {
  return {
    type: SET_NEW_COUNT,
    productId,
    count
  }
}


// Reducer


export default function cartReducer(state = {}, action) {
  Object.freeze(state)
  const id = action.productId
  const nextState = { ...state }
  switch (action.type) {
    case ADD_PRODUCT:
      nextState[id] ? nextState[id].count++ : nextState[id] = { id: id, count: 1 }
      return nextState
    case REMOVE_PRODUCT:
      delete nextState[id]
      return nextState
    case INCREMENT_COUNT:
      nextState[id].count++
      return nextState
    case DECREMENT_COUNT:
      nextState[id].count > 1 ? nextState[id].count-- : delete nextState[id]
      return nextState
    case EMPTY_CART:
      return {}
    case SET_NEW_COUNT:
      const newCount = action.count;
      nextState[id].count = newCount;
      return nextState;
    default:
      return state;
  }
}



// export default function produceReducer(state = {}, action) {
//     // console.log(state)
//   Object.freeze(state)
//   const nextState = {...state}
//   switch (action.type) {
//     case POPULATE:
//       action.produce.forEach(product => {
//         nextState[product.id] = product
//       })
//       return nextState
//     default:
//       return state;
//   }
// }