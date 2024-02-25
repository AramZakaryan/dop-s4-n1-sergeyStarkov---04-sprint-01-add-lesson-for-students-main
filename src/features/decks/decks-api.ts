import axios from 'axios'


type fetchDecksType = {
  items: [
    {
      author: {
        id: string
        name: string
      },
      id: string
      userId: string
      name: string
      isPrivate: true
      cover: string
      created: string
      updated: string
      cardsCount: number
    }
  ],
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
  fetchDecks: instance.get<fetchDecksType>("/v2/decks")
}