import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
    const { addBook } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = { title: title, author: author };

        addBook(newBook);
        setTitle('');
        setAuthor('');
    };

    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <label htmlFor="bookTitle" className="form-title-label form-label a11y-hidden">Title: </label>
            <input type="text" placeholder="Book title" id="bookTitle" className="form-title-input form-input" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
            <label htmlFor="bookAuthor" className="form-author-label form-label a11y-hidden">Author: </label>
            <input type="text" placeholder="Author name" id="bookAuthor" className="form-author-input form-input" value={author} onChange={(e) => { setAuthor(e.target.value) }} required />
            <input type="submit" value="add book" className="form-submit" />
        </form>
    );
}

export default BookForm;