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
    case 'DECKS/SET_DECKS': {
      return { ...state, decks: action.decks }
    }
    case 'DECKS/ADD_DECK': {
      return {
        ...state,
        decks: [
          action.deck,
          ...state.decks,
        ],
      }
    }
    default:
      return state
  }
}

export type DecksActions = ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: DeckType[]) =>
  ({ type: 'DECKS/SET_DECKS' as const, decks })

export const addDeckAC = (deck: DeckType) =>
  ({ type: 'DECKS/ADD_DECK' as const, deck })