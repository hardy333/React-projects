import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({type:"add", title, author});
        setTitle("");
        setAuthor("");
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Book
                title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            <input type="text"
                placeholder="Book
                author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
              <input type="submit" value="add Book"/>
        </form>
    )
}
