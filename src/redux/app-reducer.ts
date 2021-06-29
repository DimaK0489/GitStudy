import {getAuthUserData} from "./auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ReduxStateType} from "./redux-store";

type InitialStateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: InitialStateType = {
    initialized: false
};

type ActionsType = ReturnType<typeof initializedSuccess>;

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
};

type ThunkType = ThunkAction<void, ReduxStateType, unknown, ActionsType>

type ThunkDispatchType = ThunkDispatch<ReduxStateType, unknown, ActionsType>

export const initializeApp = ():ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}


