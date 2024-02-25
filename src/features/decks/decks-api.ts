import axios from 'axios'


export type DeckType = {
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: true
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type fetchDecksType = {
  items: DeckType      []
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
}


export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<fetchDecksType>('/v2/decks')
  },
}