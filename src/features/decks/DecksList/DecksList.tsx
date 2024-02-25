import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'

export const DecksList = () => {

 const [ decks ] = useFetchDecks()

  return (<>
    {decks.map(d => <DeckItem key={d.id} deck={d} />)}
  </>)
}
