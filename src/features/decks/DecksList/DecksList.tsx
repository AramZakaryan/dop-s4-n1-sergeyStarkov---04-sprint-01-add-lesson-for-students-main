import s from './DecksList.module.css'
import { useEffect, useState } from 'react'
import { decksAPI, DeckType,} from '../decks-api.ts'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {

  const decks = useAppSelector(state=>state.decksReducer.decks)

  const dispatch = useAppDispatch()

  useEffect(() => {
    decksAPI.fetchDecks()
      // .then(response => dispatch(setDecksAC(response.data.items)))
      .then(response => dispatch({type:"SET_DECKS", decks:response.data.items}))
  }, [])

  // return <ul className={s.list}></ul>
  return (<>
    {decks.map(d=><DeckItem deck={d}/>)}
    </>)
}
