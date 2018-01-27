const stats = (state = [], action) => {
    switch (action.type){
	
    case 'FETCH_STATS': {
	return {...state, loaded: true, data: action.payload }
    }

    case 'FETCH_STATS_FAIL': {
	return {...state, loaded: false, data: action.payload }
    }

    default:
	return state
    }
}

export default stats

