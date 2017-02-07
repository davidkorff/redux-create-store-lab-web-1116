export default function createStore(reducer){
	let state
	function getState() {return state}
	function dispatch(action) {
		state = reducer(state, action)
		render()
	}
	dispatch({type: '@@INIT'})
	return {dispatch: dispatch, getState: getState}
}




function render(){}
