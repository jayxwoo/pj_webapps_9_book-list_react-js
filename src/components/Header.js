import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Header = () => {
    const { books } = useContext(BookContext);

    return (
        <div className="header">
            <h1>Reading List</h1>
            <p>Currently you have <span className="num-of-books">{ books.length }</span> books to get through.. </p>
        </div>
    );
}
 
export default Header;