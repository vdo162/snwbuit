import {getAuthUserData} from './auth-reducer.js';
const INITIALIZED_SUCCESES   = 'INITIALIZED-SUCCESES';

let initialState = {
	initialized: false
};

export const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case INITIALIZED_SUCCESES:
			return {
				...state,
				initialized: true
			};
		default:
			return state;	
	};	
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESES});

export const initializeApp = () => (dispatch) => {
	Promise.all([dispatch(getAuthUserData())])
		.then(()=>{
			dispatch(initializedSuccess());
		});
}