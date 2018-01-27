import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../store'
import { fetchMatches }  from "../Actions/fetch"

class Vis extends Component {    
    componentDidMount() {
	let query = { userName: "evren" }
	this.props.onLoad(query);
    }
    
    render() {
	if(!this.props.loaded)
	    return null
	else {
	    return ( <div> Evren we found your coffee mate :
		     {this.props.data}
		     </div>
		   )
	}
    }
}

const mapStateToProps = state => ({
  ...state.sequenceState
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
	store.dispatch(fetchMatches(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(Vis)


