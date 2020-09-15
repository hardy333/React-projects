import React, { Component, createContext, useState } from 'react'
export const ColorContext = createContext();

export default function ColorContextProvider(props) {

    const [divContext, setDivContext] = useState({
        color: "red",
    });

    const changeColor = () => {
       
        setDivContext(() => {
            if(divContext.color === "red"){
                return {color: "green"}
            }else if(divContext.color === "green"){
                return {color: "red"}
            }
        })
    }
  
        return (
            <ColorContext.Provider  value={{...divContext, changeColor}}>
                {props.children}
            </ColorContext.Provider>
        )
    
}
