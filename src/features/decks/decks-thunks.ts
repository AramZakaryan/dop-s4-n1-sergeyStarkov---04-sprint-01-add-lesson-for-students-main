import { Dispatch } from 'redux'
import { AddDeckParamsType, decksAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks()
    .then(response => dispatch(setDecksAC(response.data.items)))
}

export const addDeckTC = (params: AddDeckParamsType) => (dispatch: Dispatch) => {
  return decksAPI.addDeck(params)
    .then(response => dispatch(addDeckAC(response.data)))
}