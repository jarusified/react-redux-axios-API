const matches= (state = { loaded: false, data : {} }, action)  => {
    switch (action.type){
	
    case 'FETCH_MATCHES': {
	return {...state, loaded: true, data: action.payload }
    }

    case 'FETCH_MATCHES_FAIL': {
	return {...state, loaded: false, data: action.payload }
    }
    default:
	return state
    }
}

export default matches
