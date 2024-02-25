import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI, getDecksList } from '../decks-api.ts'

export const DecksList = () => {
  useEffect(() => {
    decksAPI.fetchDecks.
    then(response =>console.log(response.data.items))
  }, [])
  return <ul className={s.list}></ul>
}
