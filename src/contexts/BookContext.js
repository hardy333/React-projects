import React,{ createContext, useState, useReducer, useEffect} from 'react'
import {booksReducer} from "./../reducer/BookReducer";

export const BookContext = createContext();



export default function BookContextProvider(props) {
    // const [books, setBooks] = useState([
    //     {title: "title 1", author: "author 1", id:1},
    //     {title: "title 2", author: "author 2", id:2},
    //     {title: "title 3", author: "author 3", id:3}
    // ])

    // const addBook = (title,author) => {
    //     setBooks([...books,{title, author, id:books[books.length-1].id+1}]);
    // }

    // const removeBook = (id) => {
    //     setBooks(() => (books.filter(book => book.id !== id)));
    // }

    const [books, dispatch] = useReducer(booksReducer, [], () => {
        const data = localStorage.getItem("books");
        return  data ? JSON.parse(data)  : [];
    });

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    },[books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
