import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = "savedDecks:Decks"
 
export const FakeData = {
    React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function setStorageData()
{
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(Data));
    return FakeData;
}

export function getDecks(){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
            .then(res => 
                res === null
                ? setStorageData()   // : (AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(Data))).then(res)
                : JSON.parse(res))
}
