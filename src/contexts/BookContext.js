import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState(() => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    const addBook = (newBook) => {
        setBooks([...books, { title: newBook.title, author: newBook.author, id: uuid() }]);
    };
    const removeBook = (id) => {
        const newBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(newBooks);
    };

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    );
};

export default BookContextProvider;