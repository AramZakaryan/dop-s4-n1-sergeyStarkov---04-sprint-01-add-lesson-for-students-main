import { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {

  switch (action.type) {
    case 'SET_DECKS': {
      const copyState:DecksState = {...state, decks:action.decks}
      return copyState
    }
    default:
      return state
  }
}

export type DecksActions = ReturnType<typeof setDecksAC>

export const setDecksAC = (decks:DeckType[]) =>({type:"SET_DECKS", decks:decks})
