import { FATCH_START, FATCH_SUCESS, FATCH_ERROR, ADD_NEW_SMURF, ADD_NEW_ERROR } from '../actions/index'

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FATCH_START:   /// case to accommodate the start of a smurf fetch.
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        case FATCH_SUCESS:    ///  case to accommodate the successful smurf api fetch.
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case FATCH_ERROR:   // cases to accommodate the failed smurf api fetch.
            return {
                ...state,
                isLoading: !state.isLoading,
                error: action.payload
            }
        case ADD_NEW_SMURF:    //  case to accommodate adding a smurf (including the name, nickname including the name, nickname, position,description and an internally generated id)
            const newSmurf = {
                ...action.payload,
                id: Math.random() * 1000
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }

        case ADD_NEW_ERROR:    //  case that adds in a value to the error message.
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.