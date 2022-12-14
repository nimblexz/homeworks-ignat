const initState = {
isLoading:false
}

type LoadingActionType={
    type:'CHANGE-LOADING',
    isLoading:boolean
}
export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state,isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean): LoadingActionType => ({
    type:'CHANGE-LOADING',isLoading
}) // fix any