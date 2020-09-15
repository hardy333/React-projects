import React, { Component, useContext } from 'react'
import { ColorContext } from './ColorContext';
import { DivContext } from './DivContext'




export default function Div() {
    const {name, age, dispatch} = useContext(DivContext);
    const {color, changeColor} = useContext(ColorContext);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name: </th>
                        <th>Age: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
            </table>

            <button 
            style={{backgroundColor:color}}
            onClick={changeColor}>Color button</button>

            <button onClick={() => dispatch({type:"ADD_ONE"})}>Click 1</button>
            <button onClick={() => dispatch({type:"ADD_TWO"})}>Click 2</button>
            <button onClick={() => dispatch({type:"ADD_THREE"})}>Click 3</button>

        </div>
    )
}
