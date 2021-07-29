let initialState = {};

export const sidebarReducer = (state = initialState, action) => {
	switch(action.type) {
		case 0:
			return {...state};
		default:
			return state;	
	};	
}