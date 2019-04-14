import {getDecks} from '../utils/api'
import {receiveDecks} from '../actions/decks'

export function handleInitialeDecks(){
    return(dispatch) => {
        return getDecks().then(({...decks}) => {
            dispatch(receiveDecks))
        })
    }
}