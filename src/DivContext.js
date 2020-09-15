import React, { Component, createContext, useState, useReducer } from 'react';


const ageReducer = (state,action) => {
	switch(action.type){
		case "ADD_ONE":
			return state + 1;
		case "ADD_TWO":
			return state + 2;
		case "ADD_THREE":
			return state + 3;
		default: 
		return state;
	}
}

export const DivContext = createContext();
const DivContextProvider = ({ children }) => {
	const [name, setName] = useState("Gela");
	// const [ age, setAge ] = useState(20);
	const [age, dispatch] = useReducer(ageReducer,20);

	// const increaseAgeByOne = () => {
	// 	setAge(() => age+1);
	// };
	// const increaseAgeByTwo = () => { 
	// 	setAge(() => age+2);
	// };
	// const increaseAgeByThree = () => {
	// 	setAge(() => age+3);
	// };

	return <DivContext.Provider value={{age, name, dispatch}}>{children}</DivContext.Provider>;
};

export default DivContextProvider;
