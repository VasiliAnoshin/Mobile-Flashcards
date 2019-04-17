import {GET_DECKS} from '../actions/decks'

export default function decks(state ={}, action){
    console.log('inside reducers')
    console.log(action.decks)
    switch(action.type)
    {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state     
    }
}