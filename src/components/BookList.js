import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
    const { books, removeBook } = useContext(BookContext);

    const handleClick = (id) => {
        removeBook(id);
    };

    return (
        <div className="book-list">
            <ul className="book-list-group">
                {books.map((book) => {
                    return (
                        <li
                            className="book-list-item"
                            key={book.id}
                            onClick={() => { handleClick(book.id) }}>
                            <p className="book-title">{book.title}</p>
                            <p className="book-author">{book.author}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default BookList;