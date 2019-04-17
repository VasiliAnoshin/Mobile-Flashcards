import {getDecks} from '../utils/api'
import {receiveDecks} from '../actions/decks'

export function handleInitialeDecks(){
    return (dispatch) => {
        console.log('before handleInitialDecks')
        return getDecks().then(({...decks}) => {
            dispatch(receiveDecks(decks))
        })
    }
}