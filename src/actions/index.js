import axios from 'axios';
export const FATCH_START = "FATCH_START"
export const FATCH_SUCESS = 'FATCH_SUCESS'
export const FATCH_ERROR = 'FATCH_ERROR'
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF'
export const ADD_NEW_ERROR = 'ADD_NEW_ERROR'

const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FATCH_START })
        axios.get('http://localhost:3333/smurfs')
            .then((response) => {
                dispatch({ type: FATCH_SUCESS, payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: FATCH_ERROR, payload: error.message })
            })
    }
}
const addNewsmurf = (newSmurf) => {                  /// need to finhs this to addd new  smurf herer
    return {
        type: ADD_NEW_SMURF,
        payload: newSmurf
    }
}

const setErrorMessage = (input) => {
    return { type: ADD_NEW_ERROR, payload: input }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.