import { on, createReducer } from "@ngrx/store"
import { increment, decrement, reset } from "./counter.actions"
import { initialState } from "./state"

const _counterReducer = createReducer(
  initialState, 
  on(increment, state => (
    {...state, 
    counter: state.counter + 1,
    })),
    on(decrement, state => (
      {...state, 
      counter: state.counter - 1
    })),
    on(reset, state => ({
      ...state,
      counter: 0
    })))

export function counterReducer(state, action) {
  return _counterReducer(state, action)
}