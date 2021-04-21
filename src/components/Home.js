import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookForm from "./BookForm"
import BookList from "./BookList"

const Home = () => {
    const { books } = useContext(BookContext);

    return (
        <div className="home">
            {books.length ? (<BookList />) : (<p className="no-book-msg">You have no books to read :)</p>)}
            <BookForm />
        </div>
    );
};

export default Home;