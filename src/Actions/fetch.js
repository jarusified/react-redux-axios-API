import axios from 'axios'

export const fetchMatches = (query) => {
    return function(dispatch){
	axios.get('http://localhost:3001/matches', {
	    params: {
		sequence: query.userName,
	    }
	})
	    .then((response) => {
		dispatch({ type: 'FETCH_MATCHES', payload: response.data})
	    })
	    .catch((err) => {
		dispatch({ type: "FETCH_MATCHES_FAIL", payload: err })	
	    })
    }
}
