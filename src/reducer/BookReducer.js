import {v4 as uuid}  from "uuid";


export const booksReducer = (state,{type, title, author, id} ) => {
    // const {type, title, author, id} = action;
    
    switch(type){
        case "add":
            return [...state,{title, author, id:uuid()}];
        case "remove":
            return state.filter(book => book.id !== id);
    } 
}